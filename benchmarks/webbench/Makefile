PORTNAME=	webbench
PORTVERSION=	1.5
PORTREVISION=	1
CATEGORIES=	benchmarks www
MASTER_SITES=	SUNSITE/apps/www/servers

MAINTAINER=	ports@FreeBSD.org
COMMENT=	Simple forking web benchmark
WWW=		http://home.tiscali.cz/~cz210552/webbench.html

LICENSE=	GPLv2

MAKE_ARGS=	CFLAGS="${CPPFLAGS} ${CFLAGS}"

PORTDOCS=	ChangeLog

PLIST_FILES=	bin/webbench \
		share/man/man1/webbench.1.gz

OPTIONS_DEFINE=	DOCS

do-install:
	${INSTALL_PROGRAM} ${WRKSRC}/webbench ${STAGEDIR}${PREFIX}/bin
	${INSTALL_MAN} ${WRKSRC}/webbench.1 ${STAGEDIR}${PREFIX}/share/man/man1

do-install-DOCS-on:
	@${MKDIR} ${STAGEDIR}${DOCSDIR}
	${INSTALL_DATA} ${WRKSRC}/ChangeLog ${STAGEDIR}${DOCSDIR}

.include <bsd.port.mk>
