PORTNAME=	elfkickers
PORTVERSION=	3.2
PORTREVISION=	2
CATEGORIES=	devel education sysutils
MASTER_SITES=	http://www.muppetlabs.com/~breadbox/pub/software/
DISTNAME=	ELFkickers-${PORTVERSION}

MAINTAINER=	sbz@FreeBSD.org
COMMENT=	Collection of programs to manipulate ELF files
WWW=		https://www.muppetlabs.com/~breadbox/software/elfkickers.html

LICENSE=	GPLv2
LICENSE_FILE=	${WRKSRC}/COPYING

USES=		gmake

ELFBINS=	ebfc elfls elftoc infect objres rebind sstrip
PORTDOCS=	COPYING Changelog README

OPTIONS_DEFINE=	DOCS

do-install:
.for f in ${ELFBINS}
	${INSTALL_SCRIPT} ${WRKSRC}/${f}/${f} ${STAGEDIR}${PREFIX}/bin
	${INSTALL_MAN} ${WRKSRC}/${f}/${f:S,$,.1,} ${STAGEDIR}${PREFIX}/share/man/man1
.endfor

post-install:
.for f in ${ELFBINS}
	@${STRIP_CMD} ${STAGEDIR}${PREFIX}/bin/${f}
.endfor

post-install-DOCS-on:
	@${MKDIR} ${STAGEDIR}${DOCSDIR}
	${INSTALL_DATA} ${PORTDOCS:S,^,${WRKSRC}/,} ${STAGEDIR}${DOCSDIR}

.include <bsd.port.mk>
