PORTNAME=	luola
PORTVERSION=	1.3.2
PORTREVISION=	7
CATEGORIES=	games
MASTER_SITES=	https://mirror.amdmi3.ru/distfiles/${DIST_SUBDIR}/ # master site gone
DISTFILES=	${DISTNAME}${EXTRACT_SUFX} \
		stdlevels-6.0${EXTRACT_SUFX} \
		nostalgia-1.2${EXTRACT_SUFX}
DIST_SUBDIR=	luola

MAINTAINER=	amdmi3@FreeBSD.org
COMMENT=	2D multiplayer cave-flying game
WWW=		https://www.luolamies.org/software/luola/

LICENSE=	GPLv2+
LICENSE_FILE=	${WRKSRC}/COPYING

USES=		gmake sdl
GNU_CONFIGURE=	yes
USE_SDL=	sdl image ttf
LIBS+=		-lm

PLIST_FILES=	bin/${PORTNAME} \
		share/pixmaps/${PORTNAME}.png
PORTDOCS=	*
PORTDATA=	*

DESKTOP_ENTRIES="Luola" \
		"" \
		"luola" \
		"luola" \
		"Game;ArcadeGame;" \
		false

OPTIONS_DEFINE=	SDL_GFX SOUND DOCS
OPTIONS_DEFAULT=SDL_GFX SOUND

SDL_GFX_DESC=		Nicer graphics with SDL_gfx
SDL_GFX_USE=		SDL=gfx
SDL_GFX_CONFIGURE_ENABLE=sdl-gfx
SOUND_USE=		SDL=mixer
SOUND_CONFIGURE_ENABLE=	sound

post-patch:
	@${REINPLACE_CMD} -e '/LIBS=.*-lSDL_/ s|\(SDL_[a-z]*\)|\1 `sdl-config --libs`|' ${WRKSRC}/configure

post-install:
	${INSTALL_DATA} ${WRKDIR}/*.lev ${WRKDIR}/*.png ${STAGEDIR}${DATADIR}/levels/
	${INSTALL_DATA} ${WRKSRC}/${PORTNAME}.png ${STAGEDIR}${PREFIX}/share/pixmaps

post-install-DOCS-on:
	@${MKDIR} ${STAGEDIR}${DOCSDIR}
	${INSTALL_DATA} ${WRKSRC}/README ${WRKSRC}/FAQ ${STAGEDIR}${DOCSDIR}/

.include <bsd.port.mk>
