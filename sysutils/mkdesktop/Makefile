PORTNAME=	mkdesktop
PORTVERSION=	5.0
PORTREVISION=	1
CATEGORIES=	sysutils

MAINTAINER=	bourne.identity@hotmail.com
COMMENT=	Set up any desktop under FreeBSD with ease
WWW=		https://github.com/bourne-again/mkdesktop

LICENSE=	BSD3CLAUSE
LICENSE_FILE=	${WRKSRC}/LICENSE

USE_GITHUB=	yes
GH_ACCOUNT=	bourne-again

NO_ARCH=	yes
NO_BUILD=	yes

PLIST_FILES=	bin/${PORTNAME} \
		share/man/man1/${PORTNAME}.1.gz

do-install:
	${INSTALL_SCRIPT} ${WRKSRC}/${PORTNAME} ${STAGEDIR}${PREFIX}/bin/
	${INSTALL_MAN} ${WRKSRC}/${PORTNAME}.1 ${STAGEDIR}${PREFIX}/share/man/man1

.include <bsd.port.mk>
