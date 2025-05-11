PORTNAME=	t3x0
DISTVERSION=	45
CATEGORIES=	lang
MASTER_SITES=	https://t3x.org/t3x/0/

MAINTAINER=	me@svmhdvn.name
COMMENT=	Minimal Procedural Language
WWW=		https://t3x.org/t3x/0/

LICENSE=	BSD0CLAUSE
LICENSE_FILE=	${WRKSRC}/0BSD

USES=		zip ncurses

WRKSRC=		${WRKDIR}/${PORTNAME}

MAKE_ARGS=		T3XDIR=${STAGEDIR}${_T3XDIR} \
			BINDIR=${STAGEDIR}${PREFIX}/bin \
			${MAKE_ARGS_${ARCH}}
MAKE_ARGS_i386=		HOST=unix-386
MAKE_ARGS_amd64=	HOST=unix-686
MAKE_ARGS_armv6=	HOST=unix-armv6
MAKE_ARGS_armv7=	HOST=unix-armv7

# TODO upstream fix for this
MAKE_JOBS_UNSAFE=	yes

_T3XDIR=${PREFIX}/libexec/t3x/0

.include <bsd.port.pre.mk>

.if empty(MAKE_ARGS_${ARCH})
ALL_TARGET=	all-tcode
INSTALL_TARGET=	install-tcode
TEST_TARGET=	test
PLIST=		pkg-plist.tcvm
.else
ALL_TARGET=	all-native
INSTALL_TARGET=	install-native
TEST_TARGET=	test ${MAKE_ARGS_${ARCH}:S/HOST=//1}-test
PLIST=		pkg-plist.${ARCH}
.endif

post-patch:
	${REINPLACE_CMD} 's,^T3XDIR=.*$$,T3XDIR=${_T3XDIR},' ${WRKSRC}/bin/tx0.sh

# NOTE: trailing slash is necessary here
do-configure:
	(cd ${WRKSRC} && ./bin/modpath.sh ${_T3XDIR}/)

post-install:
	${STRIP_CMD} ${STAGEDIR}${PREFIX}/bin/tcvm

.include <bsd.port.post.mk>
