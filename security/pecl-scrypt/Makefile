PORTNAME=	scrypt
PORTVERSION=	2.0.1
PORTREVISION=	1
CATEGORIES=	security pear

MAINTAINER=	dbaio@FreeBSD.org
COMMENT=	PHP wrapper to Colin Percival's scrypt implementation
WWW=		https://pecl.php.net/package/scrypt

LICENSE=	BSD2CLAUSE
LICENSE_FILE=	${WRKSRC}/LICENSE

USES=		php:build,pecl

OPTIONS_DEFINE=	DOCS EXAMPLES

PORTDOCS=	README.md
PORTEXAMPLES=	scrypt.php

post-install-DOCS-on:
	@${MKDIR} ${STAGEDIR}${DOCSDIR}
	${INSTALL_DATA} ${PORTDOCS:S|^|${WRKSRC}/|} ${STAGEDIR}${DOCSDIR}

post-install-EXAMPLES-on:
	@${MKDIR} ${STAGEDIR}${EXAMPLESDIR}
	${INSTALL_DATA} ${PORTEXAMPLES:S|^|${WRKSRC}/|} ${STAGEDIR}${EXAMPLESDIR}

.include <bsd.port.mk>
