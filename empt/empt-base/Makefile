PORTNAME=	empt-base
DISTVERSION=	0.1.0
CATEGORIES=	empt
MASTER_SITES=
DISTFILES=

MAINTAINER=	me@svmhdvn.name
COMMENT=	EMPT jailhost base configuration
WWW=		https://empt.ca

LICENSE=	UNLICENSE

RUN_DEPENDS=	dhcpcd:net/dhcpcd \
		htop:sysutils/htop \
		rsync:net/rsync \
		tmux:sysutils/tmux \
		tree:sysutils/tree \
		cpu-microcode>0:sysutils/cpu-microcode

NO_BUILD=	yes
NO_ARCH=	yes

do-extract:
	${CP} -R ${.CURDIR}/src/ ${WRKSRC}

do-install:
	(cd ${WRKSRC}/jailhost_etc && ${COPYTREE_SHARE} . ${STAGEDIR}/etc)
	(cd ${WRKSRC}/dhcpcd && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc)
	(cd ${WRKSRC}/cron.d && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/cron.d)
	(cd ${WRKSRC}/empt.d && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/empt.d)
	(cd ${WRKSRC}/tmux && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/tmux)

.include <bsd.port.mk>
