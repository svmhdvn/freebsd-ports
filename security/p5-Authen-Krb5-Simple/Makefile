PORTNAME=	Authen-Krb5-Simple
PORTVERSION=	0.43
CATEGORIES=	security perl5
MASTER_SITES=	CPAN
PKGNAMEPREFIX=	p5-

MAINTAINER=	hrs@FreeBSD.org
COMMENT=	User/password authentication using Kerberose 5
WWW=		https://metacpan.org/release/Authen-Simple-Kerberos

LICENSE=	ART10 GPLv1+
LICENSE_COMB=	dual

USES=		gssapi perl5 ssl
USE_PERL5=	configure
CONFIGURE_ENV=	GSSAPIBASEDIR="${GSSAPIBASEDIR}" HAVE_HEIMDAL=1

post-build:
	${STRIP_CMD} ${WRKSRC}/blib/arch/auto/Authen/Krb5/Simple/Simple.so

.include <bsd.port.mk>
