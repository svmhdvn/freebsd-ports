PORTNAME=	Authen-Krb5
PORTVERSION=	1.9
PORTREVISION=	2
CATEGORIES=	security perl5
MASTER_SITES=	CPAN
PKGNAMEPREFIX=	p5-
DISTNAME=	Krb5-${PORTVERSION}

MAINTAINER=	perl@FreeBSD.org
COMMENT=	Perl extension for Kerberos 5
WWW=		https://metacpan.org/release/Krb5

USES=		gssapi perl5
USE_PERL5=	configure
CONFIGURE_ENV=	GSSAPIBASEDIR="${GSSAPIBASEDIR}" HAVE_HEIMDAL=1

post-extract:
	${INSTALL_DATA} ${FILESDIR}/krb5-heimdal-compat.h ${WRKSRC}

post-install:
	${STRIP_CMD} ${STAGEDIR}${PREFIX}/${SITE_ARCH_REL}/auto/Authen/Krb5/Krb5.so

.include <bsd.port.mk>
