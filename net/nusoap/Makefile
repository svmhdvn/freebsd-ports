PORTNAME=	nusoap
PORTVERSION=	0.9.5
PORTREVISION=	1
CATEGORIES=	net www
MASTER_SITES=	SF

MAINTAINER=	ports@FreeBSD.org
COMMENT=	SOAP Toolkit for PHP
WWW=		https://sourceforge.net/projects/nusoap/

LICENSE=	LGPL21+

USES=		cpe php zip
CPE_VENDOR=	${PORTNAME}_project
USE_PHP=	curl zlib xml
NO_BUILD=	yes
NO_ARCH=	yes
NO_WRKSUBDIR=	yes

PORTDATA=	*
PORTEXAMPLES=	*

OPTIONS_DEFINE=	EXAMPLES

do-install:
	@${MKDIR} ${STAGEDIR}${DATADIR}
	${CP} ${WRKSRC}/lib/* ${STAGEDIR}${DATADIR}

do-install-EXAMPLES-on:
	@${MKDIR} ${STAGEDIR}${EXAMPLESDIR}
	${CP} ${WRKSRC}/samples/* ${STAGEDIR}${EXAMPLESDIR}

.include <bsd.port.mk>
