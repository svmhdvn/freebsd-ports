PORTNAME=	lazr.config
PORTVERSION=	2.2.3
PORTREVISION=	1
CATEGORIES=	devel python
MASTER_SITES=	PYPI
PKGNAMEPREFIX=	${PYTHON_PKGNAMEPREFIX}

MAINTAINER=	acm@FreeBSD.org
COMMENT=	Create configuration schemas, and process and validate configurations
WWW=		https://launchpad.net/lazr.config

LICENSE=	LGPL3
LICENSE_FILE=	${WRKSRC}/COPYING.txt

RUN_DEPENDS=	${PYTHON_PKGNAMEPREFIX}zope.interface>=0:devel/py-zope.interface@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}lazr.delegates>=2.0.3:devel/py-lazr.delegates@${PY_FLAVOR}

USES=		python
USE_PYTHON=	autoplist distutils

.include <bsd.port.mk>
