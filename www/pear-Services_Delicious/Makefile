PORTNAME=	Services_Delicious
PORTVERSION=	0.6.0
PORTREVISION=	1
CATEGORIES=	www pear

MAINTAINER=	sunpoet@FreeBSD.org
COMMENT=	PEAR Client for the del.icio.us web service
WWW=		https://pear.php.net/package/Services_Delicious

BUILD_DEPENDS=	${PEARDIR}/XML/Serializer.php:devel/pear-XML_Serializer@${PHP_FLAVOR} \
		${PEARDIR}/HTTP/Request.php:www/pear-HTTP_Request@${PHP_FLAVOR}
RUN_DEPENDS=	${PEARDIR}/XML/Serializer.php:devel/pear-XML_Serializer@${PHP_FLAVOR} \
		${PEARDIR}/HTTP/Request.php:www/pear-HTTP_Request@${PHP_FLAVOR}

USES=		dos2unix pear php

.include <bsd.port.mk>
