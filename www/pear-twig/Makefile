PORTNAME=	twig
PORTVERSION=	1.29.0
PORTREVISION=	1
CATEGORIES=	www pear
MASTER_SITES=	http://pear.twig-project.org/get/
DISTNAME=	Twig-${PORTVERSION}

MAINTAINER=	sunpoet@FreeBSD.org
COMMENT=	Flexible, fast, and secure template engine for PHP
WWW=		https://twig.symfony.com

LICENSE=	BSD3CLAUSE
LICENSE_FILE=	${WRKSRC}/LICENSE

USES=		cpe pear php:cli
PEAR_CHANNEL=	twig
NO_ARCH=	yes
CPE_VENDOR=	symfony

USE_PHP=	ctype

.include <bsd.port.mk>
