PORTNAME=	yubikey-personalization-gui
PORTVERSION=	3.1.25
DISTVERSIONPREFIX=	${PORTNAME}-
PORTREVISION=	5
CATEGORIES=	security

MAINTAINER=	romain@FreeBSD.org
COMMENT=	Graphical YubiKey personalization tool
WWW=		https://github.com/Yubico/yubikey-personalization-gui

LICENSE=	BSD2CLAUSE
LICENSE_FILE=	${WRKSRC}/COPYING

LIB_DEPENDS=	libykpers-1.so:security/ykpers \
		libyubikey.so:security/libyubikey

USES=		compiler:c++11-lang pkgconfig qmake qt:5
USE_GITHUB=	yes
USE_QT=		buildtools:build core gui testlib:build widgets

GH_ACCOUNT=	Yubico

PLIST_FILES=	bin/yubikey-personalization-gui \
		share/man/man1/yubikey-personalization-gui.1.gz \
		share/applications/yubikey-personalization-gui.desktop \
		share/pixmaps/yubikey-personalization-gui.png \
		share/pixmaps/yubikey-personalization-gui.xpm

do-install:
	${INSTALL_PROGRAM} ${WRKSRC}/build/release/${PORTNAME} \
		${STAGEDIR}${PREFIX}/bin
	${INSTALL_DATA} ${WRKSRC}/resources/lin/${PORTNAME}.desktop  \
		${STAGEDIR}${DESKTOPDIR}
	${INSTALL_MAN} ${WRKSRC}/resources/lin/${PORTNAME}.1 ${STAGEDIR}${PREFIX}/share/man/man1
	${INSTALL_DATA} ${WRKSRC}/resources/lin/${PORTNAME}.png ${STAGEDIR}${PREFIX}/share/pixmaps
	${INSTALL_DATA} ${WRKSRC}/resources/lin/${PORTNAME}.xpm ${STAGEDIR}${PREFIX}/share/pixmaps

.include <bsd.port.mk>
