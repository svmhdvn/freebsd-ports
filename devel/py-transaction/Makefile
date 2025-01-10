PORTNAME=	transaction
PORTVERSION=	3.1.0
PORTREVISION=	1
CATEGORIES=	devel python
MASTER_SITES=	PYPI
PKGNAMEPREFIX=	${PYTHON_PKGNAMEPREFIX}

MAINTAINER=	wen@FreeBSD.org
COMMENT=	Transaction management for Python
WWW=		https://pypi.org/project/transaction/

LICENSE=	ZPL21

BUILD_DEPENDS=	${_BUILD_RUN_DEPENDS}
RUN_DEPENDS=	${_BUILD_RUN_DEPENDS}

USES=		python
USE_PYTHON=	distutils autoplist

NO_ARCH=	yes

_BUILD_RUN_DEPENDS=	${PYTHON_PKGNAMEPREFIX}zope.interface>=3.5.2:devel/py-zope.interface@${PY_FLAVOR}

.include <bsd.port.mk>
