PORTNAME=	wild
DISTVERSION=	0.11.0
CATEGORIES=	devel

MAINTAINER=	siva@FreeBSD.org
COMMENT=	Very fast linker
WWW=		https://github.com/wild-linker/wild

LICENSE=		APACHE20 MIT
LICENSE_COMB=		dual
LICENSE_FILE_APACHE20=	${WRKSRC}/LICENSE-APACHE
LICENSE_FILE_MIT=	${WRKSRC}/LICENSE-MIT

LIB_DEPENDS=	libzstd.so:archivers/zstd

USES=		cargo
USE_GITHUB=	yes
GH_ACCOUNT=	wild-linker

CARGO_INSTALL_PATH=	wild

PLIST_FILES=	bin/ld.wild \
		bin/wild

post-install:
	cd ${STAGEDIR}${PREFIX}/bin && ${LN} -sf wild ld.wild

.include <bsd.port.mk>
