PORTNAME=	zmx
#DISTVERSIONPREFIX=	v
#DISTVERSION=	0.6.0
DISTVERSION=	g20260722
CATEGORIES=	sysutils

MAINTAINER=	siva@FreeBSD.org
COMMENT=	Session persistence for terminal processes
WWW=		https://zmx.sh

LICENSE=	MIT
LICENSE_FILE=	${WRKSRC}/LICENSE

USES=		zig:015

USE_GITHUB=	yes
GH_ACCOUNT=	neurosnap
GH_TAGNAME=	fa80e7abc1aab4d0fcc48f784a110f0d077fbcf4

WITHOUT_FBSD10_FIX=

do-build:
	false

#do-test:
#	zig build test

.include <bsd.port.mk>
