PORTNAME=	pnews
PORTVERSION=	2.6.6
PORTREVISION=	1
PORTEPOCH=	1
CATEGORIES=	www news
MASTER_SITES=	SF/${PORTNAME}/${PORTNAME}/v${PORTVERSION}
DISTNAME=	${PORTNAME}${PORTVERSION:S/.//g}

MAINTAINER=	ports@FreeBSD.org
COMMENT=	PHP Web-based News Reader
WWW=		https://pnews.sourceforge.net/

LICENSE=	GPLv2+

USES=		php tar:tgz
NO_BUILD=	yes

PNEWSDIR?=	www/pnews
PNEWSFULLDIR=	${PREFIX}/${PNEWSDIR}
PLIST_SUB+=	PNEWSDIR="${PNEWSDIR}"

post-extract:
	${FIND} ${WRKSRC} -type d -name .svn | ${XARGS} ${RM} -r

do-install:
	@${MKDIR} ${STAGEDIR}${PNEWSFULLDIR}
	(cd ${WRKSRC} && ${COPYTREE_SHARE} . ${STAGEDIR}${PNEWSFULLDIR})

.include <bsd.port.mk>
