PORTNAME=	vsftpd-ext
PORTVERSION=	${UPSTREAMVERSION}.${EXTVERSION}
PORTREVISION=	3
CATEGORIES=	ftp
MASTER_SITES=	http://vsftpd.devnet.ru/files/${UPSTREAMVERSION}/ext.${EXTVERSION}/
PKGNAMESUFFIX?=	${SSL_SUFFIX}${PKGNAMESUFFIX2}
DISTNAME=	vsFTPd-${UPSTREAMVERSION}-ext${EXTVERSION}

MAINTAINER=	xjflyttp@gmail.com
COMMENT=	FTP daemon that aims to be "very secure". Extended build
WWW=		https://vsftpd.devnet.ru/eng/

LICENSE=	GPLv2
LICENSE_FILE=	${WRKSRC}/COPYING

UPSTREAMVERSION=3.0.3
EXTVERSION=	1

USES=		alias gmake tar:tgz
WRKSRC=		${WRKDIR}/vsFTPd-${UPSTREAMVERSION}-ext.${EXTVERSION}
ALL_TARGET=	vsftpd

USERS=		ftp
GROUPS=		ftp

DOCFILES=	AUDIT BENCHMARKS BUGS Changelog FAQ INSTALL LICENSE \
		README README.security README.ssl REFS REWARD \
		SIZE SPEED TODO TUNING

OPTIONS_DEFINE=	RC_SCRIPT VSFTPD_SSL DOCS
OPTIONS_DEFAULT=RC_SCRIPT
RC_SCRIPT_DESC=	install RC_SCRIPT

VSFTPD_SSL_DESC=Include support for SSL

CONFLICTS=	vsftpd-3* vsftpd${SSL_SUFFIX}${PKGNAMESUFFIX2}-3*

.include <bsd.port.options.mk>

.if ${PORT_OPTIONS:MRC_SCRIPT}
USE_RC_SUBR=	vsftpd
.endif

VSFTPD_OPTIMIZED=	${CFLAGS:M-O*}
.if defined(CFLAGS) && !empty(VSFTPD_OPTIMIZED)
VSFTPD_NO_OPTIMIZED=	-e "s|-O2 ||"
.endif

.if ${PORT_OPTIONS:MVSFTPD_SSL} && !defined(WITHOUT_SSL)
USES+=		ssl
SSL_SUFFIX=	-ssl
CFLAGS+=	-I${OPENSSLINC}
LDFLAGS+=	-L${OPENSSLLIB}
.endif

post-patch-VSFTPD_SSL-on:
	@${REINPLACE_CMD} -e 's|find_func SSL_library_init ssl.o|true|' ${WRKSRC}/vsf_findlibs.sh

do-configure:
.if ${PORT_OPTIONS:MVSFTPD_SSL} && !defined(WITHOUT_SSL)
	${REINPLACE_CMD} -e \
		"s|#undef VSF_BUILD_TCPWRAPPERS|#define VSF_BUILD_TCPWRAPPERS 1|" \
		-e "s|#undef VSF_BUILD_SSL|#define VSF_BUILD_SSL 1|" \
		${WRKSRC}/builddefs.h
.else
	${REINPLACE_CMD} -e \
		"s|#undef VSF_BUILD_TCPWRAPPERS|#define VSF_BUILD_TCPWRAPPERS 1|" \
		${WRKSRC}/builddefs.h
.endif
	${REINPLACE_CMD} -e \
		"s|#define VSF_CONFIG_PATH \"/etc/vsftpd/\"|#define VSF_CONFIG_PATH \"${PREFIX}/etc/\"|" \
		-e "s|#define VSF_CONFIG_PREFIX \"\"|#define VSF_CONFIG_PREFIX \"vsftpd.\"|" \
		${WRKSRC}/builddefs.h
	${REINPLACE_CMD} -e "s|/etc/v|${PREFIX}/etc/v|" \
		${WRKSRC}/vsftpd.8 ${WRKSRC}/vsftpd.conf.5
	${REINPLACE_CMD} -e "s|/usr/share/empty|${PREFIX}/share/vsftpd/empty|" \
		${WRKSRC}/tunables.c
	${REINPLACE_CMD} ${VSFTPD_NO_OPTIMIZED} \
		-e '/^CC/s/=/?=/' \
		-e '/^CFLAGS/{s/=/+=/;s/-O[0-9]//;}' \
		-e '/^LIBS/s|=.*|= `./vsf_findlibs.sh`|' \
		-e '/^LINK/s/=.*/=/' \
		-e 's|-Werror||' \
		${WRKSRC}/Makefile
	${REINPLACE_CMD} -e '/-lutil/d' ${WRKSRC}/vsf_findlibs.sh

	@${ECHO_CMD} "secure_chroot_dir=${PREFIX}/share/vsftpd/empty" >> \
		${WRKSRC}/vsftpd.conf
	@${ECHO_CMD} >>${WRKSRC}/vsftpd.conf ""
	@${ECHO_CMD} >>${WRKSRC}/vsftpd.conf \
		"# If using vsftpd in standalone mode, uncomment the next two lines:"
	@${ECHO_CMD} >>${WRKSRC}/vsftpd.conf "# listen=YES"
	@${ECHO_CMD} >>${WRKSRC}/vsftpd.conf "# background=YES"
	${REINPLACE_CMD} -e "s|^listen=.*|listen=NO|" \
		${WRKSRC}/vsftpd.conf

do-install:
	${INSTALL_PROGRAM} ${WRKSRC}/vsftpd ${STAGEDIR}${PREFIX}/libexec/
	${INSTALL_DATA} ${WRKSRC}/vsftpd.conf ${STAGEDIR}${PREFIX}/etc/vsftpd.conf.sample
	${INSTALL_MAN} ${WRKSRC}/vsftpd.conf.5 ${STAGEDIR}${PREFIX}/share/man/man5/
	${INSTALL_MAN} ${WRKSRC}/vsftpd.8 ${STAGEDIR}${PREFIX}/share/man/man8/
	${MKDIR} ${STAGEDIR}/var/ftp ${STAGEDIR}${PREFIX}/share/vsftpd/empty

do-install-DOCS-on:
	${MKDIR} ${STAGEDIR}${DOCSDIR}
	${INSTALL_DATA} ${DOCFILES:S,^,${WRKSRC}/,} ${STAGEDIR}${DOCSDIR}/
.for i in EXAMPLE SECURITY
	${MKDIR} ${STAGEDIR}${DOCSDIR}/${i}
	${CP} -p -R -L ${WRKSRC}/${i}/./ ${STAGEDIR}${DOCSDIR}/${i}/
.endfor

.include <bsd.port.mk>
