PORTNAME=	renameutils
PORTVERSION=	0.12.0
PORTREVISION=	3
CATEGORIES=	sysutils converters
MASTER_SITES=	SAVANNAH

MAINTAINER=	mcy@lm7.fr
COMMENT=	Rename files faster and more easily
WWW=		https://www.nongnu.org/renameutils/

LICENSE=	GPLv3

RUN_DEPENDS=	gls:sysutils/coreutils

GNU_CONFIGURE=	yes
GNU_CONFIGURE_MANPREFIX=${PREFIX}/share
USES=		readline charsetfix

CONFLICTS_INSTALL=	imv # bin/imv

OPTIONS_DEFINE=	NLS
OPTIONS_SUB=	yes

NLS_USES=	gettext
NLS_CONFIGURE_ENABLE=	nls

# This should not be needed any more for the next upstream version
post-patch:
	@${REINPLACE_CMD} -e 's/($$bindir)/$$(bindir)/' \
		${WRKSRC}/src/Makefile.in

.include <bsd.port.mk>
