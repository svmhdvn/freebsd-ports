PORTNAME=	zmx
DISTVERSIONPREFIX=	v
DISTVERSION=	1.0.1
CATEGORIES=	sysutils

MAINTAINER=	siva@FreeBSD.org
COMMENT=	Session persistence for terminal processes
WWW=		https://zmx.sh

LICENSE=	MIT
LICENSE_FILE=	${WRKSRC}/LICENSE

USES=		zig

WITHOUT_FBSD10_FIX=	yes

USE_GITHUB=	yes
GH_ACCOUNT=	neurosnap

PLIST_FILES=	bin/zmx

do-test:
	@(cd ${BUILD_WRKSRC} && ${SETENVI} ${WRK_ENV} ${ZIG_ENV} ${ZIG_CMD} build test ${ZIG_ARGS})

.include <bsd.port.mk>
