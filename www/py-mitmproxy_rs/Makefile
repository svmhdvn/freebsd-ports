PORTNAME=	mitmproxy_rs
DISTVERSION=	0.12.7
CATEGORIES=	www python
PKGNAMEPREFIX=	${PYTHON_PKGNAMEPREFIX}
MASTER_SITES=	PYPI
DISTFILES=	${DISTNAME}${EXTRACT_SUFX}

MAINTAINER=	me@svmhdvn.name
COMMENT=	Rust bits in mitmproxy
WWW=		https://pypi.org/project/mitmproxy-rs

LICENSE=	MIT
LICENSE_FILE=	${WRKSRC}/LICENSE

BUILD_DEPENDS=	${PYTHON_PKGNAMEPREFIX}maturin>=0.8.3:devel/py-maturin@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}pip>=20.2.3:devel/py-pip@${PY_FLAVOR} \
		public_suffix_list>0:dns/public_suffix_list

USES=		cargo python
USE_PYTHON=	autoplist concurrent pep517 pytest

CARGO_BUILD=		no
CARGO_INSTALL=		no
CARGO_TARGET_DIR=	${WRKSRC}/target
CARGO_CARGOTOML=	${WRKSRC}/mitmproxy-rs/Cargo.toml

.include <bsd.port.mk>
