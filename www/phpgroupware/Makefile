PORTNAME=	phpgroupware
PORTVERSION=	0.9.16.017
PORTREVISION=	1
CATEGORIES=	www
MASTER_SITES=	SF/phpgroupware/phpgroupware/${PORTVERSION}

MAINTAINER=	olgeni@FreeBSD.org
COMMENT=	Web based GroupWare system
WWW=		https://phpgroupware.org/

USES=		php:mod tar:bzip2

NO_ARCH=	yes
NO_BUILD=	yes

do-install:
		@${MKDIR} ${STAGEDIR}${PREFIX}/www/data-dist/phpgroupware
		cd ${WRKSRC} && ${COPYTREE_SHARE} \* ${STAGEDIR}${PREFIX}/www/data-dist/phpgroupware

.include <bsd.port.mk>
