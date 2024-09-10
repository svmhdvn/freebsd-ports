######################################################################
# Anytime PORTVERSION changes please bump PORTREVISION of:           #
# - mail/dovecot-pigeonhole. See ports/146029 for an explanation.    #
# - mail/dovecot-fts-flatcurve.                                      #
# - mail/dovecot-fts-xapian.                                         #
# - mail/dovecot-fts-elastic.                                        #
# - mail/dovecot-coi.                                                #
# - mail/dovecot-xaps.                                               #
######################################################################

PORTNAME=	dovecot
DISTVERSION=	2.3.21.1
PORTREVISION=	1
CATEGORIES=	mail
MASTER_SITES=	https://dovecot.org/releases/2.3/

MAINTAINER=	ler@FreeBSD.org
COMMENT=	Secure, fast and powerful IMAP and POP3 server
WWW=		https://www.dovecot.org/

LICENSE=	LGPL21 MIT
LICENSE_COMB=	dual

LIB_DEPENDS=	libzstd.so:archivers/zstd

USES=		cpe iconv libtool pkgconfig ssl
USE_LDCONFIG=	${PREFIX}/lib/${PORTNAME}
USE_RC_SUBR=	${PORTNAME}

GNU_CONFIGURE=	yes
CONFIGURE_ARGS=	--localstatedir=/var \
		--with-docs \
		--with-ssl=openssl \
		--with-statedir=/var/db/${PORTNAME} \
		--with-shadow=no \
		--with-systemd=no

INSTALL_TARGET=	install-strip

CPPFLAGS+=	-I${LOCALBASE}/include -I${OPENSSLINC}
LDFLAGS+=	-L${LOCALBASE}/lib -L${OPENSSLLIB}

SUB_FILES+=	pkg-message
SUB_LIST+=	REQUIRE="${_REQUIRE}"
# Default requirement for dovecot rc script
_REQUIRE=	LOGIN

USERS=		${PORTNAME} dovenull
GROUPS=		${USERS}

DOCS=		AUTHORS COPYING INSTALL NEWS TODO README
PORTDOCS=	*
PORTEXAMPLES=	*

OPTIONS_DEFINE=		GSSAPI LIBSODIUM LIBUNWIND LIBWRAP LUA LZ4 DOCS EXAMPLES
OPTIONS_DEFAULT=	LDAP LIBWRAP

OPTIONS_GROUP=		DB FTS
OPTIONS_GROUP_DB=	CDB LDAP MYSQL PGSQL SQLITE
OPTIONS_GROUP_FTS=	ICU LUCENE SOLR TEXTCAT

OPTIONS_SUB=		yes

CDB_DESC=		CDB database support
DB_DESC=		Database support
FTS_DESC=		Full text search plugins
GSSAPI_DESC=		GSSAPI support
ICU_DESC=		Use libicu for FTS unicode normalization
LIBSODIUM_DESC=		Support libsodium based crypts (ARGON2I/ARGON2ID)
LIBUNWIND_DESC=		Get backtraces using libunwind
LUCENE_DESC=		CLucene FTS support
SOLR_DESC=		Solr FTS support
TEXTCAT_DESC=		Libexttextcat FTS support

CDB_LIB_DEPENDS=		libcdb.so:databases/tinycdb
CDB_CONFIGURE_WITH=		cdb

GSSAPI_USES=			gssapi
GSSAPI_CONFIGURE_ON=		--with-gssapi ${GSSAPI_CONFIGURE_ARGS}
GSSAPI_CONFIGURE_OFF=		--without-gssapi

ICU_LIB_DEPENDS=		libicui18n.so:devel/icu
ICU_CONFIGURE_WITH=		icu

LDAP_USES=			ldap
LDAP_CONFIGURE_WITH=		ldap
LDAP_VARS=			_REQUIRE+=slapd

LIBSODIUM_LIB_DEPENDS=		libsodium.so:security/libsodium
LIBSODIUM_CONFIGURE_WITH=	sodium

LIBUNWIND_LIB_DEPENDS=		libunwind.so:devel/libunwind
LIBUNWIND_CONFIGURE_ON=		--with-libunwind=yes
LIBUNWIND_CONFIGURE_OFF=	--with-libunwind=no

LIBWRAP_CONFIGURE_WITH=		libwrap

LUA_USES=			lua:51,53
LUA_CONFIGURE_WITH=		lua

LUCENE_LIB_DEPENDS=		libclucene-core.so:textproc/clucene
LUCENE_CONFIGURE_WITH=		lucene stemmer

LZ4_LIB_DEPENDS=		liblz4.so:archivers/liblz4
LZ4_CONFIGURE_WITH=		lz4

MYSQL_USES=			mysql
MYSQL_CONFIGURE_WITH=		mysql
MYSQL_VARS=			_REQUIRE+=mysql

PGSQL_USES=			pgsql
PGSQL_CONFIGURE_WITH=		pgsql
PGSQL_VARS=			_REQUIRE+=postgresql

SOLR_LIB_DEPENDS=		libcurl.so:ftp/curl \
				libexpat.so:textproc/expat2
SOLR_CONFIGURE_WITH=		solr

SQLITE_USES=			sqlite
SQLITE_CONFIGURE_WITH=		sqlite

TEXTCAT_LIB_DEPENDS=		libexttextcat-2.0.so:textproc/libexttextcat
TEXTCAT_CONFIGURE_WITH=		textcat

post-patch:
	@${REINPLACE_CMD} -e 's,/etc/dovecot,${ETCDIR},g; \
		s,sysconfdir=/etc,sysconfdir=${PREFIX}/etc,g' \
		${WRKSRC}/doc/example-config/*.conf ${WRKSRC}/doc/example-config/conf.d/* \
		${WRKSRC}/doc/example-config/*.conf.ext
	@${REINPLACE_CMD} -e '/^LIBS =/s/$$/ @LTLIBICONV@/' \
		${WRKSRC}/src/lib-mail/Makefile.in
# Install the sample config files into ETCDIR/example-config/
	@${REINPLACE_CMD} -e '/^exampledir =/s|\$$(docdir)|${ETCDIR}|' \
		${WRKSRC}/doc/example-config/Makefile.in \
		${WRKSRC}/doc/example-config/conf.d/Makefile.in

post-patch-LUA-on:
	@${REINPLACE_CMD} -e '/^libdovecot_lua_la_DEPENDENCIES =/ s|LUA_LIBS|true|' \
		${WRKSRC}/src/lib-lua/Makefile.in

post-install:
	@${MKDIR} ${STAGEDIR}${EXAMPLESDIR}
	${MV} ${STAGEDIR}${DOCSDIR}/dovecot-openssl.cnf ${STAGEDIR}${EXAMPLESDIR}
	${MV} ${STAGEDIR}${DOCSDIR}/mkcert.sh ${STAGEDIR}${EXAMPLESDIR}

post-install-DOCS-on:
	@${MKDIR} ${STAGEDIR}${DOCSDIR}
	(cd ${WRKSRC} && ${INSTALL_DATA} ${DOCS} ${STAGEDIR}${DOCSDIR})

.include <bsd.port.mk>
