PORTNAME=	phplot
PORTVERSION=	6.2.0
PORTREVISION=	3
CATEGORIES=	graphics www
MASTER_SITES=	SF \
		SF/${PORTNAME}/Manual/20130511:source2
DISTFILES=	${DISTNAME}${EXTRACT_SUFX} \
		${PORTNAME}docs-20130511.zip:source2

MAINTAINER=	ports@FreeBSD.org
COMMENT=	PHP class for creating scientific and business charts
WWW=		http://www.phplot.com/

LICENSE=	LGPL21
LICENSE_FILE=	${WRKSRC}/COPYING

LIB_DEPENDS=	libgd.so:graphics/gd

NO_ARCH=	yes
NO_BUILD=	yes
USES=		php zip

PHPLOT_DIR=	${STAGEDIR}${PREFIX}/include/php/phplot

PORTDOCS=	*

OPTIONS_DEFINE=		DOCS FONTS
OPTIONS_DEFAULT=	FONTS
FONTS_DESC=		install TrueType fonts
FONTS_LIB_DEPENDS=	libfreetype.so:print/freetype2

do-install:
	@${MKDIR} ${PHPLOT_DIR}
	${INSTALL_DATA} ${WRKSRC}/*.php ${PHPLOT_DIR}

do-install-DOCS-on:
	@${MKDIR} ${STAGEDIR}${DOCSDIR}
	(cd ${WRKDIR}/phplotdocs && ${COPYTREE_SHARE} . ${STAGEDIR}${DOCSDIR})

.include <bsd.port.mk>
