PORTNAME=	xcape
DISTVERSIONPREFIX=	v
DISTVERSION=	1.2-9
PORTREVISION=	1
DISTVERSIONSUFFIX=	-g6ded5b4
CATEGORIES=	x11

MAINTAINER=	ports@FreeBSD.org
COMMENT=	Configure modifier keys to act as other keys when pressed on their own
WWW=		https://github.com/alols/xcape

LICENSE=	GPLv3
LICENSE_FILE=	${WRKSRC}/LICENSE

USE_GITHUB=	yes
GH_ACCOUNT=	alols

USES=		pkgconfig xorg
USE_XORG=	x11 xtst

MAKE_ARGS=	PREFIX=${PREFIX} MANDIR=/share/man/man1

PLIST_FILES=	bin/xcape share/man/man1/xcape.1.gz

post-install:
	@${STRIP_CMD} ${STAGEDIR}${PREFIX}/bin/xcape

.include <bsd.port.mk>
