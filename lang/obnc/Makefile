PORTNAME=	obnc
DISTVERSION=	0.17.2
CATEGORIES=	lang
MASTER_SITES=	https://miasap.se/obnc/downloads/
DISTNAME=	${PORTNAME}_${DISTVERSION}

MAINTAINER=	me@svmhdvn.name
COMMENT=	Compiler for Niklaus Wirth's programming language Oberon
WWW=		https://miasap.se/obnc/

LICENSE=	GPLv3
LICENSE_FILE=	${WRKSRC}/COPYING

LIB_DEPENDS=	libgc.so:devel/boehm-gc \
		libSDL.so:devel/sdl12

WRKSRC=		${WRKDIR}/${PORTNAME}-${DISTVERSION}

CFLAGS+=	-I${PREFIX}/include
LDFLAGS+=	-L${PREFIX}/lib

OPTIONS_DEFINE=		DOCS
OPTIONS_DEFAULT=	DOCS

do-build:
	cd ${WRKSRC} && ${SETENV} ${MAKE_ENV} ./build --prefix=${PREFIX}

do-install:
	cd ${WRKSRC} && ${SETENV} ${MAKE_ENV} ./install --destdir=${STAGEDIR}
.for b in obnc-path obnc obnc-compile obncdoc
	${STRIP_CMD} ${STAGEDIR}${PREFIX}/bin/${b}
.endfor

do-test:
	cd ${WRKSRC} && ${SETENV} ${MAKE_ENV} ./test

.include <bsd.port.mk>
