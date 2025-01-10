PORTNAME=	scim-anthy
PORTVERSION=	1.2.7
PORTREVISION=	7
CATEGORIES=	japanese
MASTER_SITES=	OSDN/scim-imengine

MAINTAINER=	ports@FreeBSD.org
COMMENT=	SCIM IMEngine module using Anthy
WWW=		https://sourceforge.jp/projects/scim-imengine/

LICENSE=	GPLv2+
LICENSE_FILE=	${WRKSRC}/COPYING

BUILD_DEPENDS=	${_BUILD_RUN_DEPENDS}
LIB_DEPENDS=	libanthy.so:japanese/anthy \
		libfontconfig.so:x11-fonts/fontconfig \
		libfreetype.so:print/freetype2
RUN_DEPENDS=	${_BUILD_RUN_DEPENDS} \
		kasumi:japanese/kasumi

USES=		gettext-runtime gmake gnome iconv libtool:keepla pkgconfig
USE_GNOME=	atk cairo gdkpixbuf glib20 gtk20 pango
GNU_CONFIGURE=	yes

_BUILD_RUN_DEPENDS=	scim:textproc/scim

.include <bsd.port.mk>
