PORTNAME=	empt-acme
DISTVERSION=	0.1.0
CATEGORIES=	empt
MASTER_SITES=
DISTFILES=

MAINTAINER=	me@svmhdvn.name
COMMENT=	EMPT ACME TLS cert renewal
WWW=		https://empt.ca

LICENSE=	UNLICENSE

RUN_DEPENDS=	acme.sh:security/acme.sh

NO_BUILD=	yes
NO_ARCH=	yes

PLIST_FILES=	etc/periodic/daily/004.empt-acme-renew

do-extract:
	${CP} -R ${.CURDIR}/src/ ${WRKSRC}

do-install:
	(cd ${WRKSRC}/periodic && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/periodic)

.include <bsd.port.mk>
