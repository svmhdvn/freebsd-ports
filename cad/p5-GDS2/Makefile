PORTNAME=	GDS2
PORTVERSION=	3.35
CATEGORIES=	cad perl5
MASTER_SITES=	CPAN
PKGNAMEPREFIX=	p5-

MAINTAINER=	hrs@FreeBSD.org
COMMENT=	GDS2 stream module
WWW=		https://metacpan.org/release/GDS2

LICENSE=	ART10

RUN_DEPENDS=	p5-Tk>=804.027:x11-toolkits/p5-Tk \
		p5-Tk-WaitBox>0:x11-toolkits/p5-Tk-WaitBox

USES=		perl5 shebangfix
USE_PERL5=	configure
SHEBANG_FILES=	Examples/*

PROGRAMS=	gds2dump gdsdump2gds modgds2 gdslayers testgds2 \
		gdspath4topath0 testgdt

post-install:
	cd ${WRKSRC}/Examples/ && \
	    ${INSTALL_SCRIPT} ${PROGRAMS} ${STAGEDIR}${PREFIX}/bin

.include <bsd.port.mk>
