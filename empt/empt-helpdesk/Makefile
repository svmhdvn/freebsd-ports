PORTNAME=	empt-helpdesk
DISTVERSION=	0.1.0
CATEGORIES=	empt
MASTER_SITES=
DISTFILES=

MAINTAINER=	me@svmhdvn.name
COMMENT=	EMPT helpdesk
WWW=		https://empt.ca

LICENSE=	UNLICENSE

RUN_DEPENDS=	fdm:mail/fdm
TEST_DEPENDS=	shellcheck:devel/hs-ShellCheck

NO_BUILD=	yes
NO_ARCH=	yes
TEST_TARGET=	do-test

do-extract:
	${CP} -R ${.CURDIR}/src/ ${WRKSRC}

do-install:
	(cd ${WRKSRC}/etc && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc)
	(cd ${WRKSRC}/libexec && ${COPYTREE_BIN} . ${STAGEDIR}${PREFIX}/libexec/empt)
	(cd ${WRKSRC}/periodic && ${COPYTREE_BIN} . ${STAGEDIR}${PREFIX}/etc/periodic)

do-test:
	${GREP} -Rl '^#!/bin/sh' ${WRKSRC} | xargs shellcheck -o all

.include <bsd.port.mk>
