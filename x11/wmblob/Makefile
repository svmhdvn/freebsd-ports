PORTNAME=	wmblob
PORTVERSION=	1.0.4
PORTREVISION=	3
CATEGORIES=	x11 windowmaker
MASTER_SITES=	https://BSDforge.com/projects/source/x11/wmblob/

MAINTAINER=	portmaster@bsdforge.com
COMMENT=	Shows moving blobs
WWW=		https://BSDforge.com/projects/x11/wmblob/

USES=		gnome pkgconfig tar:xz xorg
USE_XORG=	xpm
USE_GNOME=	gtk20
GNU_CONFIGURE=	yes

PLIST_FILES=	bin/wmblob share/man/man1/wmblob.1.gz

do-install:
	${INSTALL_PROGRAM} ${WRKSRC}/src/wmblob ${STAGEDIR}${PREFIX}/bin
	${INSTALL_MAN} ${WRKSRC}/doc/wmblob.1 ${STAGEDIR}${PREFIX}/share/man/man1

.include <bsd.port.mk>
