PORTNAME=	libvanessa_socket
PORTVERSION=	0.0.12
PORTREVISION=	2
CATEGORIES=	devel
MASTER_SITES=	http://horms.net/projects/vanessa/download/vanessa_socket/${PORTVERSION}/
DISTNAME=	vanessa_socket-${PORTVERSION}

MAINTAINER=	thomas@bsdunix.ch
COMMENT=	Library that provides a simple layer for TCP/IP socket operations
WWW=		https://horms.net/projects/vanessa/

LIB_DEPENDS=	libvanessa_logger.so:devel/libvanessa_logger \
		libpopt.so:devel/popt

USES=		libtool pathfix tar:bzip2
USE_LDCONFIG=	yes
GNU_CONFIGURE=	yes
GNU_CONFIGURE_MANPREFIX=${PREFIX}/share

CPPFLAGS+=	-I${LOCALBASE}/include
LDFLAGS+=	-L${LOCALBASE}/lib

post-patch:
	${REINPLACE_CMD} -e '/^SUBDIRS/s|debian||' ${WRKSRC}/Makefile.in

.include <bsd.port.mk>
