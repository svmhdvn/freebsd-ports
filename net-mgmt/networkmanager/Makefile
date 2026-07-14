PORTNAME=	networkmanager
DISTVERSION=	1.58-rc1
CATEGORIES=	net-mgmt

MAINTAINER=	kde@FreeBSD.org
COMMENT=	Network management daemon
WWW=		https://networkmanager.dev

LICENSE=	LGPL20
LICENSE_FILE=	${WRKSRC}/COPYING

BUILD_DEPENDS=	dhcpcd:net/dhcpcd \
		xsltproc:textproc/libxslt
LIB_DEPENDS=	libdbus-1.so:devel/dbus \
		libndp.so:net/libndp \
		libudev.so:devel/libudev-devd \
		libuuid.so:misc/libuuid \
		libnss3.so:security/nss \
		libcurl.so:ftp/curl \
		libjansson.so:devel/jansson \
		libgnutls.so:security/gnutls \
		libnvme.so:devel/libnvme
RUN_DEPENDS=	dhcpcd:net/dhcpcd

USES=		gnome meson perl5 pkgconfig python:build

USE_GNOME=	glib20 introspection

USE_GITLAB=	yes
GL_SITE=	https://gitlab.freedesktop.org
GL_ACCOUNT=	NetworkManager
GL_PROJECT=	NetworkManager

BINARY_ALIAS=	python3=${PYTHON_CMD}

MESON_ARGS=	\
		-Ddbus_conf_dir=disabled \
		-Dlibaudit=no \
		-Dlibpsl=false \
		-Dmodem_manager=false \
		-Dnm_cloud_setup=false \
		-Dnmcli=false \
		-Dnmtui=false \
		-Dclat=false \
		-Diptables=false \
		-Dip6tables=false \
		-Dnft=false \
		-Dmodprobe=false \
		-Dovs=false \
		-Dpolkit=false \
		-Dppp=false \
		-Dselinux=false \
		-Dsession_tracking=no \
		-Dsystemd_journal=false \
		-Dsystemdsystemunitdir=no \
		-Dsystemdsystemgeneratordir=no \
		-Dtests=no

.include <bsd.port.mk>
