PORTNAME=	gssapi
DISTVERSION=	1.8.3
CATEGORIES=	security python
MASTER_SITES=	PYPI
PKGNAMEPREFIX=	${PYTHON_PKGNAMEPREFIX}

MAINTAINER=	john@saltant.com
COMMENT=	High-level and low-level Python bindings to GSSAPI C libraries
WWW=		https://github.com/pythongssapi/python-gssapi

LICENSE=	ISCL

RUN_DEPENDS=	${PYTHON_PKGNAMEPREFIX}decorator>0:devel/py-decorator@${PY_FLAVOR}

# Officially: 3.7-3.12
USES=		python gssapi ssl
USE_PYTHON=	autoplist cython distutils
MAKE_ENV+=	GSSAPI_KRB5CONFIG=${KRB5CONFIG}

post-install:
	${FIND} ${STAGEDIR}${PYTHON_SITELIBDIR}/${PORTNAME} -type f -name '*.so' -exec ${STRIP_CMD} {} +

.include <bsd.port.mk>
