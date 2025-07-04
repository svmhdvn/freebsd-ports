PORTNAME=	jwt-cli
PORTVERSION=	6.2.0
PORTREVISION=	5
CATEGORIES=	www

MAINTAINER=	osa@FreeBSD.org
COMMENT=	Super fast CLI tool to decode and encode JWTs
WWW=		https://github.com/mike-engel/jwt-cli

LICENSE=	MIT
LICENSE_FILE=	${WRKSRC}/LICENSE.md

USES=	cargo
USE_GITHUB=	yes
GH_ACCOUNT=	mike-engel

CARGO_CRATES=	aho-corasick-0.7.19 \
		android-tzdata-0.1.1 \
		android_system_properties-0.1.5 \
		anstream-0.6.7 \
		anstyle-1.0.8 \
		anstyle-parse-0.2.0 \
		anstyle-query-1.0.0 \
		anstyle-wincon-3.0.1 \
		atty-0.2.14 \
		autocfg-1.1.0 \
		base64-0.21.7 \
		bitflags-1.3.2 \
		bumpalo-3.11.1 \
		bunt-0.2.8 \
		bunt-macros-0.2.8 \
		cc-1.0.83 \
		cfg-if-1.0.0 \
		chrono-0.4.38 \
		clap-3.2.25 \
		clap-4.5.21 \
		clap_builder-4.5.21 \
		clap_complete-3.2.5 \
		clap_complete-4.5.38 \
		clap_complete_nushell-4.5.4 \
		clap_derive-4.5.18 \
		clap_generate-3.0.3 \
		clap_lex-0.2.4 \
		clap_lex-0.7.0 \
		codespan-reporting-0.11.1 \
		colorchoice-1.0.0 \
		core-foundation-sys-0.8.3 \
		cxx-1.0.80 \
		cxx-build-1.0.80 \
		cxxbridge-flags-1.0.80 \
		cxxbridge-macro-1.0.80 \
		fuchsia-cprng-0.1.1 \
		getrandom-0.2.12 \
		hashbrown-0.12.3 \
		heck-0.5.0 \
		hermit-abi-0.1.19 \
		iana-time-zone-0.1.51 \
		iana-time-zone-haiku-0.1.1 \
		indexmap-1.9.3 \
		itoa-1.0.4 \
		js-sys-0.3.60 \
		jsonwebtoken-9.2.0 \
		lazy_static-1.4.0 \
		libc-0.2.152 \
		link-cplusplus-1.0.7 \
		litrs-0.2.3 \
		log-0.4.17 \
		memchr-2.5.0 \
		num-0.2.1 \
		num-bigint-0.2.6 \
		num-bigint-0.4.3 \
		num-complex-0.2.4 \
		num-integer-0.1.45 \
		num-iter-0.1.43 \
		num-rational-0.2.4 \
		num-traits-0.2.15 \
		once_cell-1.15.0 \
		os_str_bytes-6.6.1 \
		parse_duration-2.1.1 \
		pem-3.0.3 \
		proc-macro2-1.0.78 \
		quote-1.0.26 \
		rand-0.4.6 \
		rand_core-0.3.1 \
		rand_core-0.4.2 \
		rdrand-0.4.0 \
		regex-1.6.0 \
		regex-syntax-0.6.27 \
		remove_dir_all-0.5.3 \
		ring-0.17.7 \
		ryu-1.0.11 \
		scratch-1.0.2 \
		serde-1.0.147 \
		serde_derive-1.0.147 \
		serde_json-1.0.99 \
		simple_asn1-0.6.2 \
		spin-0.9.8 \
		strsim-0.11.0 \
		syn-1.0.103 \
		syn-2.0.10 \
		tempdir-0.3.7 \
		termcolor-1.1.3 \
		textwrap-0.16.1 \
		thiserror-1.0.37 \
		thiserror-impl-1.0.37 \
		time-0.3.17 \
		time-core-0.1.0 \
		time-macros-0.2.6 \
		unicode-ident-1.0.5 \
		unicode-width-0.1.10 \
		unicode-xid-0.2.4 \
		untrusted-0.9.0 \
		utf8parse-0.2.1 \
		wasi-0.11.0+wasi-snapshot-preview1 \
		wasm-bindgen-0.2.83 \
		wasm-bindgen-backend-0.2.83 \
		wasm-bindgen-macro-0.2.83 \
		wasm-bindgen-macro-support-0.2.83 \
		wasm-bindgen-shared-0.2.83 \
		winapi-0.3.9 \
		winapi-i686-pc-windows-gnu-0.4.0 \
		winapi-util-0.1.5 \
		winapi-x86_64-pc-windows-gnu-0.4.0 \
		windows-sys-0.48.0 \
		windows-targets-0.48.0 \
		windows-targets-0.52.0 \
		windows_aarch64_gnullvm-0.48.0 \
		windows_aarch64_gnullvm-0.52.0 \
		windows_aarch64_msvc-0.48.0 \
		windows_aarch64_msvc-0.52.0 \
		windows_i686_gnu-0.48.0 \
		windows_i686_gnu-0.52.0 \
		windows_i686_msvc-0.48.0 \
		windows_i686_msvc-0.52.0 \
		windows_x86_64_gnu-0.48.0 \
		windows_x86_64_gnu-0.52.0 \
		windows_x86_64_gnullvm-0.48.0 \
		windows_x86_64_gnullvm-0.52.0 \
		windows_x86_64_msvc-0.48.0 \
		windows_x86_64_msvc-0.52.0

PLIST_FILES=	bin/jwt

.include <bsd.port.mk>
