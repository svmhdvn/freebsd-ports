PORTNAME=	k5test
PORTVERSION=	0.10.4
CATEGORIES=	security python
PKGNAMEPREFIX=	${PYTHON_PKGNAMEPREFIX}

#MASTER_SITES=	PYPI
USE_GITHUB=		yes
GH_ACCOUNT=		svmhdvn
GH_TAGNAME=		krb5config
DISTVERSIONPREFIX=	v

MAINTAINER=	me@svmhdvn.name
COMMENT=	A library for setting up self-contained Kerberos 5 environments
WWW=		https://github.com/pythongssapi/k5test

LICENSE=	MIT

USES=		gssapi python
USE_PYTHON=	autoplist concurrent pep517

BUILD_DEPENDS=	${PYTHON_PKGNAMEPREFIX}setuptools>=0:devel/py-setuptools@${PY_FLAVOR}

NO_ARCH=	yes

.include <bsd.port.mk>
