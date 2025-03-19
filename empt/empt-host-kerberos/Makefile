PORTNAME=	empt-host-kerberos
DISTVERSION=	0.1.0
CATEGORIES=	empt
MASTER_SITES=
DISTFILES=

MAINTAINER=	me@svmhdvn.name
COMMENT=	EMPT krb5 host setup
WWW=		https://empt.ca

LICENSE=	UNLICENSE

RUN_DEPENDS=	empt-host-dns>0:empt/empt-host-dns

NO_BUILD=	yes
NO_ARCH=	yes

PLIST_FILES=	etc/empt.d/ipfw/02-kerberos.nat.conf \
		etc/jail.conf.d/kerberos.jail.conf

do-extract:
	${CP} -R ${.CURDIR}/src/ ${WRKSRC}

do-install:
	(cd ${WRKSRC}/empt.d && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/empt.d)
	(cd ${WRKSRC}/jail.conf.d && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/jail.conf.d)

.include <bsd.port.mk>
