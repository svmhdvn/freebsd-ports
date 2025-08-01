PORTNAME=	linknx
PORTVERSION=	0.0.1.32
CATEGORIES=	net
MASTER_SITES=	SF/${PORTNAME}/${PORTNAME}/${PORTNAME}-${PORTVERSION}

MAINTAINER=	bkoenig@alpha-tierchen.de
COMMENT=	Rule-based event handling in a KNX installation
WWW=		https://linknx.sourceforge.net/

LICENSE=	GPLv2

DEPRECATED=	Outdated and unsupported upstream
EXPIRATION_DATE=2025-07-31

BROKEN_armv6=		fails to configure: checking for GNU Pth... Segmentation fault
BROKEN_armv7=		fails to configure: checking for GNU Pth... Segmentation fault
BROKEN_mips=		fails to configure: checking for GNU Pth... Segmentation fault
BROKEN_mips64=		fails to configure: checking for GNU Pth... Segmentation fault

LIB_DEPENDS=	libpthsem.so:devel/pthsem
BUILD_DEPENDS=	${LOCALBASE}/lib/libargp.a:devel/argp-standalone

USES=	compiler gmake autoreconf pkgconfig
USE_CXXSTD=	c++14

GNU_CONFIGURE=	yes
CONFIGURE_ARGS+=CFLAGS="-I${LOCALBASE}/include" \
		LDFLAGS="-I${LOCALBASE}/include -L/${LOCALBASE}/lib"
CXXFLAGS+=	${CXXFLAGS_${CHOSEN_COMPILER_TYPE}}
CXXFLAGS_clang=	-Wno-c++11-narrowing

OPTIONS_DEFINE=	LIBESMTP LIBCURL LIBLUA MYSQL DOCS
OPTIONS_DEFAULT=	LIBESMTP
OPTIONS_SUB=
LIBESMTP_DESC=	Install libesmtp for SMTP support
LIBCURL_DESC=	Install libcurl for Clickatell SMS support
LIBLUA_DESC=	Install liblua for scripting
MYSQL_DESC=	Install libmysql for logging & persist

LIBESMTP_CFLAGS=	-lesmtp
LIBESMTP_CONFIGURE_ENABLE=	smtp
LIBESMTP_LIB_DEPENDS=	libesmtp.so:mail/libesmtp
LIBCURL_CONFIGURE_WITH=	libcurl
LIBCURL_LIB_DEPENDS=	libcurl.so:ftp/curl
# autoreconf needs that anyway.
LIBCURL_BUILD_DEPENDS_OFF=	${LOCALBASE}/share/aclocal/libcurl.m4:ftp/curl
LIBLUA_CONFIGURE_WITH=	lua
LIBLUA_USES=	lua
LIBLUA_CFLAGS=	-I${LUA_INCDIR}
LIBLUA_LDFLAGS=	-L${LUA_LIBDIR}
MYSQL_CONFIGURE_ON=	--with-mysql=${LOCALBASE}/bin/mysql_config
MYSQL_CONFIGURE_OFF=	--without-mysql
MYSQL_USES=	mysql
MYSQL_VARS=		IGNORE_WITH_MYSQL="80 81"

PORTDOCS=	*

PLIST_FILES=	bin/linknx

USE_RC_SUBR=	${PORTNAME}

post-patch:
	${REINPLACE_CMD} "s/LUAPC=lua/LUAPC=lua-${LUA_VER}/" ${WRKSRC}/configure.ac
	cd ${WRKSRC} && ${TOUCH} NEWS README AUTHORS

.include <bsd.port.mk>
