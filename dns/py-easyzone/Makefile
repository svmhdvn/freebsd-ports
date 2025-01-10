PORTNAME=	easyzone
PORTVERSION=	1.2.2
PORTREVISION=	3
CATEGORIES=	dns python
MASTER_SITES=	PYPI
PKGNAMEPREFIX=	${PYTHON_PKGNAMEPREFIX}

MAINTAINER=	bra@fsn.hu
COMMENT=	DNS Zone abstraction module for Python
WWW=		http://www.psychofx.com/easyzone/

LICENSE=	MIT

BUILD_DEPENDS=	${_BUILD_RUN_DEPENDS}
RUN_DEPENDS=	${_BUILD_RUN_DEPENDS}

USES=		python
USE_PYTHON=	distutils autoplist

_BUILD_RUN_DEPENDS=	${PYTHON_PKGNAMEPREFIX}dnspython>=1.9.4:dns/py-dnspython@${PY_FLAVOR}

.include <bsd.port.mk>
