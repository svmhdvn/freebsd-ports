PORTNAME=	xf86-video-openchrome
PORTVERSION=	0.6.0
PORTREVISION=	7
CATEGORIES=	x11-drivers

MAINTAINER=	x11@FreeBSD.org
COMMENT=	X.Org openChrome display driver
WWW=		https://www.x.org/

LICENSE=	MIT
LICENSE_FILE=	${WRKSRC}/COPYING

LIB_DEPENDS=	libdrm.so:graphics/libdrm

USES=		gl xorg xorg-cat:driver
USE_GL=		gl

USE_XORG=	x11 xext xv

# Override pkg-config to prevent linking against libudev
CONFIGURE_ENV+=	LIBUDEV_LIBS="-L${LOCALBASE}"
MAKE_ARGS+=	drivermandir=${LOCALBASE}/share/man/man4

.include <bsd.port.options.mk>

# XvMC is only supported by this driver on x86
.if ${ARCH} == "i386" || ${ARCH} == "amd64"
USE_XORG+=	xvmc
PLIST_SUB+=	XVMC=""
.else
PLIST_SUB+=	XVMC="@comment "
.endif

.if ${OPSYS} == FreeBSD && ( ${OSVERSION} >= 1400079 || ( ${OSVERSION} >= 1302505 && ${OSVERSION} < 1400000 ))
CFLAGS+=	-Wno-error=int-conversion
.endif

.include <bsd.port.mk>
