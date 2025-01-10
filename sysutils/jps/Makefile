PORTNAME=	jps
PORTVERSION=	1.0
PORTREVISION=	1
CATEGORIES=	sysutils
MASTER_SITES=	http://ext.by/jps/

MAINTAINER=	pavel@ext.by
COMMENT=	Wrapper to ps(1) that maps pids to jails
WWW=		http://ext.by/jps/

BUILD_DEPENDS=	${_BUILD_RUN_DEPENDS}
RUN_DEPENDS=	${_BUILD_RUN_DEPENDS}

CONFLICTS_INSTALL=	openjdk*

USES=		perl5 shebangfix
PLIST_FILES=	bin/jps share/man/man1/jps.1.gz
SHEBANG_FILES=	jps.pl

_BUILD_RUN_DEPENDS=	p5-Term-ReadKey>=0:devel/p5-Term-ReadKey

.include <bsd.port.mk>
