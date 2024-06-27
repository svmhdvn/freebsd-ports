PORTNAME=	empt-jail-dns
DISTVERSION=	0.1.0
CATEGORIES=	empt
MASTER_SITES=
DISTFILES=

MAINTAINER=	me@svmhdvn.name
COMMENT=	EMPT DNS resolver jail
WWW=		https://empt.ca

LICENSE=	UNLICENSE

RUN_DEPENDS=	\
		dhcpcd:net/dhcpcd \
		htop:sysutils/htop \
		rsync:net/rsync \
		tmux:sysutils/tmux \
		tree:sysutils/tree \
		microcode:sysutils/cpu-microcode

PLIST_FILES=	etc/unbound/unbound.conf

NO_BUILD=	yes
NO_ARCH=	yes

do-extract:
	${CP} -R ${.CURDIR}/src/ ${WRKSRC}

do-install:
	(cd ${WRKSRC}/dhcpcd && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/dhcpcd)
	(cd ${WRKSRC}/tmux && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/tmux)

.include <bsd.port.mk>
