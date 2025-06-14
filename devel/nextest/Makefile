PORTNAME=	nextest
DISTVERSIONPREFIX=	cargo-nextest-
DISTVERSION=	0.9.124
PORTREVISION=	1
CATEGORIES=	devel

MAINTAINER=	yuri@FreeBSD.org
COMMENT=	Next-generation test runner for Rust
WWW=		https://nexte.st \
		https://github.com/nextest-rs/nextest

LICENSE=	APACHE20 MIT
LICENSE_COMB=	dual
LICENSE_FILE_APACHE20=	${WRKSRC}/LICENSE-APACHE
LICENSE_FILE_MIT=	${WRKSRC}/LICENSE-MIT

LIB_DEPENDS=	libzstd.so:archivers/zstd

USES=		cargo ssl

USE_GITHUB=	yes
GH_ACCOUNT=	nextest-rs

RUSTFLAGS=	${ARCH:S/i386/YES/:C/^[a-z].*//:S/YES/-C target-feature=+sse,+sse2/} # add sse sse2 target-features only on i386

PROGS=		cargo-nextest \
		cargo-nextest-dup \
		passthrough

PLIST_FILES=	${PROGS:S/^/bin\//}

do-install:
	# workaround for error: found a virtual manifest at `xx` instead of a package manifest
.for p in ${PROGS}
	${INSTALL_PROGRAM} \
		${WRKDIR}/target/release/${p} \
		${STAGEDIR}${PREFIX}/bin
.endfor

do-test:
	${CARGO_CARGO_RUN} nextest run --all-features ${CARGO_TEST_ARGS}

.include <bsd.port.mk>
