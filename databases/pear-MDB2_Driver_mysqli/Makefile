PORTNAME=	MDB2_Driver_mysqli
DISTVERSION=	1.5.0b4
PORTREVISION=	1
CATEGORIES=	databases www pear

MAINTAINER=	sunpoet@FreeBSD.org
COMMENT=	PEAR MySQL MDB2 driver
WWW=		https://pear.php.net/package/MDB2_Driver_mysqli

LICENSE=	BSD3CLAUSE

BUILD_DEPENDS=	${PEAR_PKGNAMEPREFIX}MDB2>=0:databases/pear-MDB2@${PHP_FLAVOR}
RUN_DEPENDS:=	${BUILD_DEPENDS}

NO_ARCH=	yes
USES=		pear php
USE_PHP=	mysqli

.include <bsd.port.mk>
