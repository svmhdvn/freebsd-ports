PORTNAME=	empt-host-mail
DISTVERSION=	0.1.0
CATEGORIES=	empt
MASTER_SITES=
DISTFILES=

MAINTAINER=	me@svmhdvn.name
COMMENT=	EMPT mail host setup
WWW=		https://empt.ca

RUN_DEPENDS=	empt-acme>0:empt/empt-acme \
		empt-host-kerberos>0:empt/empt-host-kerberos

LICENSE=	UNLICENSE

NO_BUILD=	yes
NO_ARCH=	yes

PLIST_FILES=	etc/empt.d/ipfw/03-mail.nat.conf \
		etc/jail.conf.d/mail.jail.conf \
		etc/periodic/minutely/001.empt-mlmmj-maintd

do-extract:
	${CP} -R ${.CURDIR}/src/ ${WRKSRC}

do-install:
	(cd ${WRKSRC}/empt.d && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/empt.d)
	(cd ${WRKSRC}/jail.conf.d && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/jail.conf.d)
	(cd ${WRKSRC}/periodic && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/periodic)

.include <bsd.port.mk>
