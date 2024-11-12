PORTNAME=	gamja
DISTVERSION=	g20241110
CATEGORIES=	irc

_COMMIT=	ad165389f05fa1fd5b5eacce9bd6318f28e396fb
MASTER_SITES=	https://codeberg.org/emersion/${PORTNAME}/archive/${_COMMIT}.tar.gz?dummy=/ \
		LOCAL/svmhdvn/gamja:npmcache
DISTNAME=	${PORTNAME}-${_COMMIT}
DISTFILES=	${DISTNAME}.tar.gz \
		${PORTNAME}-npm-cache-${DISTVERSION}${EXTRACT_SUFX}:npmcache

MAINTAINER=	me@svmhdvn.name
COMMENT=	A simple IRC web client
WWW=		https://codeberg.org/emersion/gamja

WRKSRC=		${WRKDIR}/${PORTNAME}

LICENSE=	AGPLv3
LICENSE_FILE=	${WRKSRC}/LICENSE

BUILD_DEPENDS=	npm>0:www/npm

USES=		tar:zstd
MAKE_ENV=	npm_config_offline=true

do-build:
	cd ${WRKSRC} && ${SETENV} ${MAKE_ENV} npm ci --legacy-peer-deps --include=dev
	cd ${WRKSRC} && ${SETENV} ${MAKE_ENV} npm run build

# (for maintainer) helper target to generate node_modules cache tarball
make-npm-cache: patch
	${RM} -r ${WRKDIR}/.npm
	cd ${WRKSRC} && ${SETENV} HOME=${WRKDIR} npm ci --legacy-peer-deps --include=dev
	cd ${WRKDIR} \
		&& ${TAR} -c --zstd -f ${PORTNAME}-npm-cache-${DISTVERSION}${EXTRACT_SUFX} .npm \
		&& ${ECHO} "Please upload the file ${WRKDIR}/${PORTNAME}-npm-cache-${DISTVERSION}${EXTRACT_SUFX}"

.include <bsd.port.mk>
