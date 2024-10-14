PORTNAME=		cbqn
DISTVERSIONPREFIX=	v
DISTVERSION=		0.9.0
CATEGORIES=		lang

MAINTAINER=		me@svmhdvn.name
COMMENT=		BQN implementation in C
WWW=			https://github.com/dzaima/CBQN

LICENSE=		APACHE20 BSL GPLv3 LGPL3 MIT MPL20
LICENSE_COMB=		multi
LICENSE_FILE_APACHE20=	${WRKSRC}/licenses/LICENSE-Apache2
LICENSE_FILE_BSL=	${WRKSRC}/licenses/LICENSE-Boost
LICENSE_FILE_GPLv3=	${WRKSRC}/licenses/LICENSE-GPLv3
LICENSE_FILE_LGPL3=	${WRKSRC}/licenses/LICENSE-LGPLv3
LICENSE_FILE_MIT=	${WRKSRC}/licenses/LICENSE-MIT-sort
LICENSE_FILE_MPL20=	${WRKSRC}/licenses/LICENSE-MPL2

USES=			gmake pkgconfig

USE_GITHUB=		yes
GH_ACCOUNT=		dzaima
GH_PROJECT=		CBQN
GH_TUPLE=		dzaima:replxx:13f7b60f4f79c2f14f352a76d94860bad0fc7ce9:replxx/build/replxxLocal \
			dzaima:cbqnBytecode:0bdfb86d438a970b983afbca93011ebd92152b88:cbqnBytecode/build/bytecodeLocal \
			mlochbaum:Singeli:53f42ce4331176d281fa577408ec5a652bdd9127:Singeli/build/singeliLocal

MAKEFILE=		makefile
ALL_TARGET=		default
MAKE_ARGS=		notui=1 nogit=1 version=${DISTVERSION}

OPTIONS_DEFINE=		FFI

FFI_DESC=		FFI support
FFI_MAKE_ARGS_OFF=	FFI=0
FFI_LIB_DEPENDS=	libffi.so:devel/libffi

PLIST_FILES=		bin/bqn \
			include/bqnffi.h

post-install:
	${STRIP_CMD} ${STAGEDIR}${PREFIX}/bin/bqn

.include <bsd.port.mk>
