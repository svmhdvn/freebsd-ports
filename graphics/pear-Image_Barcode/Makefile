PORTNAME=	Image_Barcode
PORTVERSION=	1.1.3
PORTREVISION=	1
CATEGORIES=	graphics www pear

MAINTAINER=	sunpoet@FreeBSD.org
COMMENT=	PEAR class for barcode generation
WWW=		https://pear.php.net/package/Image_Barcode

USE_PHP=	gd
USES=		pear php

OPTIONS_DEFINE=		PEAR_PHP_COMPAT
PEAR_PHP_COMPAT_DESC=	PEAR::PHP_Compat support

PEAR_PHP_COMPAT_RUN_DEPENDS=	${PEARDIR}/PHP/Compat.php:devel/pear-PHP_Compat@${PHP_FLAVOR}

.include <bsd.port.mk>
