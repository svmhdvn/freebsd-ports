PORTNAME=	mitmproxy
PORTVERSION=	12.1.1
DISTVERSIONPREFIX=	v
CATEGORIES=	www python

MAINTAINER=	gaod@hychen.org
COMMENT=	SSL-capable man-in-the-middle proxy
WWW=		https://mitmproxy.org/

LICENSE=	MIT
LICENSE_FILE=	${WRKSRC}/LICENSE

#${PYTHON_PKGNAMEPREFIX}cryptography>=42.0<45.1:security/py-cryptography@${PY_FLAVOR} \
BUILD_DEPENDS=	${PYTHON_PKGNAMEPREFIX}setuptools>=0:devel/py-setuptools@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}wheel>=0:devel/py-wheel@${PY_FLAVOR}

RUN_DEPENDS=	${PYTHON_PKGNAMEPREFIX}aioquic>=1.2.0<=1.2.0:www/py-aioquic@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}argon2-cffi>=23.1.0<=23.1.0:security/py-argon2-cffi@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}asgiref>=3.2.10<=3.8.1:www/py-asgiref@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}brotli>=1.0<=1.1.0:archivers/py-brotli@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}certifi>=2019.9.11:security/py-certifi@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}flask>=3.0<=3.1.1:www/py-flask@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}h11>=0.16.0<=0.16.0:net/py-h11@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}h2>=4.1<=4.1.0:www/py-h2@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}hyperframe>=6.0<=6.1.0:www/py-hyperframe@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}kaitaistruct>=0.10<=0.10:devel/py-kaitaistruct@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}ldap3>=2.8<=2.9.1:net/py-ldap3@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}mitmproxy_rs>=0.12.6<0.13:www/py-mitmproxy_rs@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}msgpack>=1.0.0<=1.1.0:devel/py-msgpack@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}passlib>=1.6.5<=1.7.4:security/py-passlib@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}openssl>=24.3<=25.1.0:security/py-openssl@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}pyparsing>=2.4.2<=3.2.3:devel/py-pyparsing@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}pyperclip<=1.9.0>=1.9.0:devel/py-pyperclip@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}ruamel.yaml>=0.18.10<=0.18.12:devel/py-ruamel.yaml@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}sortedcontainers>=2.3<=2.4.0:devel/py-sortedcontainers@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}tornado>=6.5.0<=6.5.1:www/py-tornado@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}typing-extensions>=4.13.2<=4.14:devel/py-typing-extensions@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}urwid>=2.6.14<=2.6.16:devel/py-urwid@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}wsproto>=1.0<=1.2.0:net/py-wsproto@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}publicsuffix2>=2.20190812<=2.20191221:dns/py-publicsuffix2@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}zstandard>=0.15<=0.23.0:archivers/py-zstandard@${PY_FLAVOR}

TEST_DEPENDS=	${PYTHON_PKGNAMEPREFIX}hypothesis>0:devel/py-hypothesis@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}parver>0:devel/py-parver@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}pytest-asyncio>0:devel/py-pytest-asyncio@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}pytest-cov>0:devel/py-pytest-cov@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}pytest-timeout>0:devel/py-pytest-timeout@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}pytest-xdist>0:devel/py-pytest-xdist@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}pytest>0:devel/py-pytest@${PY_FLAVOR}

USES=		cpe python:3.12+
USE_GITHUB=	yes
USE_PYTHON=	autoplist cryptography pep517 pytest noflavors

NO_ARCH=	yes

#do-test:
#	@cd ${TEST_WRKSRC} && ${SETENV} ${TEST_ENV} ${PYTHON_CMD} -m pytest -rs -v

.include <bsd.port.mk>
