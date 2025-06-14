PORTNAME=	influxdb3
DISTVERSIONPREFIX=	v
DISTVERSION=	3.4.0
CATEGORIES=	databases

MAINTAINER=	me@svmhdvn.name
COMMENT=	Scalable datastore for metrics, events, and real-time analytics
WWW=		https://influxdata.com/

LICENSE=		APACHE20 MIT
LICENSE_COMB=		dual
LICENSE_FILE_APACHE20=	${WRKSRC}/LICENSE-APACHE
LICENSE_FILE_MIT=	${WRKSRC}/LICENSE-MIT

USES=		cpe cargo python gmake sqlite
USE_GITHUB=	yes
GH_ACCOUNT=	influxdata
GH_PROJECT=	influxdb
CPE_VENDOR=	influxdata

BUILD_DEPENDS=	protoc:devel/protobuf
LIB_DEPENDS=	libzstd.so:archivers/zstd \
		lib${PYTHON_VERSION}.so:${PYTHON_PORTSDIR}
TEST_DEPENDS=	cargo-nextest:devel/nextest

# Update these hashes with every new version
# See: https://github.com/influxdata/influxdb/commit/e9d4f6c85ba57ae0d832b94a96431d5215af6138
CARGO_ENV+=		GIT_HASH=02d7ee1e6fec5b62debbe862881562e451624de6 \
			GIT_HASH_SHORT=02d7ee1 \
			PYO3_PYTHON=${PYTHON_CMD}
CARGO_INSTALL_PATH=	influxdb3

USE_RC_SUBR=	influxdb3

USERS=		influxd
GROUPS=		influxd

SUB_LIST=	USERS=${USERS} \
		GROUPS=${GROUPS}

PLIST_FILES=	bin/influxdb3

do-test:
	${CARGO_CARGO_RUN} nextest run --workspace

.include <bsd.port.mk>
