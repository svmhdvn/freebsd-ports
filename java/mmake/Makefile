PORTNAME=	mmake
PORTVERSION=	2.3
PORTREVISION=	2
CATEGORIES=	java devel
MASTER_SITES=	http://www.tildeslash.com/mmake/dist/

MAINTAINER=	ports@FreeBSD.org
COMMENT=	Create a Makefile for Your Java files, ready to compile
WWW=		https://www.tildeslash.com/mmake/

BR_DEPENDS=	jikes:java/jikes
BUILD_DEPENDS=	${BR_DEPENDS}
RUN_DEPENDS=	${BR_DEPENDS}

USES=		perl5 gmake
GNU_CONFIGURE=	yes
GNU_CONFIGURE_MANPREFIX=${PREFIX}/share
NO_BUILD=	yes

PLIST_FILES=	bin/mmake share/man/man1/mmake.1.gz

post-patch:
	@${REINPLACE_CMD} -E 's,(BIN|MAN)DIR),DESTDIR)$$(&,' \
		${WRKSRC}/Makefile.in

.include <bsd.port.mk>
