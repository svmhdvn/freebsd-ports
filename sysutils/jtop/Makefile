PORTNAME=	jtop
PORTVERSION=	1.0
PORTREVISION=	1
CATEGORIES=	sysutils
MASTER_SITES=	http://ext.by/jtop/

MAINTAINER=	pavel@ext.by
COMMENT=	Wrapper to top(1) that maps pids to jails
WWW=		http://ext.by/jtop/

BUILD_DEPENDS=	${_BUILD_RUN_DEPENDS}
RUN_DEPENDS=	${_BUILD_RUN_DEPENDS}

USES=		perl5 shebangfix
PLIST_FILES=	bin/jtop share/man/man1/jtop.1.gz
SHEBANG_FILES=	jtop.pl

_BUILD_RUN_DEPENDS=	p5-Term-ReadKey>=0:devel/p5-Term-ReadKey

.include <bsd.port.mk>
