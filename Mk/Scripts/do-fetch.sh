#!/bin/sh
#
# MAINTAINER: portmgr@FreeBSD.org

set -e
set -o pipefail

. "${dp_SCRIPTSDIR}/functions.sh"

validate_env dp_DEVELOPER dp_DISABLE_SIZE dp_DISTDIR dp_DISTINFO_FILE \
	dp_DIST_SUBDIR dp_ECHO_MSG dp_FETCH_AFTER_ARGS dp_FETCH_BEFORE_ARGS \
	dp_FETCH_CMD dp_FETCH_ENV dp_FILES_FILE dp_FORCE_FETCH_ALL \
	dp_FORCE_FETCH_LIST dp_MASTER_SITE_BACKUP dp_MASTER_SITE_OVERRIDE \
	dp_MASTER_SORT_AWK dp_NO_CHECKSUM dp_RANDOMIZE_SITES dp_SITE_FLAVOR \
	dp_SITES_FILE dp_TARGET

[ -n "${DEBUG_MK_SCRIPTS}" -o -n "${DEBUG_MK_SCRIPTS_DO_FETCH}" ] && set -x

set -u

case ${dp_TARGET} in
	do-fetch|makesum)
		if [ ! -d "${dp_DISTDIR}" ]; then
			mkdir -p "${dp_DISTDIR}"
		fi
		cd "${dp_DISTDIR}"
		;;
esac

. $dp_SITES_FILE

# Read the list of files to fetch from stdin, one per line, instead of
# from the command line to workatound ARG_MAX limits.
while IFS= read -r _file; do
	file=${_file%%:*}

	# If this files has groups
	if [ "$_file" = "$file" ]; then
		select=DEFAULT
	else
		select=$(echo "${_file##*:}" | sed -e 's/,/ /g')
	fi

	filebasename=${file##*/}
	if [ -n "${dp_FORCE_FETCH_ALL}" ]; then
		force_fetch=true
	else
		force_fetch=false
		for afile in ${dp_FORCE_FETCH_LIST}; do
			afile=${afile##*/}
			if [ "x$afile" = "x$filebasename" ]; then
				force_fetch=true
			fi
		done
	fi
	if [ -f "${file}" -a "$force_fetch" != "true" ]; then
		continue
	fi
	full_file="${dp_DIST_SUBDIR:+${dp_DIST_SUBDIR}/}${file}"
	if [ -L "$file" ]; then
		${dp_ECHO_MSG} "=> ${dp_DISTDIR}/$file is a broken symlink."
		${dp_ECHO_MSG} "=> Perhaps a filesystem (most likely a CD) isn't mounted?"
		${dp_ECHO_MSG} "=> Please correct this problem and try again."
		exit 1
	fi
	if [ -f "${dp_DISTINFO_FILE}" -a -z "${dp_NO_CHECKSUM}" ]; then
		_sha256sum=$(distinfo_data SHA256 "${full_file}")
		if [ -z "$_sha256sum" ]; then
			${dp_ECHO_MSG} "=> ${dp_DIST_SUBDIR:+$dp_DIST_SUBDIR/}$file is not in ${dp_DISTINFO_FILE}."
			${dp_ECHO_MSG} "=> Either ${dp_DISTINFO_FILE} is out of date, or"
			${dp_ECHO_MSG} "=> ${dp_DIST_SUBDIR:+$dp_DIST_SUBDIR/}$file is spelled incorrectly."
			exit 1
		fi
	fi
	case ${dp_TARGET} in
		do-fetch|makesum)
			${dp_ECHO_MSG} "=> $file doesn't seem to exist in ${dp_DISTDIR}."
			if [ ! -w "${dp_DISTDIR}" ]; then
				${dp_ECHO_MSG} "=> ${dp_DISTDIR} is not writable by you; cannot fetch."
				exit 1
			fi
			;;
	esac
	__MASTER_SITES_TMP=
	for group in $select; do
		# Disable nounset for this, it may come up empty, but
		# we don't want to fail with a strange error here.
		set +u
		eval ___MASTER_SITES_TMP="\${_${dp_SITE_FLAVOR}_SITES_${group}}"
		set -u
		if [ -n "${___MASTER_SITES_TMP}" ] ; then
			__MASTER_SITES_TMP="${__MASTER_SITES_TMP} ${___MASTER_SITES_TMP}"
		else
			case ${dp_TARGET} in
				do-fetch|makesum)
					if [ -n "${dp_DEVELOPER}" ]; then
						${dp_ECHO_MSG} "===> /!\\ Error /!\\"
					else
						${dp_ECHO_MSG} "===> /!\\ Warning /!\\"
					fi
					${dp_ECHO_MSG} "     The :${group} group used for $file is missing"
					${dp_ECHO_MSG} "     from ${dp_SITE_FLAVOR}_SITES. Check for typos, or errors."
					if [ -n "${dp_DEVELOPER}" ]; then
						exit 1
					fi
					;;
			esac

		fi
	done
	___MASTER_SITES_TMP=
	SORTED_MASTER_SITES_CMD_TMP="echo ${dp_MASTER_SITE_OVERRIDE} $(echo -n "${__MASTER_SITES_TMP}" | awk "${dp_MASTER_SORT_AWK}") ${dp_MASTER_SITE_BACKUP}"
	case ${dp_TARGET} in
		fetch-list)
			echo -n "mkdir -p ${dp_DISTDIR} && "
			echo -n "cd ${dp_DISTDIR} && { "
			;;
	esac
	if [ -n "${dp_RANDOMIZE_SITES}" ]; then
		sites="$(${SORTED_MASTER_SITES_CMD_TMP} | ${dp_RANDOMIZE_SITES})"
	else
		sites="$(${SORTED_MASTER_SITES_CMD_TMP})"
	fi
	case ${file} in
		*/*)
			case ${dp_TARGET} in
				fetch-list)
					echo -n "mkdir -p \"${file%/*}\" && "
					;;
				*)
					mkdir -p "${file%/*}"
					;;
			esac
		;;
	esac
	urls=""
	for site in ${sites}; do
		# When the distname is not the last part of the final url, we append a
		# `?dummy=/` so that the url ends up looking something like this:
		# http://foo.bar/baz/1.0?dummy=/baz-1.0.tar.gz
		#
		# This tricks fetch into save the file which path really is "baz/1.0" as
		# "baz-1.0.tar.gz" which is what the framework wants.  This is only "used"
		# for the fetch-url-list-int which is used by `make fetch-url-list` which
		# generates a long list of urls.
		#
		# When we are actually fetching, we always set `-o $file`, so we can remove
		# the `?dummy=/`, and we don't need to append the distname.
		case "${site}" in
			*\?dummy=/)
				url="${site%?dummy=/}"
			;;
			*\&dummy=/)
				url="${site%&dummy=/}"
			;;
			*)
				url="${site}${file}"
			;;
		esac
		urls="${urls} ${url}"
	done
	case ${dp_TARGET} in
		do-fetch|makesum)
			${dp_ECHO_MSG} "=> Attempting to fetch ${file} from these URLs in order:"
			echo "${urls}" | xargs -n1 printf '=>\t%s\n'

			_fetch_cmd="${dp_FETCH_CMD} ${dp_FETCH_BEFORE_ARGS} -1 -o ${file}"
			CKSIZE=$(distinfo_data SIZE "${full_file}")
			if [ -z "${dp_DISABLE_SIZE}" -a -n "${CKSIZE}" ]; then
				_fetch_cmd="${_fetch_cmd} -S ${CKSIZE}"
			fi
			_fetch_cmd="${_fetch_cmd} ${urls} ${dp_FETCH_AFTER_ARGS}"
			if ! env -S "${dp_FETCH_ENV}" ${_fetch_cmd}; then
				${dp_ECHO_MSG} "=> Couldn't fetch it - please try to retrieve this"
				${dp_ECHO_MSG} "=> port manually into ${dp_DISTDIR} and try again."
  				rm -f "${file}"
				exit 1
			fi

			;;
		fetch-list)
			echo -n "env $(escape "${_fetch_cmd}") || echo \"${file}\" not fetched; }"
			;;
		fetch-url-list-int)
  			echo "${urls}" | xargs -n1
	esac
done < $dp_FILES_FILE

