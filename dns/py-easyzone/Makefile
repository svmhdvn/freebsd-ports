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

BR_DEPENDS=	${PYTHON_PKGNAMEPREFIX}dnspython>=1.9.4:dns/py-dnspython@${PY_FLAVOR}
BUILD_DEPENDS=	${BR_DEPENDS}
RUN_DEPENDS=	${BR_DEPENDS}

USES=		python
USE_PYTHON=	distutils autoplist

.include <bsd.port.mk>
