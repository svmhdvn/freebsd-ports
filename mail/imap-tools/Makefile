PORTNAME=	imap-tools
DISTVERSION=	1.6.1
CATEGORIES=	mail
MASTER_SITES=	CRATESIO
DISTFILES=	${CARGO_DIST_SUBDIR}/${DISTNAME}${CARGO_CRATE_EXT}

MAINTAINER=	mat@FreeBSD.org
COMMENT=	A collection of tools to manipulate IMAP mailboxes
WWW=		https://gitlab.com/mat813/imap-tools-rs

LICENSE=	MIT

USES=		cargo

CARGO_FEATURES=	--no-default-features rustls

PLIST_FILES=	bin/imap-tools

OPTIONS_DEFINE=	RATATUI
OPTIONS_DEFAULT=	RATATUI

RATATUI_DESC=	Display nice curses listings using ratatui
RATATUI_VARS=	CARGO_FEATURES+=ratatui

# make cargo-crates > Makefile.crates

.include <bsd.port.mk>
