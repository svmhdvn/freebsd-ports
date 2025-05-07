PORTNAME=	angle
DISTVERSIONPREFIX=	chromium/
DISTVERSION=	7632
CATEGORIES=	graphics

MAINTAINER=	siva@FreeBSD.org
COMMENT=	Almost Native Graphics Layer Engine
WWW=		https://angleproject.org

LICENSE=	BSD3CLAUSE
LICENSE_FILE=	${WRKSRC}/LICENSE

USES=		compiler:c++17-lang python:build

USE_LDCONFIG=		yes
USE_GITHUB=		yes
GH_ACCOUNT=		google

# TODO port wuffs and add as dependency
#extra_cflags=[ \
#	"-I${LOCALBASE}/include", \
#	"-I${LOCALBASE}/include/harfbuzz", \
#	"-I${LOCALBASE}/include/freetype2"] \

GN_ARGS=	is_official_build=true \
		is_component_build=true \
		is_debug=false \
		target_os="linux" \
		angle_has_build=false \
		extra_cflags=["-I${LOCALBASE}/include"] \
		extra_ldflags=["-L${LOCALBASE}/lib"]

BINARY_ALIAS=	python3=${PYTHON_CMD}

BUILD_WRKSRC=	${WRKSRC}/out

#SUB_FILES=	skia.pc
#SUB_LIST=	SKIA_VERSION=${DISTVERSION}

#post-patch:
#	${REINPLACE_CMD} -e "s|%%PREFIX%%|${PREFIX}|" ${WRKSRC}/BUILD.gn

do-configure:
	cd ${WRKSRC} && ${SETENV} ${CONFIGURE_ENV} gn gen out --args='${GN_ARGS}' && ${SETENV} ${CONFIGURE_ENV} gn ls out --args='${GN_ARGS}'

do-build:
	false

do-install:
	${INSTALL_LIB} ${BUILD_WRKSRC}/*.so* ${STAGEDIR}${PREFIX}/lib
	${INSTALL_DATA} ${BUILD_WRKSRC}/*.a ${STAGEDIR}${PREFIX}/lib
	#(cd ${BUILD_WRKSRC} && \
	#	ls -1 *.so | xargs -I% ${INSTALL_LIB} % ${STAGEDIR}${PREFIX}/lib/%.${DISTVERSION} && \
	#	ls -1 *.so | xargs -I% ${RLN} ${STAGEDIR}${PREFIX}/lib/%.${DISTVERSION} ${STAGEDIR}${PREFIX}/lib/%)
	#${INSTALL_DATA} ${WRKDIR}/skia.pc ${STAGEDIR}${PREFIX}/libdata/pkgconfig/
	#${MKDIR} ${STAGEDIR}${PREFIX}/include/skia/modules
	#(cd ${WRKSRC}/include && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/include/skia '-name *.h')
	#(cd ${WRKSRC}/modules && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/include/skia/modules '-name *.h')

.include <bsd.port.mk>
