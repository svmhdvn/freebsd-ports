PORTNAME=	dbt-core
DISTVERSION=	1.11.0
CATEGORIES=	databases python
MASTER_SITES=	PYPI
DISTNAME=	dbt_core-${DISTVERSION}
PKGNAMEPREFIX=	${PYTHON_PKGNAMEPREFIX}

MAINTAINER=	pat@patmaddox.com
COMMENT=	With dbt, build analytics the way engineers build applications
WWW=		https://github.com/dbt-labs/dbt-core

LICENSE=	APACHE20

BUILD_DEPENDS=	${PYTHON_PKGNAMEPREFIX}hatchling>=0:devel/py-hatchling@${PY_FLAVOR}
RUN_DEPENDS=	${PYTHON_PKGNAMEPREFIX}agate>=1.7.0:textproc/py-agate@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}Jinja2>=3.1.3<4:devel/py-Jinja2@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}mashumaro>=3.9<4:devel/py-mashumaro@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}msgpack>0.5.6:devel/py-msgpack@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}logbook>0:devel/py-logbook@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}click>=8.0.2<9:devel/py-click@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}networkx>=2.3:math/py-networkx@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}colorama>=0.3.9<0.5:devel/py-colorama@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}pathspec>=0.9:devel/py-pathspec@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}isodate>=0.6:devel/py-isodate@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}sqlparse>=0.5.0<0.6:databases/py-sqlparse@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}dbt-extractor>=0.5:devel/py-dbt-extractor@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}pydantic2<3:devel/py-pydantic2@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}minimal-snowplow-tracker>=1.0.2<2:devel/py-minimal-snowplow-tracker@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}dbt-semantic-interfaces>=0.9.0:databases/py-dbt-semantic-interfaces@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}jsonschema>=4.19.1<5:devel/py-jsonschema@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}packaging>20.9:devel/py-packaging@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}protobuf>=6>7:devel/py-protobuf@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}pytz>=2015.7:devel/py-pytz@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}pyyaml>=6.0:devel/py-pyyaml@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}typing-extensions>=4.4:devel/py-typing-extensions@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}idna>=2.5<4:dns/py-idna@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}requests<3:www/py-requests@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}urllib3>=1.0:net/py-urllib3@${PY_FLAVOR}

USES=		python
USE_PYTHON=	autoplist concurrent pep517 pytest

NO_ARCH=	yes

.include <bsd.port.mk>
