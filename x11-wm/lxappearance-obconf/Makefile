PORTNAME=	lxappearance-obconf
PORTVERSION=	0.2.3
PORTREVISION=	8
CATEGORIES=	x11-wm
MASTER_SITES=	SF/lxde/LXAppearance%20Obconf/

MAINTAINER=	ports@FreeBSD.org
COMMENT=	LXAppearance ObConf plugin
WWW=		https://www.lxde.org/

LICENSE=	GPLv2
LICENSE_FILE=	${WRKSRC}/COPYING

BR_DEPENDS=	openbox:x11-wm/openbox \
		lxappearance:x11-themes/lxappearance
BUILD_DEPENDS=	${BR_DEPENDS}
LIB_DEPENDS=	libImlib2.so:graphics/imlib2 \
		libfontconfig.so:x11-fonts/fontconfig \
		libfreetype.so:print/freetype2
RUN_DEPENDS=	${BR_DEPENDS}

USES=	gettext-tools gmake gnome libtool pkgconfig tar:xz xorg
GNU_CONFIGURE=	yes
USE_GNOME=	glib20 gtk20 intltool intlhack atk cairo pango gdkpixbuf \
	librsvg2 libxml2
USE_XORG=	ice sm x11 xft
INSTALL_TARGET=	install-strip

CONFIGURE_ARGS+=	--disable-static

.include <bsd.port.mk>
