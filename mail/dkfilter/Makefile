PORTNAME=	dkfilter
PORTVERSION=	0.11
PORTREVISION=	1
CATEGORIES=	mail
MASTER_SITES=	http://jason.long.name/dkfilter/

MAINTAINER=	ports@FreeBSD.org
COMMENT=	Domainkeys filter for Postfix
WWW=		http://jason.long.name/dkfilter/

LICENSE=	GPLv2
LICENSE_FILE=	${WRKSRC}/COPYING

BUILD_DEPENDS=	${_BUILD_RUN_DEPENDS}
RUN_DEPENDS=	${_BUILD_RUN_DEPENDS}

GNU_CONFIGURE=	yes
USES=		perl5
USE_RC_SUBR=	dkfilter_in dkfilter_out
NO_ARCH=	yes

USERS=		${DKFILTER_USERNAME}
GROUPS=		${DKFILTER_GROUPNAME}

DKFILTER_USERNAME?=	dkfilter
DKFILTER_GROUPNAME?=	${DKFILTER_USERNAME}

_BUILD_RUN_DEPENDS=	p5-Crypt-OpenSSL-RSA>=0:security/p5-Crypt-OpenSSL-RSA \
			p5-Mail-Tools>=0:mail/p5-Mail-Tools \
			p5-Net-DNS>=0:dns/p5-Net-DNS \
			p5-Net-Server>=0:net/p5-Net-Server

.include <bsd.port.mk>
