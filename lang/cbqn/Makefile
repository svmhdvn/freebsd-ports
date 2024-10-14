PORTNAME=		cbqn
DISTVERSIONPREFIX=	v
DISTVERSION=		0.8.0
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
			dzaima:cbqnBytecode:c7d83937710889591bad3525077afc30a21e5148:cbqnBytecode/build/bytecodeLocal \
			mlochbaum:Singeli:b43f3999b0c5a40b43ceee258fbe6bb8245d06af:Singeli/build/singeliLocal

MAKEFILE=		makefile
ALL_TARGET=		default
MAKE_ARGS=		notui=1

OPTIONS_DEFINE=		FFI

FFI_DESC=		FFI support
FFI_MAKE_ARGS_OFF=	FFI=0
FFI_LIB_DEPENDS=	libffi.so:devel/libffi

PLIST_FILES=		bin/bqn \
			include/bqnffi.h

post-install:
	${STRIP_CMD} ${STAGEDIR}${PREFIX}/bin/bqn

.include <bsd.port.mk>
