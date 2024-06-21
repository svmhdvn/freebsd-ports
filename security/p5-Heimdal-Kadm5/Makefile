PORTNAME=	Heimdal-Kadm5
PORTVERSION=	0.08
CATEGORIES=	security perl5
MASTER_SITES=	CPAN
PKGNAMEPREFIX=	p5-
#DISTNAME=	Krb5-${PORTVERSION}

MAINTAINER=	hrs@FreeBSD.org
COMMENT=	Perl extension for Heimdal administrative client library
WWW=		https://metacpan.org/release/Heimdal-Kadm5

USES=		gssapi perl5
USE_PERL5=	configure
CONFIGURE_ENV=	GSSAPIBASEDIR="${GSSAPIBASEDIR}"

post-build:
	${STRIP_CMD} ${WRKSRC}/blib/arch/auto/Heimdal/Kadm5/Kadm5.so

.include <bsd.port.mk>
