PORTNAME=	opensmtpd-filter-dkimsign
PORTVERSION=	0.6
CATEGORIES=	mail
MASTER_SITES=	https://imperialat.at/releases/
DISTNAME=	filter-dkimsign-${PORTVERSION}

MAINTAINER=	see@seos.fr
COMMENT=	Library for writing opensmtpd filters
WWW=		https://imperialat.at/dev/filter-dkimsign/

LICENSE=	ISCL
LICENSE_FILE=	${WRKSRC}/LICENSE

LIB_DEPENDS=	libopensmtpd.so:mail/libopensmtpd

MAKEFILE=	Makefile.gnu
USES=		gmake

PLIST_FILES=	libexec/opensmtpd/filter-dkimsign \
		share/man/man8/filter-dkimsign.8.gz

# Makefile.gnu's install target uses Linux-specific install options so we
# have to use the OpenBSD Makefile instead. Thus, it's easier to just do
# it manually.
do-install:
	${MKDIR} ${STAGEDIR}${PREFIX}/libexec/opensmtpd
	${INSTALL_PROGRAM} ${WRKSRC}/filter-dkimsign ${STAGEDIR}${PREFIX}/libexec/opensmtpd/
	${INSTALL_MAN} ${WRKSRC}/filter-dkimsign.8.gz ${STAGEDIR}${PREFIX}/share/man/man8

.include <bsd.port.mk>
