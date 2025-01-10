PORTNAME=	Net_LMTP
PORTVERSION=	1.0.2
CATEGORIES=	mail www pear

MAINTAINER=	sunpoet@FreeBSD.org
COMMENT=	PEAR implementation of the RFC2033 LMTP protocol
WWW=		https://pear.php.net/package/Net_LMTP

LICENSE=	PHP301

BUILD_DEPENDS=	${_BUILD_RUN_DEPENDS}
RUN_DEPENDS=	${_BUILD_RUN_DEPENDS}

USES=		pear

_BUILD_RUN_DEPENDS=	${PEARDIR}/Net/Socket.php:net/pear-Net_Socket@${PHP_FLAVOR}

.include <bsd.port.mk>
