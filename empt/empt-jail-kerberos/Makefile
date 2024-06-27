PORTNAME=	empt-jail-kerberos
DISTVERSION=	0.1.0
CATEGORIES=	empt
MASTER_SITES=
DISTFILES=

MAINTAINER=	me@svmhdvn.name
COMMENT=	EMPT DNS kerberos jail
WWW=		https://empt.ca

LICENSE=	UNLICENSE

# TODO switch to MIT krb5
#RUN_DEPENDS=	krb5:security/krb5

NO_BUILD=	yes
NO_ARCH=	yes

do-extract:
	${CP} -R ${.CURDIR}/src/ ${WRKSRC}

do-install:
	(cd ${WRKSRC}/unbound && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/unbound)

.include <bsd.port.mk>
