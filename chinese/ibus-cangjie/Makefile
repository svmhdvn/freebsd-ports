PORTNAME=	ibus-cangjie
PORTVERSION=	2.4
PORTREVISION=	1
DISTVERSIONPREFIX=	v
CATEGORIES=	chinese

MAINTAINER=	hello@blubee.me
COMMENT=	IBus engine for users of the Cangjie and Quick
WWW=		https://cangjians.github.io/projects/ibus-cangjie/

LICENSE=	GPLv3+
LICENSE_FILE=	${WRKSRC}/COPYING

BR_DEPENDS=	${PYTHON_SITELIBDIR}/cangjie/_core.so:chinese/pycangjie \
		${PYTHON_SITELIBDIR}/pycanberra/pycanberra.py:devel/pycanberra@${PY_FLAVOR}
BUILD_DEPENDS=	${BR_DEPENDS}
LIB_DEPENDS=	libibus-1.0.so:textproc/ibus
RUN_DEPENDS=	${BR_DEPENDS}

USES=		autoreconf gmake gnome libtool pkgconfig python
USE_GNOME=	introspection:run pygobject3 intltool
GLIB_SCHEMAS=	org.cangjians.ibus.cangjie.gschema.xml \
		org.cangjians.ibus.quick.gschema.xml
GNU_CONFIGURE=	yes

USE_GITHUB=	yes
GH_ACCOUNT=	Cangjians

OPTIONS_DEFINE=	NLS
NLS_USES=	gettext
NLS_CONFIGURE_ENABLE=	gettext

.include <bsd.port.mk>
