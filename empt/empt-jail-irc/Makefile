PORTNAME=	empt-jail-irc
DISTVERSION=	0.1.0
CATEGORIES=	empt
MASTER_SITES=
DISTFILES=

MAINTAINER=	me@svmhdvn.name
COMMENT=	EMPT IRC server jail
WWW=		https://empt.ca

LICENSE=	UNLICENSE

# TODO separately package gamja
RUN_DEPENDS=	ngircd:irc/ngircd \
		soju:irc/soju

NO_BUILD=	yes
NO_ARCH=	yes

do-extract:
	${CP} -R ${.CURDIR}/src/ ${WRKSRC}

do-install:
	(cd ${WRKSRC}/unbound && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/unbound)
	(cd ${WRKSRC}/gamja && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/www/gamja)

.include <bsd.port.mk>
