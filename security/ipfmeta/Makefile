PORTNAME=	ipfmeta
PORTVERSION=	1.3
PORTREVISION=	2
CATEGORIES=	security
MASTER_SITES=	http://cschubert.com/distfiles/ \
		LOCAL/cy

MAINTAINER=	cy@FreeBSD.org
COMMENT=	Use objects in IPfilter files

USES=		perl5 shebangfix

POD2MAN?=	pod2man

SHEBANG_FILES=	ipfmeta

do-build:
	@${POD2MAN} ${WRKSRC}/ipfmeta > ${WRKSRC}/${PORTNAME}.1

do-install:
	${INSTALL_MAN} ${WRKSRC}/${PORTNAME}.1 ${STAGEDIR}${PREFIX}/share/man/man1
	${INSTALL_SCRIPT} ${WRKSRC}/ipfmeta ${STAGEDIR}${PREFIX}/bin
	@${MKDIR} ${STAGEDIR}${DATADIR}
	${INSTALL_DATA} ${WRKSRC}/ipf.* ${STAGEDIR}${DATADIR}

.include <bsd.port.mk>
