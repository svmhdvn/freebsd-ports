PORTNAME=	empt-jail-base
DISTVERSION=	0.1.0
CATEGORIES=	empt
MASTER_SITES=
DISTFILES=

MAINTAINER=	me@svmhdvn.name
COMMENT=	EMPT common jail config
WWW=		https://empt.ca

LICENSE=	UNLICENSE

NO_BUILD=	yes
NO_ARCH=	yes

PLIST_FILES=	/etc/krb5.conf \
		/etc/resolv.conf

do-extract:
	${CP} -R ${.CURDIR}/src/ ${WRKSRC}

do-install:
	(cd ${WRKSRC}/etc && ${COPYTREE_SHARE} . ${STAGEDIR}/etc)

.include <bsd.port.mk>
