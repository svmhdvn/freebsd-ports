PORTNAME=	imerge
PORTVERSION=	0.2.4
PORTREVISION=	1
CATEGORIES=	misc
MASTER_SITES=	ftp://ftp.iDaemons.org/pub/distfiles/ \
		LOCAL/knu

MAINTAINER=	ports@FreeBSD.org
COMMENT=	Tool to help merge one file to another interactively
WWW=		https://github.com/knu/imerge

USES=		tar:bzip2 uidfix

MAKE_ARGS=	PREFIX="${PREFIX}" MANPREFIX="${PREFIX}/share"
MAKEFILE=	BSDmakefile

PLIST_FILES=	bin/imerge \
		share/man/man1/imerge.1.gz

.include <bsd.port.mk>
