PORTNAME=	empt-host-irc
DISTVERSION=	0.1.0
CATEGORIES=	empt
MASTER_SITES=
DISTFILES=

MAINTAINER=	me@svmhdvn.name
COMMENT=	EMPT IRC host setup
WWW=		https://empt.ca

LICENSE=	UNLICENSE

#RUN_DEPENDS=	empt-base:empt/empt-base \
#		empt-host-kerberos:empt/empt-host-kerberos

NO_BUILD=	yes
NO_ARCH=	yes

PLIST_FILES=	etc/jail.conf.d/irc.jail.conf

do-extract:
	${CP} -R ${.CURDIR}/src/ ${WRKSRC}

do-install:
	(cd ${WRKSRC}/jail.conf.d && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/jail.conf.d)

.include <bsd.port.mk>
