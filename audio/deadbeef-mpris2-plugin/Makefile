PORTNAME=	deadbeef-mpris2-plugin
PORTVERSION=	1.12
DISTVERSIONPREFIX=	v
PORTREVISION=	1
CATEGORIES=	audio

MAINTAINER=	danfe@FreeBSD.org
COMMENT=	MPRIS protocol version 2 plugin for DeaDBeeF music player
WWW=		https://github.com/Serranya/deadbeef-mpris2-plugin

LICENSE=	GPLv3

BUILD_DEPENDS=	${_BUILD_RUN_DEPENDS}
RUN_DEPENDS=	${_BUILD_RUN_DEPENDS}

USE_GITHUB=	yes
GH_ACCOUNT=	Serranya

USES=		autoreconf gnome libtool pkgconfig
GNU_CONFIGURE=	yes
USE_GNOME=	glib20

MAKE_JOBS_UNSAFE=	yes

PLIST_FILES=	lib/deadbeef/mpris.so

_BUILD_RUN_DEPENDS=	${LOCALBASE}/include/deadbeef/deadbeef.h:audio/deadbeef

.include <bsd.port.mk>
