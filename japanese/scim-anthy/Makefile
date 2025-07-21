PORTNAME=	scim-anthy
PORTVERSION=	1.2.7
PORTREVISION=	8
CATEGORIES=	japanese
MASTER_SITES=	OSDN/scim-imengine

MAINTAINER=	ports@FreeBSD.org
COMMENT=	SCIM IMEngine module using Anthy
WWW=		https://sourceforge.jp/projects/scim-imengine/

LICENSE=	GPLv2+
LICENSE_FILE=	${WRKSRC}/COPYING

BR_DEPENDS=	scim:textproc/scim
BUILD_DEPENDS=	${BR_DEPENDS}
LIB_DEPENDS=	libanthy-unicode.so:japanese/anthy-unicode \
		libfontconfig.so:x11-fonts/fontconfig \
		libfreetype.so:print/freetype2
RUN_DEPENDS:=	${BR_DEPENDS} \
		kasumi:japanese/kasumi-unicode

USES=		gettext-runtime gmake gnome iconv libtool:keepla pkgconfig
USE_GNOME=	atk cairo gdkpixbuf glib20 gtk20 pango
GNU_CONFIGURE=	yes

CFLAGS+=	-I${LOCALBASE}/include/anthy-unicode-1.0

.include <bsd.port.mk>
