PORTNAME=	ljclive
PORTVERSION=	0.4.10
PORTREVISION=	3
CATEGORIES=	deskutils
MASTER_SITES=	SF/${PORTNAME}/${PORTNAME}/${DISTNAME}
DISTNAME=	clive-${PORTVERSION}

MAINTAINER=	ports@FreeBSD.org
COMMENT=	Command line client for posting LiveJournal entries
WWW=		https://sourceforge.net/projects/ljclive/

USES=		iconv
GNU_CONFIGURE=	yes
GNU_CONFIGURE_MANPREFIX=${PREFIX}/share
CONFIGURE_ARGS=	ac_cv_search_iconv=${ICONV_LIB}
CPPFLAGS+=	-I${LOCALBASE}/include
LIBS+=		-L${LOCALBASE}/lib

CONFLICTS=	clive

.include <bsd.port.mk>
