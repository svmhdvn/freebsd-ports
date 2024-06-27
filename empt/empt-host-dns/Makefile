PORTNAME=	empt-host-dns
DISTVERSION=	0.1.0
CATEGORIES=	empt
MASTER_SITES=
DISTFILES=

MAINTAINER=	me@svmhdvn.name
COMMENT=	EMPT DNS host config
WWW=		https://empt.ca

RUN_DEPENDS=	empt-base>0:empt/empt-base

LICENSE=	UNLICENSE

NO_BUILD=	yes
NO_ARCH=	yes

PLIST_FILES=	etc/jail.conf.d/dns.jail.conf

do-extract:
	${CP} -R ${.CURDIR}/src/ ${WRKSRC}

do-install:
	(cd ${WRKSRC}/jail.conf.d && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/jail.conf.d)

.include <bsd.port.mk>
