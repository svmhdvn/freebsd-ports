PORTNAME=	empt-jail-cifs
DISTVERSION=	0.1.0
CATEGORIES=	empt
MASTER_SITES=
DISTFILES=

MAINTAINER=	me@svmhdvn.name
COMMENT=	EMPT samba CIFS jail
WWW=		https://empt.ca

LICENSE=	UNLICENSE

RUN_DEPENDS=	samba419>0:net/samba419

NO_BUILD=	yes
NO_ARCH=	yes

PLIST_FILES=	etc/smb4.conf

do-extract:
	${CP} -R ${.CURDIR}/src/ ${WRKSRC}

do-install:
	(cd ${WRKSRC}/etc && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc)

.include <bsd.port.mk>
