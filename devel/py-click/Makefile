PORTNAME=	click
DISTVERSION=	8.3.2
CATEGORIES=	devel python
MASTER_SITES=	PYPI
PKGNAMEPREFIX=	${PYTHON_PKGNAMEPREFIX}

MAINTAINER=	robak@FreeBSD.org
COMMENT=	Python package for creating command line interfaces
WWW=		https://github.com/pallets/click

LICENSE=	BSD3CLAUSE
LICENSE_FILE=	${WRKSRC}/LICENSE.txt

BUILD_DEPENDS=	${PYTHON_PKGNAMEPREFIX}flit-core>=0:devel/py-flit-core@${PY_FLAVOR}

USES=		python
USE_PYTHON=	autoplist pytest pep517

NO_ARCH=	yes

.include <bsd.port.mk>
