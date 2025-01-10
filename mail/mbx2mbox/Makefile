PORTNAME=	mbx2mbox
PORTVERSION=	0.34
PORTREVISION=	1
CATEGORIES=	mail
MASTER_SITES=	SF

MAINTAINER=	ports@FreeBSD.org
COMMENT=	MS Outlook Express .mbx to mbox file converter
WWW=		http://mbx2mbox.sourceforge.net/

BUILD_DEPENDS=	${_BUILD_RUN_DEPENDS}
RUN_DEPENDS=	${_BUILD_RUN_DEPENDS}

USES=		perl5
USE_PERL5=	configure

_BUILD_RUN_DEPENDS=	p5-Date-Manip>=0:devel/p5-Date-Manip

.include <bsd.port.mk>
