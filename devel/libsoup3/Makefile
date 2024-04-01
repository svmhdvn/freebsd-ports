PORTNAME=	libsoup
PORTVERSION=	3.2.2
CATEGORIES=	devel gnome
MASTER_SITES=	GNOME
DIST_SUBDIR=	gnome
PKGNAMESUFFIX=	3

MAINTAINER=	desktop@FreeBSD.org
COMMENT=	HTTP client/server library for GNOME

LICENSE=	LGPL20
LICENSE_FILE=	${WRKSRC}/COPYING

BUILD_DEPENDS=	glib-networking>0:net/glib-networking \
		${PYTHON_PKGNAMEPREFIX}gi-docgen>=0:textproc/py-gi-docgen@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}Jinja2>=0:devel/py-Jinja2@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}markdown>0:textproc/py-markdown@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}markupsafe>0:textproc/py-markupsafe@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}pygments>0:textproc/py-pygments@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}smartypants>0:textproc/py-smartypants@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}toml>0:textproc/py-toml@${PY_FLAVOR} \
		${PYTHON_PKGNAMEPREFIX}typogrify>0:textproc/py-typogrify@${PY_FLAVOR}

LIB_DEPENDS=	libbrotlidec.so:archivers/brotli \
		libnghttp2.so:www/libnghttp2 \
		libpsl.so:dns/libpsl

RUN_DEPENDS=	glib-networking>0:net/glib-networking

USES=		cpe gettext gnome meson pkgconfig python:build sqlite \
		ssl tar:xz
USE_GNOME=	glib20 intlhack introspection:build libxml2
USE_LDCONFIG=	yes
CPE_VENDOR=	gnome

OPTIONS_DEFINE=	GSSAPI

MESON_ARGS=	-Dtests=false \
		-Dinstalled_tests=false \
		-Dsysprof=disabled \
		-Dpkcs11_tests=disabled \
		-Dfuzzing=disabled \
		-Dautobahn=disabled \
		-Dtls_check=true \
		-Dvapi=disabled \
		-Dntlm=disabled

GSSAPI_USES=		gssapi
GSSAPI_MESON_ON=	-Dgssapi=enabled -Dkrb5_config=${KRB5CONFIG}
GSSAPI_MESON_OFF=	-Dgssapi=disabled

BINARY_ALIAS=	python3=${PYTHON_CMD}

.include <bsd.port.mk>
