PORTNAME=	chan_sccp
DISTVERSIONPREFIX=	v
DISTVERSION=	4.3.3
PORTREVISION=	2
CATEGORIES=	net
PKGNAMEPREFIX=	asterisk-

MAINTAINER=	ddegroot@talon.nl
COMMENT=	Replacement for the SCCP channel driver in Asterisk
WWW=		https://sourceforge.net/projects/chan-sccp-b/

LICENSE=	GPLv1
LICENSE_FILE=	${WRKSRC}/COPYING

FLAVORS=	asterisk18
FLAVOR?=	${FLAVORS:[1]}

LIB_DEPENDS=	libltdl.so:devel/libltdl

USES=		autoreconf:2.69 compiler:c11 gettext-tools iconv libtool \
		localbase ssl

USE_GITHUB=	yes
GH_ACCOUNT=	chan-sccp
GH_PROJECT=	chan-sccp

GNU_CONFIGURE=	yes
CONFIGURE_ARGS=	--enable-advanced-functions \
		--with-hash-size=3001 \
		${ICONV_CONFIGURE_ARG}
INSTALL_TARGET=	install-strip

CPPFLAGS+=	-I${ICONV_INCLUDE_PATH}
LDFLAGS+=	-L${LOCALBASE}/lib \
		${ICONV_LIB}

PLIST_FILES=	etc/asterisk/sccp.conf.annotated \
		"@sample etc/asterisk/sccp.conf.sample" \
		lib/asterisk/modules/chan_sccp.so \
		share/asterisk/documentation/thirdparty/chan_sccp-en_US.xml

asterisk18_PKGNAMEPREFIX=	asterisk18-
asterisk18_CONFLICTS_INSTALL=	asterisk13-chan_sccp asterisk16-chan_sccp
asterisk18_BUILD_DEPENDS=	asterisk:net/asterisk18
asterisk18_RUN_DEPENDS=		asterisk:net/asterisk18

OPTIONS_DEFINE=			CONFERENCE VIDEO
OPTIONS_DEFAULT=		CONFERENCE VIDEO
CONFERENCE_DESC=		Enable Conference Support
VIDEO_DESC=			Enable Video Support

CONFERENCE_CONFIGURE_ENABLE=	conference
VIDEO_CONFIGURE_ENABLE=		video

.if ${FLAVOR} == asterisk18
CONFIGURE_ARGS+=		--with-asterisk-version=18
.endif

post-install:
	@${MKDIR} ${STAGEDIR}${PREFIX}/etc/asterisk
	${INSTALL_DATA} ${WRKSRC}/conf/sccp.conf \
		${STAGEDIR}${PREFIX}/etc/asterisk/sccp.conf.sample
	${INSTALL_DATA} ${WRKSRC}/conf/sccp.conf.annotated \
		${STAGEDIR}${PREFIX}/etc/asterisk

.include <bsd.port.mk>
