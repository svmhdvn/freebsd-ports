portname=	krb5
PORTVERSION=	0.5.1
CATEGORIES=	security python
MASTER_SITES=	PYPI
PKGNAMEPREFIX=	${PYTHON_PKGNAMEPREFIX}

MAINTAINER=	sunpoet@FreeBSD.org
COMMENT=	Kerberos API bindings for Python
WWW=		https://github.com/jborean93/pykrb5

LICENSE=	MIT
LICENSE_FILE=	${WRKSRC}/LICENSE

BUILD_DEPENDS=	${PYTHON_PKGNAMEPREFIX}cython>=0.29.32<4.0.0:lang/cython@${PY_FLAVOR}

USES=		gssapi python
USE_PYTHON=	autoplist concurrent cython distutils

MAKE_ENV=	KRB5_KRB5CONFIG=${KRB5CONFIG}

post-install:
	${FIND} ${STAGEDIR}${PYTHON_SITELIBDIR} -name '*.so' -exec ${STRIP_CMD} {} +

.include <bsd.port.mk>
