PORTNAME=	dbus
PORTVERSION=	${QT5_VERSION}${QT5_KDE_PATCH}
CATEGORIES=	devel
PKGNAMEPREFIX=	qt5-

MAINTAINER=	kde@FreeBSD.org
COMMENT=	Qt D-Bus inter-process communication module

LIB_DEPENDS=	libdbus-1.so:devel/dbus

USES=		compiler:c++11-lang perl5 qmake:no_env qt-dist:5,base
USE_PERL5=	extract
USE_QT=		core qmake:build buildtools:build
USE_LDCONFIG=	${PREFIX}/${QT_LIBDIR_REL}
HAS_CONFIGURE=	yes
CONFIGURE_ARGS=	-no-gui -no-xcb

BUILD_WRKSRC=	${WRKSRC}/src/${PORTNAME}
INSTALL_WRKSRC=	${BUILD_WRKSRC}

TOOLS=		qdbuscpp2xml qdbusxml2cpp

QT_BINARIES=	yes
QT_DEFINES=	DBUS
QT_CONFIG=	dbus

post-configure:
.for d in src/dbus src/tools/qdbuscpp2xml src/tools/qdbusxml2cpp
	${MKDIR} ${WRKSRC}/${d}
	cd ${WRKSRC}/${d} && ${SETENV} ${QMAKE_ENV} ${_QMAKE} ${QMAKE_ARGS} ${WRKSRC}/${d}
.endfor

post-build:
.for t in ${TOOLS}
	@cd ${WRKSRC}/src/tools/${t} && \
		${SETENV} ${MAKE_ENV} ${MAKE} ${MAKE_FLAGS} ${MAKEFILE} \
		${_MAKE_JOBS} ${MAKE_ARGS} ${ALL_TARGET}
.endfor

post-install:
.for t in ${TOOLS}
	@cd ${WRKSRC}/src/tools/${t} && \
		${SETENV} ${MAKE_ENV} ${MAKE} ${MAKE_FLAGS} ${MAKEFILE} \
		${MAKE_ARGS} ${INSTALL_TARGET}
.endfor

.include <bsd.port.mk>
