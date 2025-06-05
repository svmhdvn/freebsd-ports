PORTNAME=	aoc-cli
DISTVERSION=	0.12.0
CATEGORIES=	devel

MAINTAINER=	gasol.wu@gmail.com
COMMENT=	Advent of Code command-line tool
WWW=		https://github.com/scarvalhojr/aoc-cli

LICENSE=	MIT
LICENSE_FILE=	${WRKSRC}/LICENSE

USES=		cargo ssl
USE_GITHUB=	yes
GH_ACCOUNT=	scarvalhojr

PORTDOCS=	README.md
PLIST_FILES=	bin/aoc

OPTIONS_DEFINE=	DOCS

post-install:
	@${MKDIR} ${STAGEDIR}${DOCSDIR}
	${INSTALL_DATA} ${WRKSRC}/README.md ${STAGEDIR}${DOCSDIR}

.include <bsd.port.mk>
