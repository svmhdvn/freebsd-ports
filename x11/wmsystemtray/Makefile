PORTNAME=	wmsystemtray
PORTVERSION=	1.4
PORTREVISION=	1
CATEGORIES=	x11 windowmaker afterstep
MASTER_SITES=	SF/wmsystemtray/wmsystemtray

MAINTAINER=	iluxa@ex.ua
COMMENT=	System tray dockapp that uses freedesktop.org system tray protocol
WWW=		https://wmsystemtray.sourceforge.io

LICENSE=	GPLv2+
LICENSE_FILE=	${WRKSRC}/COPYING

USES=		pkgconfig xorg
USE_XORG=	ice sm x11 xext xfixes xmu xpm

GNU_CONFIGURE=	yes
GNU_CONFIGURE_MANPREFIX=${PREFIX}/share
PLIST_FILES=	bin/wmsystemtray share/man/man1/wmsystemtray.1.gz

.include <bsd.port.mk>
