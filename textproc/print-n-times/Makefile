PORTNAME=	print-n-times
PORTVERSION=	1.0
PORTREVISION=	1
CATEGORIES=	textproc
MASTER_SITES=	http://aaronland.info/xsl/string/print-n-times/

MAINTAINER=	ports@FreeBSD.org
COMMENT=	Print a string (n) times
WWW=		https://aaronland.info/xsl/string/print-n-times

DEPRECATED=	Obsolete and unmaintained in tree for years
EXPIRATION_DATE=2025-04-30

NO_BUILD=	yes

do-install:
	${MKDIR} ${STAGEDIR}${PREFIX}/share/xsl/string
	${INSTALL_DATA} ${WRKSRC}/*.xsl ${STAGEDIR}${PREFIX}/share/xsl/string

.include <bsd.port.mk>
