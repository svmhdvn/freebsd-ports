PORTNAME=	gsasl
PORTVERSION=	2.2.1
PORTREVISION=	1
CATEGORIES=	security
MASTER_SITES=	GNU
PKGNAMEPREFIX=	lib

MAINTAINER=	sunpoet@FreeBSD.org
COMMENT=	GNU SASL library
WWW=		https://www.gnu.org/software/gsasl/

LICENSE=	LGPL21

LIB_DEPENDS=	libgcrypt.so:security/libgcrypt \
		libgnutls.so:security/gnutls \
		libidn.so:dns/libidn \
		libntlm.so:security/libntlm

USES=		charsetfix libtool pathfix pkgconfig ssl

GNU_CONFIGURE=	yes
INSTALL_TARGET=	install-strip
USE_LDCONFIG=	yes

OPTIONS_DEFINE=	DOCS GSSAPI NLS
OPTIONS_DEFAULT=GSSAPI
OPTIONS_SUB=	yes

GSSAPI_USES=		gssapi
GSSAPI_CONFIGURE_ON=	--enable-gssapi --with-gssapi-impl=${GSSAPI_VENDOR} ${GSSAPI_CONFIGURE_ARGS}
GSSAPI_CONFIGURE_OFF=	--disable-gssapi

NLS_CONFIGURE_ENABLE=	nls
NLS_USES=		gettext

post-install:
	@${INSTALL_DATA} ${WRKSRC}/lib/gl/.libs/liblgl.a ${STAGEDIR}${PREFIX}/lib

post-install-DOCS-on:
	@${MKDIR} ${STAGEDIR}${DOCSDIR} ${STAGEDIR}${DOCSDIR}/reference
	${INSTALL_DATA} ${WRKSRC}/doc/reference/html/* ${STAGEDIR}${DOCSDIR}/reference

.include <bsd.port.mk>
