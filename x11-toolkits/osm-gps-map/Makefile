PORTNAME=	osm-gps-map
PORTVERSION=	1.1.0
PORTREVISION=	2
CATEGORIES=	x11-toolkits net
MASTER_SITES=	https://github.com/nzjrs/${PORTNAME}/releases/download/${PORTVERSION}/

MAINTAINER=	dumbbell@FreeBSD.org
COMMENT=	Gtk+ 3.0 mapping widget
WWW=		https://nzjrs.github.io/osm-gps-map/

LICENSE=	GPLv2

LIB_DEPENDS=	libsoup-2.4.so:devel/libsoup

USES=		gmake gnome libtool pkgconfig
USE_GNOME=	cairo gtk30 introspection:build
USE_LDCONFIG=	yes

GNU_CONFIGURE=	yes
MAKE_ARGS=	pkgconfigdir="${PREFIX}/libdata/pkgconfig"
INSTALL_TARGET=	install-strip

OPTIONS_DEFINE=	DOCS

.include <bsd.port.mk>
