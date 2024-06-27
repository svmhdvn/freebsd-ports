PORTNAME=	empt-scripts
DISTVERSIONPREFIX=v
DISTVERSION=	0.0.11
CATEGORIES=	sysutils

MAINTAINER=	me@svmhdvn.name
COMMENT=	EMPT scripts
# TODO
WWW=		empt.ca

LICENSE=	UNLICENSE

# TODO waiting on SRHT_TUPLE support in bsd.sites.mk
_SRHT_TUPLE=	svmhdvn:${PORTNAME}:${DISTVERSIONPREFIX}${DISTVERSION}

.for account project tag in ${_SRHT_TUPLE:S/:/ /g}
MASTER_SITES+=	https://git.sr.ht/~${account}/${project}/archive/${tag}${EXTRACT_SUFX}?dummy=/:${account}_${project:S/-/_/g}
DISTFILES+=	${account}-${project}-${tag}_SRHT0${EXTRACT_SUFX}:${account}_${project:S/-/_/g}
.endfor

TEST_TARGET=	test
TEST_DEPENDS=	shellcheck:devel/hs-ShellCheck

NO_ARCH=	yes

.include <bsd.port.mk>
