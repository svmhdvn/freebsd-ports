PORTNAME=	wsgi-kerberos
DISTVERSION=	1.1.0
CATEGORIES=	www python

# TODO
USE_GITHUB=		yes
GH_ACCOUNT=		svmhdvn
DISTVERSIONPREFIX=	v
#MASTER_SITES=	PYPI

PKGNAMEPREFIX=	${PYTHON_PKGNAMEPREFIX}
DISTNAME=	wsgi_kerberos-${DISTVERSION}

MAINTAINER=	me@svmhdvn.name
COMMENT=	WSGI Kerberos Authentication Middleware
WWW=		https://github.com/deshaw/wsgi-kerberos

LICENSE=	BSD3CLAUSE
#LICENSE_FILE=	${WRKSRC}/LICENSE

BUILD_DEPENDS=	${PYTHON_PKGNAMEPREFIX}hatchling>=0:devel/py-hatchling@${PY_FLAVOR}

RUN_DEPENDS=	${PYTHON_PKGNAMEPREFIX}gssapi>=0:security/py-gssapi@${PY_FLAVOR}
TEST_DEPENDS=	${PYTHON_PKGNAMEPREFIX}k5test>=0:security/py-k5test@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}requests>=0:www/py-requests@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}requests-gssapi>=0:www/py-requests-gssapi@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}wsgi-intercept>=0:devel/py-wsgi-intercept@${PY_FLAVOR}

USES=		python shebangfix
USE_PYTHON=	autoplist concurrent pep517 pytest
SHEBANG_FILES=	example/*.py

NO_ARCH=	yes

.include <bsd.port.mk>
