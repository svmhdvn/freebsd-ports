PORTNAME=	gliv
PORTVERSION=	1.9.7
PORTREVISION=	9
CATEGORIES=	graphics
MASTER_SITES=	http://guichaz.free.fr/gliv/files/

MAINTAINER=	ports@FreeBSD.org
COMMENT=	Image viewer that uses Gdk-Pixbuf and OpenGL
WWW=		http://guichaz.free.fr/gliv/

LICENSE=	GPLv2+
LICENSE_FILE=	${WRKSRC}/COPYING

LIB_DEPENDS=	libgtkglext-x11-1.0.so:x11-toolkits/gtkglext \
		libSM.so:x11/libSM

USES=		compiler:c11 desktop-file-utils gettext gl gmake gnome \
		localbase:ldflags pathfix pkgconfig tar:bzip2 xorg
USE_GNOME=	gnomeprefix gtk20
USE_GL=		gl glu
USE_XORG=	sm
GNU_CONFIGURE=	yes
GNU_CONFIGURE_MANPREFIX=${PREFIX}/share
MAKE_ARGS=	ACLOCAL="${TRUE}" AUTOCONF="${TRUE}" AUTOMAKE="${TRUE}" \
		AUTOHEADER="${TRUE}"

post-install:
	${INSTALL_DATA} ${WRKSRC}/gliv.desktop \
		${STAGEDIR}${PREFIX}/share/applications
	${INSTALL_DATA} ${WRKSRC}/gliv.png \
		${STAGEDIR}${PREFIX}/share/pixmaps

.include <bsd.port.mk>
