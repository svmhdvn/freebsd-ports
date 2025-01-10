PORTNAME=	scim-canna
PORTVERSION=	1.0.0
PORTREVISION=	15
CATEGORIES=	japanese
MASTER_SITES=	OSDN/scim-imengine

MAINTAINER=	ports@FreeBSD.org
COMMENT=	SCIM IMEngine module using Canna
WWW=		https://sourceforge.jp/projects/scim-imengine/

BR_DEPENDS=	scim:textproc/scim
LIB_DEPENDS=	libcanna.so:japanese/canna-lib
BUILD_DEPENDS=	${BR_DEPENDS}
RUN_DEPENDS=	${BR_DEPENDS}

USES=		gmake iconv libtool:keepla pkgconfig
GNU_CONFIGURE=	yes

CPPFLAGS+=	-I${LOCALBASE}/include -D__STDC_ISO_10646__
LDFLAGS+=	-L${LOCALBASE}/lib

.include <bsd.port.mk>
