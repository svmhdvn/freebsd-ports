PORTNAME=	buck2
DISTVERSION=	2025-08-15
CATEGORIES=	devel

MAINTAINER=	me@svmhdvn.name
COMMENT=	Build system, successor to Buck
WWW=		https://buck2.build

LICENSE=		APACHE20 MIT
LICENSE_COMB=		dual
LICENSE_FILE_APACHE20=	${WRKSRC}/LICENSE-APACHE
LICENSE_FILE_MIT=	${WRKSRC}/LICENSE-MIT

LIB_DEPENDS=	libzstd.so:archivers/zstd

USES=		cargo sqlite

USE_GITHUB=	yes
GH_ACCOUNT=	facebook

CARGO_INSTALL_PATH=	app/buck2

.include <bsd.port.mk>
