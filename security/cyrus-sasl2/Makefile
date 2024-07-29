PORTNAME=	cyrus-sasl
PORTVERSION=	2.1.28
PORTREVISION=	1
CATEGORIES=	security
MASTER_SITES=	https://github.com/cyrusimap/cyrus-sasl/releases/download/${PORTNAME}-${PORTVERSION}/

MAINTAINER=	ume@FreeBSD.org
COMMENT=	RFC 2222 SASL (Simple Authentication and Security Layer)
WWW=		https://www.cyrusimap.org/sasl/

LICENSE=	BSD4CLAUSE
LICENSE_FILE=	${WRKSRC}/COPYING

FLAVORS=		default noldap
noldap_PKGNAMESUFFIX=	-noldap

USES=		cpe gmake libtool:keepla pathfix perl5 ssl
USE_PERL5=	patch
USE_LDCONFIG=	yes
GNU_CONFIGURE=	yes
CPE_VENDOR=	cmu

SASLDB_DIR=	/var/db/sasl2
CONFIGURE_ARGS=	--with-openssl=${OPENSSLBASE} \
		--with-dbpath=${SASLDB_DIR}/sasldb2 \
		--enable-static \
		--with-dblib=none

#MAKE_ENV+=	INSTALL_STRIP_FLAG=${STRIP}

USERS=	cyrus
GROUPS=	cyrus

OPTIONS_DEFINE=		ALWAYSTRUE AUTHDAEMOND DOCS KEEP_DB_OPEN LDAP \
			OBSOLETE_CRAM_ATTR OBSOLETE_DIGEST_ATTR SASLAUTHD \
			OPIE
OPTIONS_EXCLUDE_FreeBSD_13=	OPIE
OPTIONS_RADIO=		SASLDB
OPTIONS_RADIO_SASLDB=	NDBM BDB GDBM LMDB
OPTIONS_GROUP=		SQL
OPTIONS_GROUP_SQL=	MYSQL PGSQL SQLITE
OPTIONS_GROUP=		PLUGIN
OPTIONS_GROUP_PLUGIN=	ANONYMOUS CRAM DIGEST GSSAPI LOGIN NTLM OTP PLAIN \
			SCRAM SRP
OPTIONS_DEFAULT=	ANONYMOUS AUTHDAEMOND NDBM OBSOLETE_CRAM_ATTR CRAM \
			OBSOLETE_DIGEST_ATTR DIGEST LOGIN NTLM OTP PLAIN SCRAM
OPTIONS_SUB=		yes

.if ${FLAVOR:U} == noldap
OPTIONS_EXCLUDE=	LDAP
.endif

ALWAYSTRUE_DESC=		Alwaystrue password verifier (discouraged)
ALWAYSTRUE_CONFIGURE_ENABLE=	alwaystrue

AUTHDAEMOND_DESC=		Use of authdaemon
AUTHDAEMOND_CONFIGURE_WITH=	authdaemond=/var/run/authdaemond.sock

KEEP_DB_OPEN_DESC=		Keep handle to Berkeley DB open
KEEP_DB_OPEN_CONFIGURE_ENABLE=	keep-db-open

OBSOLETE_CRAM_ATTR_DESC=cmusaslsecretCRAM-MD5 auxprop property
OBSOLETE_CRAM_ATTR_CONFIGURE_OFF=--enable-obsolete_cram_attr=no

OBSOLETE_DIGEST_ATTR_DESC=cmusaslsecretDIGEST-MD5 auxprop property
OBSOLETE_DIGEST_ATTR_CONFIGURE_OFF=--enable-obsolete_digest_attr=no

OPIE_DESC=		Use OPIE with OTP

LDAP_DESC=		LDAP support
LDAP_CONFIGURE_ENABLE=	ldapdb
LDAP_CONFIGURE_WITH=	ldap=${PREFIX}
LDAP_USES=		ldap

SASLAUTHD_DESC=			saslauthd support
SASLAUTHD_RUNPATH=		/var/run/saslauthd
SASLAUTHD_CONFIGURE_WITH=	saslauthd=${SASLAUTHD_RUNPATH}

SASLDB_DESC=		SASLdb auxprop plugin
BDB_USES=		bdb
BDB_CONFIGURE_ON=	--with-dblib=berkeley \
			--with-bdb-libdir=${BDB_LIB_DIR} \
			--with-bdb-incdir=${BDB_INCLUDE_DIR} \
			--with-bdb=${BDB_LIB_NAME}

NDBM_DESC=		NDBM support from base
NDBM_CONFIGURE_ON=	--with-dblib=ndbm

GDBM_LIB_DEPENDS=	libgdbm.so:databases/gdbm
GDBM_CONFIGURE_ON=	--with-dblib=gdbm \
			--with-gdbm=${LOCALBASE}

LMDB_DESC=		OpenLDAP Lightning Memory-Mapped Database support
LMDB_LIB_DEPENDS=	liblmdb.so:databases/lmdb
LMDB_CONFIGURE_ON=	--with-dblib=lmdb
LMDB_CFLAGS=		-I${LOCALBASE}/include
LMDB_LDFLAGS=		-L${LOCALBASE}/lib

SQL_CONFIGURE_ENABLE=	sql
MYSQL_USES=		mysql
MYSQL_CONFIGURE_WITH=	mysql
PGSQL_USES=		pgsql
PGSQL_CONFIGURE_WITH=	pgsql
SQLITE_USES=		sqlite:3
SQLITE_CONFIGURE_WITH=	sqlite3

ANONYMOUS_DESC=			ANONYMOUS authentication
ANONYMOUS_CONFIGURE_ENABLE=	anon

CRAM_DESC=		CRAM-MD5 authentication
CRAM_CONFIGURE_ENABLE=	cram

DIGEST_DESC=		DIGEST-MD5 authentication
DIGEST_CONFIGURE_ENABLE=digest

LOGIN_DESC=		LOGIN authentication
LOGIN_CONFIGURE_ENABLE=	login

NTLM_DESC=		NTLM authentication
NTLM_CONFIGURE_ENABLE=	ntlm

GSSAPI_DESC=		GSSAPI authentication
GSSAPI_USES=		gssapi
GSSAPI_CONFIGURE_ON=	--enable-gssapi=${GSSAPIBASEDIR} \
			--with-gss_impl=${GSSAPI_VENDOR} \
			${GSSAPI_CONFIGURE_ARGS}
GSSAPI_CONFIGURE_OFF=	--disable-gssapi

OTP_DESC=		OTP authentication
OTP_CONFIGURE_ENABLE=	otp

PLAIN_DESC=		PLAIN authentication
PLAIN_CONFIGURE_ENABLE=	plain

SCRAM_DESC=		SCRAM authentication
SCRAM_CONFIGURE_ENABLE=	scram

SRP_DESC=		SRP authentication
SRP_CONFIGURE_ENABLE=	srp srp-setpass

PORTDOCS=		*

.include <bsd.port.options.mk>

.if ${PORT_OPTIONS:MNDBM}
SASLDB_NAME=	sasldb2.db
.elif ${PORT_OPTIONS:MBDB}
SASLDB_NAME=	sasldb2
.elif ${PORT_OPTIONS:MGDBM} || ${PORT_OPTIONS:MLMDB}
SASLDB_NAME=	sasldb2
.else
SASLDB=	"@comment "
.endif

PLIST_SUB+=	CYRUS_USER=${USERS} \
		SASLDB=${SASLDB} SASLDB_DIR=${SASLDB_DIR} \
		SASLAUTHD_RUNPATH=${SASLAUTHD_RUNPATH}

#SUB_FILES=	pkg-deinstall pkg-install pkg-message
#SUB_LIST=	CYRUS_USER=${CYRUS_USER} CYRUS_GROUP=${CYRUS_GROUP} \
#		SASLDB_DIR=${SASLDB_DIR} SASLDB_NAME=${SASLDB_NAME}
#PLIST_SUB=	RUNPATH=${RUNPATH} SASLDB_NAME=${SASLDB_NAME}

.if ${OPSYS} == FreeBSD && ${OSREL:R} >= 14
.if ${PORT_OPTIONS:MOPIE} && ${PORT_OPTIONS:MOTP}
CONFIGURE_ARGS+=--with-opie=${LOCALBASE}
LIB_DEPENDS+=	libopie.so:security/opie
.else
CONFIGURE_ARGS+=--without-opie
.endif
.endif

SASL_DOCS=	AUTHORS COPYING ChangeLog INSTALL.TXT README
SASLAUTHD_DOCS=	COPYING ChangeLog LDAP_SASLAUTHD

.if ${PORT_OPTIONS:MLDAP}
.if defined(WITH_OPENLDAP_VER)
WANT_OPENLDAP_VER=	${WITH_OPENLDAP_VER}
.endif
.endif

#LIBTOOL=	${LOCALBASE}/bin/libtool
#post-patch:
#	@${REINPLACE_CMD} \
#		-e "/^LIBTOOL=/s|\$$(top_builddir)/libtool|${LIBTOOL}|g" \
#		${WRKSRC}/configure

post-install-DOCS-on:
	${MKDIR} ${STAGEDIR}${DOCSDIR}
	cd ${WRKSRC}/doc && ${COPYTREE_SHARE} . ${STAGEDIR}${DOCSDIR} \
		"! ( -path */html/_sources* -o -name .buildinfo \
		-o -name Makefile -o -name Makefile.in \
		-o -name Makefile.in.bak -o -name Makefile.am \
		-o -name NTMakefile -o -name .cvsignore )"
	${INSTALL_DATA} ${FILESDIR}/Sendmail.README ${STAGEDIR}${DOCSDIR}
.for f in ${SASL_DOCS}
	${INSTALL_DATA} ${WRKSRC}/${f} ${STAGEDIR}${DOCSDIR}
.endfor
	${MKDIR} ${STAGEDIR}${DOCSDIR}/saslauthd
.for f in ${SASLAUTHD_DOCS}
	${INSTALL_DATA} ${WRKSRC}/saslauthd/${f} ${STAGEDIR}${DOCSDIR}/saslauthd
.endfor

post-install-SASLAUTHD-on:
	${INSTALL} -d -o ${USERS} -g mail -m 0750 ${STAGEDIR}${SASLAUTHD_RUNPATH}

_post-install-SASLDB:
	${INSTALL} -d -o ${USERS} -g mail -m 0750 ${STAGEDIR}${SASLDB_DIR}

post-install-BDB-on: _post-install-SASLDB
post-install-GDBM-on: _post-install-SASLDB
post-install-LMDB-on: _post-install-SASLDB
post-install-NDBM-on: _post-install-SASLDB

.include <bsd.port.mk>
