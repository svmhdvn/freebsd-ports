PORTNAME=	sqlitemanager
PORTVERSION=	1.2.4
PORTREVISION=	1
CATEGORIES=	databases www
MASTER_SITES=	SF
DISTNAME=	SQliteManager-${PORTVERSION}

MAINTAINER=	ports@FreeBSD.org
COMMENT=	Multilingual web based tool to manage SQLite database
WWW=		https://www.sqlitemanager.org/

LICENSE=	GPLv2

WRKSRC=		${WRKDIR}/SQLiteManager-${PORTVERSION}
USES=		cpe dos2unix php
NO_BUILD=	yes
PLIST_SUB+=	WWWDIR_REL="${WWWDIR_REL}"
USE_PHP=	sqlite3
EXTRACT_AFTER_ARGS=--exclude TODO

do-install:
	${MKDIR} ${STAGEDIR}${WWWDIR}
	${CP} -Rp ${WRKSRC}/ ${STAGEDIR}${WWWDIR}

.include <bsd.port.mk>
