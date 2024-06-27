PORTNAME=	empt-jail-cifs
DISTVERSION=	0.1.0
CATEGORIES=	empt
MASTER_SITES=
DISTFILES=

MAINTAINER=	me@svmhdvn.name
COMMENT=	EMPT samba CIFS jail
WWW=		https://empt.ca

LICENSE=	UNLICENSE

RUN_DEPENDS=	samba:net/samba419

#PLIST_FILES=	etc/unbound/unbound.conf

NO_BUILD=	yes
NO_ARCH=	yes

do-extract:
	${CP} -R ${.CURDIR}/src/ ${WRKSRC}

do-install:
	(cd ${WRKSRC}/etc && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc)

.include <bsd.port.mk>
