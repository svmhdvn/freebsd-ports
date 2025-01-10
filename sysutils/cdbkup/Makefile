PORTNAME=	cdbkup
PORTVERSION=	1.0
PORTREVISION=	4
CATEGORIES=	sysutils
MASTER_SITES=	SF/${PORTNAME}/${PORTNAME}/release-1-0
DISTNAME=	${PORTNAME}_${PORTVERSION}-1

MAINTAINER=	ports@FreeBSD.org
COMMENT=	Simple but full-featured backup/restore perl scripts (uses gnu tar)
WWW=		https://cdbkup.sourceforge.net/

BR_DEPENDS=	${LOCALBASE}/sbin/eject:sysutils/eject \
		cdrecord:sysutils/cdrtools
BUILD_DEPENDS=	${BR_DEPENDS}
RUN_DEPENDS=	${BR_DEPENDS}

WRKSRC=		${WRKDIR}/${PORTNAME}

GNU_CONFIGURE=	yes
GNU_CONFIGURE_MANPREFIX=${PREFIX}/share
USES=		perl5
CONFIGURE_ENV+=	PATH=${PATH}:${LOCALBASE}/sbin

PORTDOCS=	README TODO COMPLIANCE

OPTIONS_DEFINE=	DOCS

.include <bsd.port.mk>
