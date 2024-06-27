PORTNAME=	empt-host-cifs
DISTVERSION=	0.1.0
CATEGORIES=	empt
MASTER_SITES=
DISTFILES=

MAINTAINER=	me@svmhdvn.name
COMMENT=	EMPT CIFS host setup
WWW=		https://empt.ca

LICENSE=	UNLICENSE

RUN_DEPENDS=	empt-host-kerberos>0:empt/empt-host-kerberos

NO_BUILD=	yes
NO_ARCH=	yes

PLIST_FILES=	etc/jail.conf.d/cifs.jail.conf

do-extract:
	${CP} -R ${.CURDIR}/src/ ${WRKSRC}

do-install:
	(cd ${WRKSRC}/jail.conf.d && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/jail.conf.d)

.include <bsd.port.mk>
