PORTNAME=	filemon
PORTVERSION=	0.0.1
PORTREVISION=	1
CATEGORIES=	sysutils
MASTER_SITES=	http://rodrigo.osorio.free.fr/freebsd/distfiles/

MAINTAINER=	rodrigo@FreeBSD.org
COMMENT=	Trivial tool to log child process file access using filemon ioctl

LICENSE=	BSD2CLAUSE

MANDIRS=	${PREFIX}/share/man/man1

PLIST_FILES=	bin/filemon \
		share/man/man1/filemon.1.gz

do-install:
	${INSTALL_PROGRAM} ${WRKSRC}/${PORTNAME} ${STAGEDIR}${PREFIX}/bin
	${INSTALL_MAN} ${WRKSRC}/${PORTNAME}.1  ${STAGEDIR}${PREFIX}/share/man/man1

.include <bsd.port.mk>
