PORTNAME=	sudoscript
PORTVERSION=	2.1.2
PORTREVISION=	1
CATEGORIES=	security
MASTER_SITES=	SF/${PORTNAME}/${PORTNAME}%202.1%20release/${PORTNAME}%20${PORTVERSION}

MAINTAINER=	ports@FreeBSD.org
COMMENT=	Audited shells in Perl with sudo(8) and script(1)
WWW=		https://www.egbok.com/sudoscript

USES=		perl5 gmake
MAKE_ARGS=	PERLPATH=${PERL} MANPREFIX=${PREFIX}/share/man
MAKE_ENV=	SSRPM=yes
NO_ARCH=	yes

post-patch:
	@${REINPLACE_CMD} -e 's|^PREFIX=|^PREFIX?=|g' \
		${WRKSRC}/Makefile

.include <bsd.port.mk>
