PORTNAME=	grap
PORTVERSION=	1.46
PORTREVISION=	1
CATEGORIES=	textproc graphics
MASTER_SITES=	http://www.lunabase.org/~faber/Vault/software/grap/

MAINTAINER=	faber@lunabase.org
COMMENT=	Implementation of Kernigan & Bentley's grap language
WWW=		https://www.lunabase.org/~faber/Vault/software/grap/

GNU_CONFIGURE=	yes
CONFIGURE_ARGS=--with-freebsd-ports

OPTIONS_DEFINE=	DOCS EXAMPLES

CONFLICTS_INSTALL=heirloom-doctools

PORTDOCS=	README CHANGES COPYRIGHT grap.man
PORTEXAMPLES=	*

do-install:
	${INSTALL_PROGRAM} ${WRKSRC}/${PORTNAME} ${STAGEDIR}${PREFIX}/bin
	${INSTALL_MAN} ${WRKSRC}/${PORTNAME}.doc \
		${STAGEDIR}${PREFIX}/share/man/man1/${PORTNAME}.1
	@${MKDIR} ${STAGEDIR}${DATADIR}
	${INSTALL_DATA} ${WRKSRC}/grap.defines ${WRKSRC}/grap.tex.defines \
		${STAGEDIR}${DATADIR}
	@${MKDIR} ${STAGEDIR}${DOCSDIR}
	(cd ${WRKSRC} && ${INSTALL_DATA} ${PORTDOCS} ${STAGEDIR}${DOCSDIR})
	@${MKDIR} ${STAGEDIR}${EXAMPLESDIR}
	(cd ${WRKSRC}/examples && ${COPYTREE_SHARE} . ${STAGEDIR}${EXAMPLESDIR})

.include <bsd.port.mk>
