PORTNAME=	waylock
DISTVERSION=	1.6.0
CATEGORIES=	x11 wayland
MASTER_SITES=	https://codeberg.org/ifreund/waylock/releases/download/v${DISTVERSION}/
DISTFILES=	${PORTNAME}-${DISTVERSIONFULL}${EXTRACT_SUFX}

PATCH_SITES=	https://codeberg.org/ifreund/waylock/commit/
PATCHFILES=	88673f084afae33b0dcc4d4d62b4bf9b2db6b6a9.patch:-p1

LICENSE=	ISCL
LICENSE_FILE=	${WRKSRC}/LICENSE

MAINTAINER=	siva@FreeBSD.org
COMMENT=	Small screenlocker for Wayland compositors
WWW=		https://codeberg.org/ifreund/waylock

BUILD_DEPENDS=	wayland-protocols>0:graphics/wayland-protocols
LIB_DEPENDS=	libwayland-client.so:graphics/wayland \
		libxkbcommon.so:x11/libxkbcommon
RUN_DEPENDS=	unix-selfauth-helper>0:security/unix-selfauth-helper

USES=		pkgconfig zig:016

PLIST_FILES=	bin/${PORTNAME} \
		etc/pam.d/${PORTNAME}

OPTIONS_DEFINE=		MANPAGES
OPTIONS_DEFAULT=	MANPAGES

MANPAGES_BUILD_DEPENDS=	scdoc:textproc/scdoc
MANPAGES_ZIG_BOOL=	man-pages
MANPAGES_PLIST_FILES=	share/man/man1/${PORTNAME}.1.gz

.include <bsd.port.mk>
