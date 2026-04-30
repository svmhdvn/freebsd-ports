PORTNAME=	perfetto
DISTVERSIONPREFIX=	v
DISTVERSION=	54.0
CATEGORIES=	devel

MAINTAINER=	siva@FreeBSD.org
COMMENT=	System profiling, app tracing, and trace analysis
WWW=		https://perfetto.dev/

MASTER_SITES=	https://storage.googleapis.com/perfetto/:perfetto
DISTFILES=	sqlite-amalgamation-3500300.zip:perfetto \
		llvm-project-617a15a9eac96088ae5e9134248d8236e34b91b1.tgz:perfetto

LICENSE=	APACHE20
LICENSE_FILE=	${WRKSRC}/LICENSE

PATCH_SITES=	https://github.com/google/perfetto/commit/:upstream \
		https://codeberg.org/tj/perfetto/commit/:tj
PATCHFILES=	0a47f21e97615e0259dcb8589190aa0912c47bbe.patch:upstream \
		a088e61247413acca700a0179f57fb8f3bd615e0.patch:tj \
		ec0b7c3dc3c02a3665ed12480a6ee2f4772df502.patch:tj \
		a9cd65f169ef3c93847300a78a6ff0f45c1e7353.patch:tj
PATCH_DIST_STRIP=	-p1

BUILD_DEPENDS=	gn:devel/gn

USES=		compiler:c++17-lang ninja python:build

USE_GITHUB=	yes
GH_ACCOUNT=	google
GH_TUPLE=	protocolbuffers:protobuf:v31.1:buildtools_protobuf/buildtools/protobuf \
		abseil:abseil-cpp:20250512.1:buildtools_abseil_cpp/buildtools/abseil-cpp \
		sqlite:sqlite:version-3.50.3:buildtools_sqlite_src/buildtools/sqlite_src \
		libexpat:libexpat:R_2_6_2:buildtools_expat/buildtools/expat/src

GN_ARGS=	is_debug=false \
		skip_buildtools_check=true \
		perfetto_use_system_zlib=true \
		extra_cflags="-I${LOCALBASE}/include -Wno-unused-parameter" \
		extra_ldflags="-L${LOCALBASE}/lib"

BINARY_ALIAS=	python3=${PYTHON_CMD}

BUILD_WRKSRC=	${WRKSRC}/out

ALL_TARGET=	dtrace_probe freebsd_power libperfetto_c.so perfetto tracebox traceconv traced traced_relay

post-extract:
	${MV} ${WRKDIR}/sqlite-amalgamation-3500300 ${WRKSRC}/buildtools/sqlite
	${MV} ${WRKDIR}/llvm-project ${WRKSRC}/buildtools/llvm-project

do-configure:
	cd ${WRKSRC} && ${SETENV} ${CONFIGURE_ENV} gn gen out --args='${GN_ARGS}' && ${SETENV} ${CONFIGURE_ENV} gn ls out --args='${GN_ARGS}'
	cd ${WRKSRC} && ${SETENV} ${CONFIGURE_ENV} tools/gen_c_protos \
		--proto protos/perfetto/trace/power/power_rails.proto \
		--proto protos/perfetto/trace/power/battery_counters.proto \
		--proto protos/perfetto/trace/system_info/cpu_info.proto \
		--proto protos/perfetto/trace/sys_stats/sys_stats.proto \
		--proto protos/perfetto/common/sys_stats_counters.proto \
		${BUILD_WRKSRC}

do-install:
	cd ${BUILD_WRKSRC} && ${INSTALL_PROGRAM} \
		dtrace_probe freebsd_power perfetto tracebox traceconv traced traced_relay \
		${STAGEDIR}${PREFIX}/bin
	${INSTALL_PROGRAM} ${BUILD_WRKSRC}/libperfetto_c.so ${STAGEDIR}${PREFIX}/lib
	${INSTALL_DATA} ${BUILD_WRKSRC}/libperfetto.a ${STAGEDIR}${PREFIX}/lib

.include <bsd.port.mk>
