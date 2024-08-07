PORTNAME=	serf
PORTVERSION=	1.3.10
PORTREVISION=	1
CATEGORIES=	www
MASTER_SITES=	APACHE/serf

MAINTAINER=	michaelo@apache.org
COMMENT=	Serf HTTP client library
WWW=		https://serf.apache.org/

LICENSE=	APACHE20
LICENSE_FILE=	${WRKSRC}/LICENSE

LIB_DEPENDS+=	libapr-1.so:devel/apr1

USES=		scons ssl tar:bzip2 cpe
CPE_VENDOR=	serf_project
USE_LDCONFIG=	yes

INSTALL_TARGET=	install --install-sandbox=${STAGEDIR}
TEST_TARGET=	check  # some tests fail

OPTIONS_DEFINE=		DOCS GSSAPI

GSSAPI_DESC=		GSSAPI support
GSSAPI_USES=		gssapi

SCONS_ARGS=	APR=${LOCALBASE}/bin/apr-1-config
SCONS_ARGS+=	APU=${LOCALBASE}/bin/apu-1-config
SCONS_ARGS+=	OPENSSL=${OPENSSLBASE}
SCONS_ARGS+=	PREFIX=${PREFIX}
SCONS_ARGS+=	CC=${CC}
SCONS_ARGS+=	CFLAGS="${CFLAGS}"

.include <bsd.port.options.mk>

.if ${PORT_OPTIONS:MGSSAPI}
SCONS_ARGS+=	GSSAPI="${KRB5CONFIG}"
.endif

post-patch:
	@${REINPLACE_CMD} -E \
		-e '/^Requires.private/s/(libssl|libcrypto)//g' \
		-e '/^Libs.private/s|$$| -L${OPENSSLLIB} -lssl -lcrypto|' \
		${WRKSRC}/build/serf.pc.in

post-install-DOCS-on:
	@${MKDIR} ${STAGEDIR}${DOCSDIR}
	${INSTALL_DATA} ${WRKSRC}/design-guide.txt ${STAGEDIR}${DOCSDIR}
	${STRIP_CMD} ${STAGEDIR}${PREFIX}/lib/libserf-1.so

.include <bsd.port.pre.mk>

MAKE_ARGS=	${SCONS_ARGS}

.include <bsd.port.post.mk>
