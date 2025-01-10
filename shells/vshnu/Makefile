PORTNAME=	vshnu
PORTVERSION=	1.0500
CATEGORIES=	shells perl5
MASTER_SITES=	http://www.cs.indiana.edu/~kinzler/${PORTNAME}/

MAINTAINER=	ports@FreeBSD.org
COMMENT=	New Visual Shell
WWW=		https://www.cs.indiana.edu/~kinzler/vshnu/

LICENSE=	GPLv2+
LICENSE_FILE=	${WRKSRC}/COPYING

BUILD_DEPENDS=	${_BUILD_RUN_DEPENDS}
RUN_DEPENDS=	${_BUILD_RUN_DEPENDS}

USES=		perl5 shebangfix tar:tgz
USE_PERL5=	configure
SHEBANG_FILES=	*.pl
NO_ARCH=	yes

_BUILD_RUN_DEPENDS=	p5-Term-Screen>=0:devel/p5-Term-Screen

.include <bsd.port.mk>
