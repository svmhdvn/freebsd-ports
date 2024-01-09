PORTNAME=	dovecot-pigeonhole
PORTVERSION=	0.5.21
CATEGORIES=	mail
MASTER_SITES=	http://pigeonhole.dovecot.org/releases/${DOVECOTVERSION}/
DISTNAME=	${PORTNAME:C/-/-${DOVECOTVERSION}-/}-${PORTVERSION}

MAINTAINER=	ler@FreeBSD.org
COMMENT=	Sieve plugin for the Dovecot 'deliver' LDA and LMTP
WWW=		https://wiki2.dovecot.org/Pigeonhole

LICENSE=	LGPL21

BUILD_DEPENDS=	dovecot>=2.3.9:mail/dovecot
RUN_DEPENDS=	dovecot>=2.3.9:mail/dovecot

DOVECOTVERSION=	2.3

GNU_CONFIGURE=	yes
CONFIGURE_ARGS=	--exec-prefix=${PREFIX} \
		--docdir=${DOCSDIR} \
		--with-dovecot="${LOCALBASE}/lib/dovecot"
LDFLAGS+=	-L${LOCALBASE}/lib
INSTALL_TARGET=	install-strip
USES=		compiler:c11 libtool ssl
USE_LDCONFIG=	${PREFIX}/lib/dovecot

OPTIONS_DEFINE=	DOCS GSSAPI LDAP MANAGESIEVE
OPTIONS_DEFAULT=MANAGESIEVE

OPTIONS_SUB=	yes

GSSAPI_DESC=		GSSAPI Support (*MUST MATCH* mail/dovecot)
GSSAPI_USES=		gssapi
GSSAPI_CONFIGURE_ON=	${GSSAPI_CONFIGURE_ARGS}

BUILD_FAIL_MESSAGE=	Ensure that ${PORTNAME}'s GSSAPI backend is the same as dovecot2 (make config).

MANAGESIEVE_DESC=		ManageSieve support
MANAGESIEVE_CONFIGURE_WITH=	managesieve

LDAP_CONFIGURE_WITH=	ldap
LDAP_CPPFLAGS=		-I${LOCALBASE}/include
LDAP_LDFLAGS=		-L${LOCALBASE}/lib
LDAP_USES=		ldap

PORTDOCS=	sieve/extensions/* sieve/plugins/* sieve/locations/*

post-patch:
	@${REINPLACE_CMD} -E '\
	s!^(install-data-am:) install-sieve_docDATA!\1!; \
		s!^(uninstall-am:) uninstall-sieve_docDATA!\1!;' \
		${WRKSRC}/doc/Makefile.in

.include <bsd.port.mk>
