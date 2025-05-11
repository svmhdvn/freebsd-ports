PORTNAME=	obnc
DISTVERSION=	0.17.3
CATEGORIES=	lang
MASTER_SITES=	https://miasap.se/obnc/downloads/
DISTNAME=	${PORTNAME}_${DISTVERSION}

MAINTAINER=	me@svmhdvn.name
COMMENT=	Compiler for Niklaus Wirth's programming language Oberon
WWW=		https://miasap.se/obnc/

LICENSE=	GPLv3
LICENSE_FILE=	${WRKSRC}/COPYING

LIB_DEPENDS=	libgc.so:devel/boehm-gc

WRKSRC=		${WRKDIR}/${PORTNAME}-${DISTVERSION}

CFLAGS+=	-I${PREFIX}/include
LDFLAGS+=	-L${PREFIX}/lib

OPTIONS_DEFINE=		DOCS SDL
OPTIONS_DEFAULT=	DOCS
OPTIONS_SUB=		yes

SDL_DESC=		SDL Support (for Input and XYplane)
SDL_USES=		sdl
USE_SDL=		sdl

do-build:
	cd ${WRKSRC} && ${SETENV} ${MAKE_ENV} ./build --prefix=${PREFIX}

do-install:
	cd ${WRKSRC} && ${SETENV} ${MAKE_ENV} ./install --destdir=${STAGEDIR}
.for b in obnc-path obnc obnc-compile obncdoc
	${STRIP_CMD} ${STAGEDIR}${PREFIX}/bin/${b}
.endfor

do-test:
	cd ${WRKSRC} && ${SETENV} ${TEST_ENV} ./test

.include <bsd.port.mk>
