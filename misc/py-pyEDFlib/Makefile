PORTNAME=	pyEDFlib
DISTVERSIONPREFIX=	v
DISTVERSION=	0.1.40
PORTREVISION=	1
CATEGORIES=	misc
#MASTER_SITES=	PYPI # PyPI version fails: https://github.com/holgern/pyedflib/issues/168
PKGNAMEPREFIX=	${PYTHON_PKGNAMEPREFIX}

MAINTAINER=	yuri@FreeBSD.org
COMMENT=	Python library to read/write EDF+/BDF+ files based on EDFlib
WWW=		https://github.com/holgern/pyedflib

LICENSE=	BSD2CLAUSE
LICENSE_FILE=	${WRKSRC}/LICENSE

BUILD_DEPENDS=	${PYNUMPY}
RUN_DEPENDS=	${PYNUMPY}

USES=		fortran python
USE_PYTHON=	distutils cython autoplist

USE_GITHUB=	yes
GH_ACCOUNT=	holgern
GH_PROJECT=	pyedflib

USE_GCC=	yes # fails to build with clang: https://github.com/holgern/pyedflib/issues/104

post-install:
	${STRIP_CMD} ${STAGEDIR}${PYTHONPREFIX_SITELIBDIR}/pyedflib/_extensions/_pyedflib*.so

.include <bsd.port.mk>
