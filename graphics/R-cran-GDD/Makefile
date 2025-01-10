PORTNAME=	GDD
DISTVERSION=	0.1-13.1
PORTREVISION=	16
CATEGORIES=	graphics
DISTNAME=	${PORTNAME}_${DISTVERSION}

MAINTAINER=	skreuzer@FreeBSD.org
COMMENT=	Graphics device for R for creating bitmap output
WWW=		http://www.rosuda.org/R/GDD/

LICENSE=	GPLv2

BUILD_DEPENDS=	${_BUILD_RUN_DEPENDS}
RUN_DEPENDS=	${_BUILD_RUN_DEPENDS}

WRKSRC=		${WRKDIR}/${PORTNAME}

USES=		cran:auto-plist,compiles

_BUILD_RUN_DEPENDS=	libgd>=2.0.35_8,1:graphics/gd

.include <bsd.port.mk>
