PORTNAME=	empt-jail-www
DISTVERSION=	0.1.0
CATEGORIES=	empt
MASTER_SITES=
DISTFILES=

MAINTAINER=	me@svmhdvn.name
COMMENT=	EMPT web server jail
WWW=		https://empt.ca

LICENSE=	UNLICENSE

RUN_DEPENDS=	nginx:www/nginx-lite

NO_BUILD=	yes
NO_ARCH=	yes

do-extract:
	${CP} -R ${.CURDIR}/src/ ${WRKSRC}

do-install:
	(cd ${WRKSRC}/unbound && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/unbound)

.include <bsd.port.mk>
