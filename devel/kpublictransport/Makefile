PORTNAME=	kpublictransport
DISTVERSION=	${KDE_APPLICATIONS_VERSION}
PORTREVISION=	1
CATEGORIES=	devel kde kde-applications

MAINTAINER=	kde@FreeBSD.org
COMMENT=	Access realtime public transport data

LIB_DEPENDS=	libprotobuf.so:devel/protobuf

USES=		cmake compiler:c++11-lang gettext kde:6 qt:6 tar:xz
USE_KDE=	ecm:build
USE_QT=		base

OPTIONS_DEFINE=	DOCS

CXXFLAGS=	-DPROTOBUF_ENABLE_DEBUG_LOGGING_MAY_LEAK_PII=0

# Override shared library version
#KDE_APPLICATIONS_SHLIB_VER=	${KDE_APPLICATIONS_VERSION}

.include <bsd.port.mk>
