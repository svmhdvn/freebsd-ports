PORTNAME=	liborigin
PORTVERSION=	3.0.3
PORTEPOCH=	1
CATEGORIES=	math
MASTER_SITES=	SF/${PORTNAME}/${PORTNAME}/3.0

MAINTAINER=	makc@FreeBSD.org
COMMENT=	Library and utility for reading OriginLab project files
WWW=		https://sourceforge.net/projects/liborigin/

LICENSE=	GPLv2+
LICENSE_FILE=	${WRKSRC}/COPYING # GPLv3

USES=		compiler:c++11-lang cmake pathfix

CMAKE_OFF=	BUILD_STATIC_LIBS
USE_LDCONFIG=	yes
PORTDOCS=	*
PLIST_SUB=	SHLIB_VER=${PORTVERSION}

OPTIONS_DEFINE=	DOXYGEN DOCS

DOXYGEN_IMPLIES=	DOCS
DOXYGEN_BUILD_DEPENDS=	doxygen:devel/doxygen
DOXYGEN_CMAKE_OFF=	-DCMAKE_DISABLE_FIND_PACKAGE_Doxygen=ON

.include <bsd.port.mk>
