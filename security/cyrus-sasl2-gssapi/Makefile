PKGNAMESUFFIX=	-gssapi

COMMENT=	SASL GSSAPI authentication plugin
WWW=		https://www.cyrusimap.org/sasl/

OPTIONS_DEFINE=			GSSAPI
OPTIONS_DEFAULT=		GSSAPI
GSSAPI_USES=			gssapi:flags
GSSAPI_CONFIGURE_ON=		--enable-gssapi="${GSSAPIBASEDIR}" --with-gss_impl="${GSSAPI_PROVIDER}" ${GSSAPI_CONFIGURE_ARGS}
GSSAPI_CONFIGURE_OFF=		--disable-gssapi
GSSAPI_PLIST_FILES=		${LIBGS2_PLIST_FILES}

LIBGS2_PLIST_FILES=		lib/sasl2/libgs2.a \
				lib/sasl2/libgs2.so \
				lib/sasl2/libgs2.so.3 \
				lib/sasl2/libgs2.so.3.0.0

CYRUS_BUILD_TARGET=		gssapiv2

.include "${.CURDIR}/../../security/cyrus-sasl2/Makefile.common"
