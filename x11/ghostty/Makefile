PORTNAME=	ghostty
#DISTVERSIONPREFIX=	v
# TODO switch to latest tagged version once
# https://github.com/ghostty-org/ghostty/pull/7606
# lands in a tagged release
DISTVERSION=	g20250622
CATEGORIES=	x11 wayland

MAINTAINER=	me@svmhdvn.name
COMMENT=	Fast, native, feature-rich terminal emulator
WWW=		https://github.com/ghostty-org/ghostty

LICENSE=	MIT
LICENSE_FILE=	${WRKSRC}/LICENSE

BUILD_DEPENDS=	zig>=0.14.0:lang/zig

USES=		gettext gnome pkgconfig
USE_GNOME=	gtk40 libadwaita

USE_GITHUB=	yes
GH_ACCOUNT=	ghostty-org
GH_TAGNAME=	5bfdb1b
GH_TUPLE=	ifreund:zig-pixman:v0.3.0:zig_pixman/../.cache/zig/p/pixman-0.3.0-LClMnz2VAAAs7QSCGwLimV5VUYx0JFnX5xWU6HwtMuDX \
		ifreund:zig-wayland:v0.3.0:zig_wayland/../.cache/zig/p/wayland-0.3.0-lQa1kjPIAQDmhGYpY-zxiRzQJFHQ2VqhJkQLbKKdt5wl \
		ifreund:zig-xkbcommon:v0.3.0:zig_xkbcommon/../.cache/zig/p/xkbcommon-0.3.0-VDqIe3K9AQB2fG5ZeRcMC9i7kfrp5m2rWgLrmdNn9azr \
		swaywm:zig-wlroots:v0.18.2:zig_wlroots/../.cache/zig/p/wlroots-0.18.2-jmOlchnIAwBq45_cxU1V3OWErxxJjQZlc9PyJfR-l3uk

MAKE_ENV=	DESTDIR="${STAGEDIR}"
CONFIGURE_ARGS=	--prefix "${PREFIX}" \
		${WITH_DEBUG:D:U-Doptimize=ReleaseFast} \
		${WITH_PIE:D-Dpie} \
		${STRIP:C/.+/-Dstrip/} \
		-Dcpu=${CPUTYPE:Ubaseline} \
		--verbose
NO_INSTALL=	yes # strip(1) breaks runtime

do-build:
	@(cd ${WRKSRC} && ${MAKE_ENV} zig build ${CONFIGURE_ARGS})

do-test:
	@(cd ${WRKSRC} && ${TEST_ENV} zig build test ${CONFIGURE_ARGS})

.include <bsd.port.mk>
