PORTNAME=	empt-jail-irc
DISTVERSION=	0.1.0
CATEGORIES=	empt
MASTER_SITES=
DISTFILES=

MAINTAINER=	me@svmhdvn.name
COMMENT=	EMPT IRC server jail
WWW=		https://empt.ca

LICENSE=	UNLICENSE

# TODO finish packaging gamja on FreeBSD after these issues are resolved:
# * https://github.com/parcel-bundler/parcel/issues/5812
# * https://github.com/parcel-bundler/parcel/issues/10000
#RUN_DEPENDS=	ngircd:irc/ngircd \
#		soju:irc/soju

NO_BUILD=	yes
NO_ARCH=	yes

PLIST_FILES=	etc/ngircd/ngircd.conf \
		www/soju/config

do-extract:
	${CP} -R ${.CURDIR}/src/ ${WRKSRC}

do-install:
	(cd ${WRKSRC}/ngircd && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/ngircd)
	(cd ${WRKSRC}/soju && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/www/soju)

.include <bsd.port.mk>
