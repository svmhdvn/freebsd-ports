PORTNAME=	PHPTAL
PORTVERSION=	1.3.0
PORTREVISION=	1
CATEGORIES=	devel www pear
MASTER_SITES=	https://phptal.org/files/
EXTRACT_SUFX=	.tar.gz

MAINTAINER=	sunpoet@FreeBSD.org
COMMENT=	XML/XHTML template library for PHP
WWW=		https://phptal.org/

LICENSE=	LGPL21
LICENSE_FILE=	${WRKSRC}/COPYING

USES=		pear php
USE_PHP=	ctype

NO_ARCH=	yes

OPTIONS_DEFINE=	GETTEXT SIMPLEXML
GETTEXT_DESC=	Enable GetText support
SIMPLEXML_DESC=	Enable SimpleXML support

GETTEXT_USE=	PHP=gettext
SIMPLEXML_USE=	PHP=simplexml

.include <bsd.port.mk>
