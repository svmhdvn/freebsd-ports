PORTNAME=	django-bakery
PORTVERSION=	0.12.7
PORTREVISION=	1
CATEGORIES=	www python
MASTER_SITES=	PYPI
PKGNAMEPREFIX=	${PYTHON_PKGNAMEPREFIX}

MAINTAINER=	alex@xanderio.de
COMMENT=	Set of helpers for baking your Django site out as flat files
WWW=		https://github.com/datadesk/django-bakery/

LICENSE=	MIT
#LICENSE_FILE=	Not yet packaged in sdist

RUN_DEPENDS=	${PYTHON_PKGNAMEPREFIX}six>1.5.2:devel/py-six@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}boto3>=1.4.4:www/py-boto3@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}fs2>=2.0.17:filesystems/py-fs2@${PY_FLAVOR}

USES=		python
USE_PYTHON=	autoplist distutils

NO_ARCH=	yes

.include <bsd.port.mk>
