PORTNAME=	brotli
DISTVERSION=	0.13.1
PORTREVISION=	1
CATEGORIES=	archivers
PKGNAMEPREFIX=	${PHP_PKGNAMEPREFIX}

MAINTAINER=	daniel@shafer.cc
COMMENT=	Brotli extension for PHP
WWW=		https://github.com/kjdev/php-ext-brotli

LICENSE=	MIT

BUILD_DEPENDS=	re2c>0:devel/re2c
LIB_DEPENDS=	libbrotlienc.so:archivers/brotli

USES=		dos2unix libtool php:ext pkgconfig

USE_GITHUB=	yes
GH_ACCOUNT=	kjdev
GH_PROJECT=	php-ext-brotli

USE_LDCONFIG=	yes

GNU_CONFIGURE=	yes
CONFIGURE_ARGS=	--with-libbrotli

PHP_MODNAME=	brotli

.include <bsd.port.mk>
