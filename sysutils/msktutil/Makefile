PORTNAME=	msktutil
PORTVERSION=	1.2.1
PORTREVISION=	1
#DISTVERSIONPREFIX=	v
CATEGORIES=	sysutils

MAINTAINER=	zi@FreeBSD.org
COMMENT=	Utility to manage Active Directory interoperability
WWW=		https://github.com/msktutil/msktutil

LICENSE=	GPLv2
LICENSE_FILE=	${WRKSRC}/LICENSE

RUN_DEPENDS=	cyrus-sasl-gssapi>0:security/cyrus-sasl2-gssapi

USES=		autoreconf ldap gssapi ssl
USE_GITHUB=	yes
GNU_CONFIGURE=	yes
GNU_CONFIGURE_MANPREFIX=	${PREFIX}/share
CONFIGURE_ARGS+=	--with-sasldir=${LOCALBASE} \
			--with-ldapdir=${LOCALBASE} \
			--with-krb5="${GSSAPI_VENDOR}" \
			--with-krb5-config=${KRB5CONFIG} \
			${GSSAPI_CONFIGURE_ARGS}

PLIST_FILES=	sbin/msktutil share/man/man1/msktutil.1.gz

post-install:
	${STRIP_CMD} ${STAGEDIR}${PREFIX}/sbin/msktutil

.include <bsd.port.mk>
