PORTNAME=	PHP_Beautifier
PORTVERSION=	0.1.15
PORTREVISION=	2
CATEGORIES=	devel www pear

MAINTAINER=	sunpoet@FreeBSD.org
COMMENT=	PEAR beautifier for PHP
WWW=		https://pear.php.net/package/PHP_Beautifier

BUILD_DEPENDS=	${PEARDIR}/Log.php:sysutils/pear-Log@${PHP_FLAVOR}
RUN_DEPENDS=	${PEARDIR}/Log.php:sysutils/pear-Log@${PHP_FLAVOR}

USES=		pear php
USE_PHP=	tokenizer bz2

.include <bsd.port.mk>
