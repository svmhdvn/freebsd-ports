PORTNAME=	ex
PORTVERSION=	1.0.6
PORTREVISION=	2
CATEGORIES=	devel
MASTER_SITES=	OSSP/lib/${PORTNAME}
PKGNAMEPREFIX=	ossp-

MAINTAINER=	ports@FreeBSD.org
COMMENT=	Small exception handling library for use in C
WWW=		http://www.ossp.org/pkg/lib/ex/

USES=		libtool
GNU_CONFIGURE=	yes
GNU_CONFIGURE_MANPREFIX=${PREFIX}/share
USE_LDCONFIG=	yes

check: build
	@(cd ${WRKSRC} && ${SETENV} ${MAKE_ENV} ${MAKE} ${MAKE_FLAGS} ${MAKEFILE} ${MAKE_ARGS} check)

post-install:
	${STRIP_CMD} ${STAGEDIR}${PREFIX}/lib/libex.so

.include <bsd.port.mk>
