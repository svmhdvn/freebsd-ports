PORTNAME=	Services_Twitter
PORTVERSION=	0.7.0
PORTREVISION=	1
CATEGORIES=	net www pear

MAINTAINER=	sunpoet@FreeBSD.org
COMMENT=	PHP interface to Twitter's API
WWW=		https://pear.php.net/package/Services_Twitter

BUILD_DEPENDS=	${PEARDIR}/HTTP/Request2.php:www/pear-HTTP_Request2@${PHP_FLAVOR}
RUN_DEPENDS=	${PEARDIR}/HTTP/Request2.php:www/pear-HTTP_Request2@${PHP_FLAVOR}

USES=		cpe pear php
USE_PHP=	simplexml mbstring

CPE_VENDOR=	services_twitter_group

.include <bsd.port.mk>
