PORTNAME=	klong
DISTVERSION=	20221212
CATEGORIES=	lang
MASTER_SITES=	https://t3x.org/klong/
DISTNAME=	${PORTNAME}${DISTVERSION}

MAINTAINER=	me@svmhdvn.name
COMMENT=	Simple Array Language
WWW=		https://t3x.org/klong/

LICENSE=	CC0-1.0
LICENSE_FILE=	${WRKSRC}/LICENSE

USES=		tar:tgz

WRKSRC=		${WRKDIR}/${PORTNAME}

TEST_TARGET=	test

post-patch:
	${REINPLACE_CMD} 's,%%DATADIR%%,${DATADIR},g' ${WRKSRC}/kg.c

do-install:
	${INSTALL_PROGRAM} ${WRKSRC}/kg ${STAGEDIR}${PREFIX}/bin
	${MKDIR} ${STAGEDIR}${DATADIR}/lib
	(cd ${WRKSRC}/lib && ${COPYTREE_SHARE} . ${STAGEDIR}${DATADIR}/lib)

.include <bsd.port.mk>
