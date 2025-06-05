# $FreeBSD$

PORTNAME=		gnome-internet-radio-locator
DISTVERSION=	3.9.0
CATEGORIES=		gnome

MAINTAINER=		mistresssilvara@hotmail.com
COMMENT=		Internet Radio Locator for GNOME 3

LICENSE=		GPLv3+
LICENSE_FILE=	${WRKSRC}/COPYING

BUILD_DEPENDS=	gtkdoc-mkhtml:textproc/gtk-doc
LIB_DEPENDS=	libchamplain-gtk-0.12.so:graphics/libchamplain \
				libclutter-gtk-1.0.so:graphics/clutter-gtk3 \
				libclutter-1.0.so:graphics/clutter \
				libfreetype.so:print/freetype2 \
				libfontconfig.so:x11-fonts/fontconfig \
				libcogl-path.so:graphics/cogl \
				libcogl-pango.so:graphics/cogl \
				libgeocode-glib.so:net/geocode-glib \
				libgeoclue-2.so:net/geoclue \
				libjson-glib-1.0.so:devel/json-glib

USES=			tar:bz2 meson gnome desktop-file-utils \
				gettext
USE_GNOME=		intltool gtk30 glib20 pango cairo libxml2
USE_GSTREAMER1+=	bad
USE_GITLAB=		yes
GL_SITE=		https://gitlab.gnome.org
GL_ACCOUNT=		GNOME
GL_COMMIT=		550d581315d463dfaa027020df4b55ff04987765

INSTALLS_ICONS=	yes

.include <bsd.port.mk>
