PORTNAME=	gkrellflynn
PORTVERSION=	0.8
PORTREVISION=	9
CATEGORIES=	sysutils
MASTER_SITES=	https://mirror.amdmi3.ru/distfiles/ \
		http://horus.comlab.uni-rostock.de/flynn/

MAINTAINER=	amdmi3@FreeBSD.org
COMMENT=	Tiny system load meter for gkrellm
WWW=		http://horus.comlab.uni-rostock.de/flynn/

BUILD_DEPENDS=	${LOCALBASE}/include/gkrellm2/gkrellm.h:sysutils/gkrellm2
RUN_DEPENDS=	gkrellm:sysutils/gkrellm2

USES=		gnome pkgconfig
USE_GNOME=	gtk20
MAKE_ARGS=	CC="${CC}" CFLAGS="${CFLAGS} -c -fPIC"
ALL_TARGET=	${PORTNAME}.so

CFLAGS+=	`pkg-config --cflags gtk+-2.0 gthread-2.0` \
		-I${LOCALBASE}/include -DGKRELLM2

PLIST_FILES=	libexec/gkrellm2/plugins/gkrellflynn.so

do-install:
	${MKDIR} ${STAGEDIR}${PREFIX}/libexec/gkrellm2/plugins
	${INSTALL_PROGRAM} ${WRKSRC}/gkrellflynn.so \
		${STAGEDIR}${PREFIX}/libexec/gkrellm2/plugins

.include <bsd.port.mk>
