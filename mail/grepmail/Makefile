PORTNAME=	grepmail
PORTVERSION=	5.3033
PORTREVISION=	1
CATEGORIES=	mail
MASTER_SITES=	SF

MAINTAINER=	ports@FreeBSD.org
COMMENT=	Search mailboxes for a given regexp and display matching emails
WWW=		http://grepmail.sourceforge.net/

BR_DEPENDS=	p5-TimeDate>=0:devel/p5-TimeDate \
		p5-Date-Manip>=0:devel/p5-Date-Manip \
		p5-Mail-Mbox-MessageParser>=0:mail/p5-Mail-Mbox-MessageParser
BUILD_DEPENDS=	${BR_DEPENDS}
RUN_DEPENDS=	${BR_DEPENDS}

USES=		perl5
USE_PERL5=	configure

.include <bsd.port.mk>
