PORTNAME=	click
PORTVERSION=	8.3.1
CATEGORIES=	devel python
MASTER_SITES=	PYPI
PKGNAMEPREFIX=	${PYTHON_PKGNAMEPREFIX}

MAINTAINER=	robak@FreeBSD.org
COMMENT=	Python package for creating command line interfaces
WWW=		https://github.com/pallets/click

LICENSE=	BSD3CLAUSE
LICENSE_FILE=	${WRKSRC}/LICENSE.txt

USES=		python
USE_PYTHON=	autoplist pep517 pytest

BUILD_DEPENDS=	${PYTHON_PKGNAMEPREFIX}flit-core>=3.11<4:devel/py-flit-core@${PY_FLAVOR}

NO_ARCH=	yes

.include <bsd.port.mk>
