PORTNAME=	trafshow
PORTVERSION=	5.2.3
PORTREVISION=	4
PORTEPOCH=	1
CATEGORIES=	net
MASTER_SITES=	https://src.fedoraproject.org/rpms/trafshow/blob/f32/f/ \
		http://gentoo.osuosl.org/distfiles/ \
		ftp://ftp.iij.ad.jp/pub/linux/gentoo/distfiles/0a/

MAINTAINER=	portmaster@BSDforge.com
COMMENT=	Full screen visualization of network traffic
WWW=		https://BSDforge.com/projects/net/trafshow

LICENSE=	BSD2CLAUSE

USES=		ncurses tar:tgz
GNU_CONFIGURE=	yes
CONFIGURE_ENV=	PTHREAD_LIBS="-lpthread"
ALL_TARGET=	trafshow

OPTIONS_DEFINE=	IPV6
IPV6_CFLAGS=	-DINET6

post-patch:
	@${REINPLACE_CMD} -e 's|-D_THREAD_SAFE||' ${WRKSRC}/configure
	@${REINPLACE_CMD} -e 's|/etc|${PREFIX}/etc|' \
		${WRKSRC}/colormask.c ${WRKSRC}/trafshow.1 ${WRKSRC}/trafshow.c

do-install:
	${INSTALL_PROGRAM} ${WRKSRC}/trafshow ${STAGEDIR}${PREFIX}/bin
	${INSTALL_MAN} ${WRKSRC}/trafshow.1 ${STAGEDIR}${PREFIX}/share/man/man1
	${INSTALL_DATA} ${WRKSRC}/.trafshow ${STAGEDIR}${PREFIX}/etc/trafshow.dist

.include <bsd.port.mk>
