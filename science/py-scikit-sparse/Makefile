PORTNAME=	scikit-sparse
DISTVERSIONPREFIX=	v
DISTVERSION=	0.5.0
CATEGORIES=	science python
MASTER_SITES=	PYPI
PKGNAMEPREFIX=	${PYTHON_PKGNAMEPREFIX}

MAINTAINER=	yuri@FreeBSD.org
COMMENT=	Sparse matrix package
WWW=		https://github.com/scikit-sparse/scikit-sparse

LICENSE=	BSD2CLAUSE
LICENSE_FILE=	${WRKSRC}/LICENSE.txt

BUILD_DEPENDS=	${PYTHON_PKGNAMEPREFIX}setuptools>=61:devel/py-setuptools@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}wheel>=0:devel/py-wheel@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}numpy>=2.0.0:math/py-numpy@${PY_FLAVOR}
LIB_DEPENDS=	libumfpack.so:math/suitesparse-umfpack	\
		libcholmod.so:math/suitesparse-cholmod \
		libklu.so:math/suitesparse-klu \
		libspqr.so:math/suitesparse-spqr \
		libbtf.so:math/suitesparse-btf
RUN_DEPENDS=	${PYTHON_PKGNAMEPREFIX}numpy>=2.0.0:math/py-numpy@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}scipy>=1.14:science/py-scipy@${PY_FLAVOR}

USES=		fortran python
USE_PYTHON=	cython autoplist pep517 pytest
USE_GITHUB=	yes

CFLAGS+=	-I${LOCALBASE}/include/suitesparse
LDFLAGS+=	-shared

TEST_ENV=	${MAKE_ENV} PYTHONPATH=${STAGEDIR}${PYTHONPREFIX_SITELIBDIR}
TEST_WRKSRC=	${WRKSRC}/tests

post-install:
	@${STRIP_CMD} ${STAGEDIR}${PYTHONPREFIX_SITELIBDIR}/sksparse/cholmod*.so

# tests as of 0.4.16: 10 passed, 400 warnings in 27.47

.include <bsd.port.mk>
