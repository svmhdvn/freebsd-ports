PORTNAME=	mtop
PORTVERSION=	0.6.6
PORTREVISION=	6
CATEGORIES=	databases
MASTER_SITES=	SF/${PORTNAME}/${PORTNAME}/v${PORTVERSION}

MAINTAINER=	ports@FreeBSD.org
COMMENT=	MySQL Monitoring Tool
WWW=		https://mtop.sourceforge.net/

LICENSE=	GPLv2
LICENSE_FILE=	${WRKSRC}/COPYING

BUILD_DEPENDS=	${_BUILD_RUN_DEPENDS}
RUN_DEPENDS=	${_BUILD_RUN_DEPENDS}

NO_ARCH=	yes
USES=		mysql perl5
USE_PERL5=	configure

_BUILD_RUN_DEPENDS=	p5-Curses>=0:devel/p5-Curses \
			${DBD_MYSQL}

post-patch:
	${RM} ${WRKSRC}/cpan2spec.pl

.include <bsd.port.mk>
