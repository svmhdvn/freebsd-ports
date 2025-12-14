PORTNAME=	Events
DISTVERSIONPREFIX=	v
DISTVERSION=	0.5
CATEGORIES=	devel
PKGNAMEPREFIX=	${PYTHON_PKGNAMEPREFIX}

MAINTAINER=	me@svmhdvn.name
COMMENT=	Python Event Handling the C# Style
WWW=		https://events.readthedocs.io/en/latest/

LICENSE=	BSD3CLAUSE
LICENSE_FILE=	${WRKSRC}/LICENSE

USES=		python
USE_PYTHON=	autoplist concurrent distutils pytest

USE_GITHUB=	yes
GH_ACCOUNT=	pyeve
GH_PROJECT=	events

do-test:
	cd ${WRKSRC} && ${SETENV} ${MAKE_ENV} ${PYTHON_CMD} setup.py test

.include <bsd.port.mk>
