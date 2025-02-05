PORTNAME=	libopensmtpd
PORTVERSION=	0.7
CATEGORIES=	mail
MASTER_SITES=	https://imperialat.at/releases/

MAINTAINER=	see@seos.fr
COMMENT=	Library for writing opensmtpd filters
WWW=		https://imperialat.at/dev/libopensmtpd/

LICENSE=	ISCL
LICENSE_FILE=	${WRKSRC}/LICENSE

USE_LDCONFIG=	yes

RUN_DEPENDS=	opensmtpd>=6.6.0:mail/opensmtpd
LIB_DEPENDS=	libevent.so:devel/libevent
BUILD_DEPENDS=	gmake:devel/gmake

# Makefile.gnu enables the various OpenBSD-compat workarounds, so we use it to build
# but Makefile builds the .a library so let's just run the GNU one first and let the
# build system take care of running the rest.
pre-build:
	CFLAGS="-I${LOCALBASE}/include" LDFLAGS="-L${LOCALBASE}/lib" ${GMAKE} -f Makefile.gnu -C ${BUILD_WRKSRC}

# Makefile doesn't install the .so libraries or opensmtpd.h, and
# Makefile.gnu uses GNU-specific options to install, so we can't
# use either. So we just have to install the files manually then
do-install:
	${INSTALL_DATA} ${WRKSRC}/opensmtpd.h ${STAGEDIR}${PREFIX}/include/
	${INSTALL_MAN} ${WRKSRC}/osmtpd_run.3 ${STAGEDIR}${PREFIX}/share/man/man3/
	${INSTALL_LIB} ${WRKSRC}/libopensmtpd.a ${STAGEDIR}${PREFIX}/lib/libopensmtpd.a
	${INSTALL_LIB} ${WRKSRC}/libopensmtpd.so.0.1.0 ${STAGEDIR}${PREFIX}/lib/libopensmtpd.so.0.1.0
	${LN} -sf libopensmtpd.so.0.1.0 ${STAGEDIR}${PREFIX}/lib/libopensmtpd.so.0
	${LN} -sf libopensmtpd.so.0.1.0 ${STAGEDIR}${PREFIX}/lib/libopensmtpd.so

.include <bsd.port.mk>
