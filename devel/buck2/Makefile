PORTNAME=	buck2
DISTVERSION=	g20260220
CATEGORIES=	devel

MAINTAINER=	siva@FreeBSD.org
COMMENT=	Build system, successor to Buck
WWW=		https://buck2.build

PATCH_SITES=	https://patch-diff.githubusercontent.com/raw/facebook/buck2/pull/
PATCHFILES=	1093.patch:-p1

LICENSE=		APACHE20 MIT
LICENSE_COMB=		dual
LICENSE_FILE_APACHE20=	${WRKSRC}/LICENSE-APACHE
LICENSE_FILE_MIT=	${WRKSRC}/LICENSE-MIT

BUILD_DEPENDS=	protoc:devel/protobuf \
		rust-nightly>0:lang/rust-nightly
LIB_DEPENDS=	libzstd.so:archivers/zstd

USES=		cargo sqlite

USE_GITHUB=	yes
GH_ACCOUNT=	facebook
GH_TAGNAME=	5854c3bd3882f646ba1aa447d348767bb199d040

CARGO_BUILDDEP=		no
CARGO_INSTALL_PATH=	app/buck2
CARGO_ENV+=		BUCK2_BUILD_PROTOC=${LOCALBASE}/bin/protoc \
			BUCK2_BUILD_PROTOC_INCLUDE=${LOCALBASE}/include

.include <bsd.port.mk>
