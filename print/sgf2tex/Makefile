PORTNAME=	sgf2tex
PORTVERSION=	3.3
PORTREVISION=	7
CATEGORIES=	print
MASTER_SITES=	http://sporadic.stanford.edu/bump/

MAINTAINER=	spcoltri@omcl.org
COMMENT=	Convert a Go game record in SGF format into TeX and provide fonts to make a dvi
WWW=		http://match.stanford.edu/~bump/sgf2tex.html

USES=		shebangfix tex
SHEBANG_FILES=	sgf2tex
USE_TEX=	tex
PLIST_SUB=	MKTEXLSR=${MKTEXLSR}
MAKE_ENV=	TEX_BIN=${TEX_BIN}

TEX_BIN=	${LOCALBASE}/bin/etex
MKTEXLSR=	${LOCALBASE}/bin/mktexlsr

post-install:
	@${STRIP_CMD} ${STAGEDIR}${PREFIX}/bin/sgfsplit

.include <bsd.port.mk>
