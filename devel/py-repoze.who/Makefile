PORTNAME=	repoze.who
PORTVERSION=	2.4
PORTREVISION=	1
CATEGORIES=	devel python
MASTER_SITES=	PYPI
PKGNAMEPREFIX=	${PYTHON_PKGNAMEPREFIX}

MAINTAINER=	bofh@FreeBSD.org
COMMENT=	Identification and authentication framework for WSGI
WWW=		http://www.repoze.org/

LICENSE=	REPOZE
LICENSE_NAME=	Repoze License
LICENSE_FILE=	${WRKSRC}/LICENSE.txt
LICENSE_PERMS=	dist-mirror dist-sell pkg-mirror pkg-sell auto-accept

BUILD_DEPENDS=	${_BUILD_RUN_DEPENDS}
RUN_DEPENDS=	${_BUILD_RUN_DEPENDS}

USES=		python
USE_PYTHON=	distutils autoplist
NO_ARCH=	yes

_BUILD_RUN_DEPENDS=	${PYTHON_PKGNAMEPREFIX}webob>=0:www/py-webob@${PY_FLAVOR} \
			${PYTHON_PKGNAMEPREFIX}zope.interface>=3.5.2:devel/py-zope.interface@${PY_FLAVOR}

.include <bsd.port.mk>
