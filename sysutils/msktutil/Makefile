PORTNAME=	msktutil
PORTVERSION=	1.2.1
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

CONFIGURE_ARGS+=	--with-sasldir=${LOCALBASE} \
			--with-ldapdir=${LOCALBASE} \
			--with-krb5="${GSSAPI_PROVIDER}" \
			--with-krb5-config=${KRB5CONFIG}

PLIST_FILES=	man/man1/msktutil.1.gz sbin/msktutil

post-install:
	${STRIP_CMD} ${STAGEDIR}${PREFIX}/sbin/msktutil

.include <bsd.port.mk>
