PORTNAME=	libucl
DISTVERSION=	0.9.0
CATEGORIES=	textproc devel

MAINTAINER=	bofh@FreeBSD.org
COMMENT=	Universal configuration library parser
WWW=		https://github.com/vstakhov/libucl

LICENSE=	BSD2CLAUSE
LICENSE_FILE=	${WRKSRC}/COPYING

BROKEN_mips=		fails to link: undefined reference to '__sync_add_and_fetch_4'
BROKEN_mips64=		fails to link: undefined reference to '__sync_add_and_fetch_4'

USES=		autoreconf gmake libtool pathfix pkgconfig
USE_GITHUB=	yes
GH_ACCOUNT=	vstakhov
USE_LDCONFIG=	yes

GNU_CONFIGURE=	yes
GNU_CONFIGURE_MANPREFIX=${PREFIX}/share

CONFLICTS_INSTALL=	ucl

INSTALL_TARGET=	install-strip
TEST_TARGET=	check

OPTIONS_DEFINE=		LUA REGEX SIGNATURES URLS UTILS
OPTIONS_DEFAULT=	REGEX UTILS
OPTIONS_SUB=		yes

REGEX_DESC=		Enable regex checking for schema
SIGNATURES_DESC=	Enable signatures checking
URLS_DESC=		Enable fetching URLs
UTILS_DESC=		Enable tools: ucl_chargen, ucl_ucldump, ucl_tool

LUA_CONFIGURE_ENABLE=	lua
LUA_CONFIGURE_ENV=	LUA=${LOCALBASE}/bin/${LUA_CMD}
LUA_LDFLAGS=		-L${LUA_LIBDIR}
LUA_USES=		lua

REGEX_CONFIGURE_ENABLE=	regex

SIGNATURES_CONFIGURE_ENABLE=	signatures
SIGNATURES_CPPFLAGS=		-I${OPENSSLINC}
SIGNATURES_LDFLAGS=		-L${OPENSSLLIB}
SIGNATURES_USES=		ssl

URLS_CONFIGURE_ENABLE=	urls

UTILS_CONFIGURE_ENABLE=	utils

.include <bsd.port.mk>
