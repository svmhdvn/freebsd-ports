PORTNAME=	libiscsi
DISTVERSION=	1.19.0.230208
PORTREVISION=	1
CATEGORIES=	net

MAINTAINER=	d8zNeCFG@aon.at
COMMENT=	Client-side library to implement the iSCSI protocol
WWW=		https://github.com/sahlberg/libiscsi

LICENSE=		LGPL21+ GPLv2+
LICENSE_COMB=		multi
LICENSE_FILE_LGPL21+  =	${WRKSRC}/LICENCE-LGPL-2.1.txt
LICENSE_FILE_GPLv2+   =	${WRKSRC}/LICENCE-GPL-2.txt

USES=		autoreconf compiler:c11 gmake libtool pathfix
USE_GITHUB=	yes
USE_LDCONFIG=	yes

GH_ACCOUNT=	sahlberg
GH_TAGNAME=	22f7b2656776

GNU_CONFIGURE=	yes
GNU_CONFIGURE_MANPREFIX=${PREFIX}/share

.include <bsd.port.mk>
