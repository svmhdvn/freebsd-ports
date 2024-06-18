PORTNAME=	wsgi-auth-middleware
DISTVERSION=	0.1.2
CATEGORIES=	www python
MASTER_SITES=	PYPI
PKGNAMEPREFIX=	${PYTHON_PKGNAMEPREFIX}
DISTNAME=	wsgi_auth_middleware-${DISTVERSION}

MAINTAINER=	me@svmhdvn.name
COMMENT=	HTTP authentication WSGI middleware
WWW=		https://sr.ht/~svmhdvn/wsgi-auth-middleware/

LICENSE=	ISCL
NO_ARCH=	yes

USES=		python
USE_PYTHON=	autoplist concurrent pep517 pytest

OPTIONS_DEFINE=		GSSAPI PAM
OPTIONS_DEFAULT=	PAM

BUILD_DEPENDS=		${PYTHON_PKGNAMEPREFIX}hatchling>=0:devel/py-hatchling@${PY_FLAVOR}

GSSAPI_RUN_DEPENDS=	${PYTHON_PKGNAMEPREFIX}gssapi>=0:security/py-gssapi@${PY_FLAVOR}
PAM_RUN_DEPENDS=	${PYTHON_PKGNAMEPREFIX}python-pam>=0:security/py-python-pam@${PY_FLAVOR}

TEST_DEPENDS=		${PYTHON_PKGNAMEPREFIX}k5test>=0:security/py-k5test@${PY_FLAVOR} \
			${PYTHON_PKGNAMEPREFIX}requests>=0:www/py-requests@${PY_FLAVOR} \
			${PYTHON_PKGNAMEPREFIX}requests-gssapi>=0:www/py-requests-gssapi@${PY_FLAVOR} \
			${PYTHON_PKGNAMEPREFIX}wsgi-intercept>=0:devel/py-wsgi-intercept@${PY_FLAVOR}
TEST_ENV=		PYTHONPATH=${WRKSRC}/src

.include <bsd.port.mk>
