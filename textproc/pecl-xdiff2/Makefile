PORTNAME=	xdiff
PORTVERSION=	2.1.1
PORTREVISION=	1
CATEGORIES=	textproc pear

MAINTAINER=	dbaio@FreeBSD.org
COMMENT=	PECL extension to create/apply binary and text patches
WWW=		https://pecl.php.net/package/xdiff

LICENSE=	PHP301
LICENSE_FILE=	${WRKSRC}/LICENSE

LIB_DEPENDS=	libxdiff.so:textproc/libxdiff

USES=		php:pecl
CONFLICTS=	pecl-xdiff-1*

LDFLAGS+=	-L${LOCALBASE}/lib

PORTSCOUT=	limit:^2.*

.include <bsd.port.mk>
