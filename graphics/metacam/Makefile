PORTNAME=	metacam
DISTVERSION=	1.2
PORTREVISION=	1
CATEGORIES=	graphics
MASTER_SITES=	LOCAL/ehaupt

MAINTAINER=	ehaupt@FreeBSD.org
COMMENT=	Digital camera EXIF meta-information reader
WWW=		http://www.cheeseplant.org/~daniel/pages/metacam.html

LICENSE=	GPLv2
LICENSE_FILE=	${WRKSRC}/LICENSE.TXT

USES=		gmake

ALL_TARGET=	${PORTNAME}

CFLAGS+=	-I${LOCALBASE}/include
CXXFLAGS+=	-I${LOCALBASE}/include

PLIST_FILES=	bin/metacam \
		share/man/man1/metacam.1.gz
PORTDOCS=	README.canon README.casio

OPTIONS_DEFINE=	DOCS

do-install:
	${INSTALL_PROGRAM} ${WRKSRC}/${PORTNAME} ${STAGEDIR}${PREFIX}/bin
	${INSTALL_MAN} ${FILESDIR}/${PORTNAME}.1 \
		${STAGEDIR}${PREFIX}/share/man/man1
	@${MKDIR} ${STAGEDIR}${DOCSDIR}
.for f in ${PORTDOCS}
	${INSTALL_DATA} ${WRKSRC}/${f} ${STAGEDIR}${DOCSDIR}
.endfor

.include <bsd.port.mk>
