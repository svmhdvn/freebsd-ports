PORTNAME=	BasiliskII-macemu
PORTVERSION=	20241107
CATEGORIES=	emulators
MASTER_SITES=	https://mirrors.nycbug.org/pub/distfiles/

MAINTAINER=	nonesuch@longcount.org
COMMENT=	Portable, Open Source 68k Mac emulator
WWW=		https://github.com/emaculation/macemu

LICENSE=	GPLv2
LICENSE_FILE=	${WRKDIR}/macemu/BasiliskII/COPYING

USES=			compiler:c++17-lang autoreconf pkgconfig gmake sdl tar:xz gettext-runtime gnome
USE_GNOME=		gtk30 pango cairo gdkpixbuf2 glib20
AUTORECONF_ARGS=	-I ${LOCALBASE}/share/aclocal -I ./m4
GNU_CONFIGURE=		yes
WRKSRC=			${WRKDIR}/macemu/BasiliskII/src/Unix
USE_SDL=		sdl2

CONFIGURE_ARGS=		--disable-jit-compiler --disable-nls --disable-esd
#CONFIGURE_ENV=	CPPFLAGS+="-I${LOCALBASE}/include ${PTHREAD_CFLAGS}" \
#		LDFLAGS+="-L${LOCALBASE}/lib ${PTHREAD_LIBS}"

.include <bsd.port.mk>
