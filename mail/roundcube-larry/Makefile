PORTNAME=	larry
DISTVERSION=	1.6.1
PORTREVISION=	1
CATEGORIES?=	mail www
PKGNAMEPREFIX=	roundcube-
PKGNAMESUFFIX=	${PHP_PKGNAMESUFFIX}

MAINTAINER=	brnrd@FreeBSD.org
COMMENT=	Larry skin/theme for Rouncube webmail
WWW=		https://github.com/roundcube/larry/

LICENSE=	GPLv3+

USES=		cpe php:flavors

RUN_DEPENDS=	roundcube${PHP_PKGNAMESUFFIX}>=1.6.0:mail/roundcube@${PHP_FLAVOR}
NO_ARCH=	yes
NO_BUILD=	yes

CPE_PRODUCT=	webmail
CPE_VENDOR=	roundcube

WWWDIR=		${PREFIX}/www/${PKGNAMEPREFIX:S/-//}/skins/${PORTNAME}

USE_GITHUB=	yes
GH_ACCOUNT=	${PKGNAMEPREFIX:S/-//}

do-install:
	@${MKDIR} ${STAGEDIR}${WWWDIR}
	@(cd ${WRKSRC} && ${COPYTREE_SHARE} . ${STAGEDIR}${WWWDIR})
	@(cd ${WRKSRC}; ${FIND} . -not -type d) | ${SORT} | \
		${SED} -e 's,^\.,${WWWDIR_REL},' >> ${TMPPLIST}

.include <bsd.port.mk>
