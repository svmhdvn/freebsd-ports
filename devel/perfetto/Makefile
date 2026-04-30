PORTNAME=	perfetto
DISTVERSIONPREFIX=	v
DISTVERSION=	54.0
CATEGORIES=	devel

MAINTAINER=	siva@FreeBSD.org
COMMENT=	TODO
WWW=		https://perfetto.dev/

LICENSE=	BSD3CLAUSE
LICENSE_FILE=	${WRKSRC}/LICENSE

BUILD_DEPENDS=	gn:devel/gn

USES=		compiler:c++17-lang ninja python:build

USE_GITHUB=	yes
GH_ACCOUNT=	google

GH_TUPLE=	abseil:abseil-cpp:20250512.1:buildtools_abseil_cpp/buildtools/abseil-cpp \
		protocolbuffers:protobuf:v31.1:buildtools_protobuf/buildtools/protobuf

#perfetto_use_system_protobuf=true \
#extra_cflags="-I${LOCALBASE}/include -Wno-gcc-compat -Wno-nullability-extension" \
#extra_ldflags="-L${LOCALBASE}/lib"

GN_ARGS=	is_debug=false \
		skip_buildtools_check=true \
		perfetto_use_system_zlib=true

BINARY_ALIAS=	python3=${PYTHON_CMD}

BUILD_WRKSRC=	${WRKSRC}/out

ALL_TARGET=	tracebox
PLIST_FILES=	bin/tracebox

do-configure:
	cd ${WRKSRC} && ${SETENV} ${CONFIGURE_ENV} gn gen out --args='${GN_ARGS}' && ${SETENV} ${CONFIGURE_ENV} gn ls out --args='${GN_ARGS}'

do-install:
	${INSTALL_PROGRAM} ${BUILD_WRKSRC}/tracebox ${STAGEDIR}${PREFIX}/bin

.include <bsd.port.mk>
