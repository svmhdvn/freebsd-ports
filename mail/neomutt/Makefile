PORTNAME=	neomutt
PORTVERSION=	20240425
PORTREVISION=	1
CATEGORIES=	mail

MAINTAINER=	bapt@FreeBSD.org
COMMENT=	Bringing together all the Mutt Code
WWW=		https://neomutt.org

LICENSE=	GPLv2
LICENSE_FILE=	${WRKSRC}/LICENSE.md

RUN_DEPENDS=	${LOCALBASE}/etc/mime.types:misc/mime-support \
		urlview:textproc/urlview
LIB_DEPENDS=	libpcre2-posix.so:devel/pcre2

USES=		cpe iconv:translit localbase ncurses perl5 pkgconfig python:env shebangfix ssl

USE_GITHUB=	yes
USE_PERL5=	build
MAKE_JOBS_UNSAFE=	yes

HAS_CONFIGURE=	yes

OPTIONS_SUB=	yes
SHEBANG_FILES=	contrib/smime_keys \
		contrib/oauth2/mutt_oauth2.py \
		data/account-command/macos-keychain/keychain.py

OPTIONS_DEFINE=	DOCS FLOCK GPGME GSSAPI IDN NLS NOTMUCH SASL
OPTIONS_DEFAULT=SASL TOKYOCABINET NOTMUCH GPGME LMDB NCURSES
OPTIONS_MULTI=	HCACHE
OPTIONS_MULTI_HCACHE=	BDB GDBM KYOTOCABINET LMDB QDBM TOKYOCABINET

FLOCK_DESC=	Use flock() to lock files
GPGME_DESC=	Use gpgme to handle pgp
NOTMUCH_DESC=	Use notmuch for tagging and searching
HCACHE_DESC=	Header-cache backend
KYOTOCABINET_DESC=	Kyoto Cabinet support
LMDB_DESC=		Lightning Memory-Mapped Database support
QDBM_DESC=		Quick DataBase Manager support
TOKYOCABINET_DESC=	Tokyo Cabinet support
SCREEN_DESC=	Screen options

CONFIGURE_ARGS=	--with-ssl="${OPENSSLBASE}" \
		--locales-fix \
		--fmemopen \
		--pcre2 \
		--disable-idn \
		--prefix=${PREFIX} \
		${ICONV_CONFIGURE_ARGS}
CONFIGURE_ENV=	CC_FOR_BUILD="${CC}"

# Header cache
BDB_CONFIGURE_ON=		--bdb
BDB_USES=			bdb
GDBM_CONFIGURE_ON=		--gdbm
GDBM_LIB_DEPENDS=		libgdbm.so:databases/gdbm
KYOTOCABINET_CONFIGURE_ON=	--kyotocabinet
KYOTOCABINET_LIB_DEPENDS=	libkyotocabinet.so:databases/kyotocabinet
LMDB_CONFIGURE_ON=		--lmdb
LMDB_LIB_DEPENDS=		liblmdb.so:databases/lmdb
QDBM_CONFIGURE_ON=		--qdbm
QDBM_LIB_DEPENDS=		libqdbm.so:databases/qdbm
TOKYOCABINET_CONFIGURE_ON=	--tokyocabinet
TOKYOCABINET_LIB_DEPENDS=	libtokyocabinet.so:databases/tokyocabinet

NLS_CONFIGURE_ENABLE=	nls
NLS_USES=		gettext

IDN_LIB_DEPENDS=	libidn2.so:dns/libidn2
IDN_CONFIGURE_ON=	--idn2

FLOCK_CONFIGURE_ON=	--with-lock=flock

SASL_LIB_DEPENDS=	libsasl2.so:security/cyrus-sasl2
SASL_CONFIGURE_ON=	--sasl

GPGME_LIB_DEPENDS=	libgpgme.so:security/gpgme \
			libassuan.so:security/libassuan \
			libgpg-error.so:security/libgpg-error
GPGME_CONFIGURE_ENABLE=	gpgme

NOTMUCH_LIB_DEPENDS=	libnotmuch.so:mail/notmuch
NOTMUCH_CONFIGURE_ENABLE=	notmuch

GSSAPI_USES=		gssapi
GSSAPI_CONFIGURE_ON=	--gss --with-gss=${GSSAPIBASEDIR} ${GSSAPI_CONFIGURE_ARGS}
GSSAPI_CONFIGURE_OFF=	--disable-gss

DOCS_CONFIGURE_OFF=	--disable-doc
DOCS_BUILD_DEPENDS=	xsltproc:textproc/libxslt \
			${LOCALBASE}/share/xsl/docbook/html/docbook.xsl:textproc/docbook-xsl \
			lynx:www/lynx

post-install:
	${RM} ${STAGEDIR}${PREFIX}/etc/mime*
	${MV} ${STAGEDIR}${PREFIX}/etc/neomuttrc ${STAGEDIR}${PREFIX}/etc/neomuttrc.dist
	${STRIP_CMD} ${STAGEDIR}${PREFIX}/bin/neomutt \
		${STAGEDIR}${PREFIX}/libexec/neomutt/pgpewrap

.include <bsd.port.mk>
