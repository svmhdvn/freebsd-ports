PORTNAME=	scmxx
PORTVERSION=	0.9.0
PORTREVISION=	4
CATEGORIES=	comms
MASTER_SITES=	SF

MAINTAINER=	jmohacsi@bsd.hu
COMMENT=	Data exchange utility for Siemens mobile phones
WWW=		http://www.hendrik-sattler.de/scmxx/

USES=		gettext iconv gmake tar:bzip2
GNU_CONFIGURE=	yes
GNU_CONFIGURE_MANPREFIX=${PREFIX}/share
CFLAGS+=	-I${LOCALBASE}/include
CPPFLAGS+=	-I${LOCALBASE}/include
LDFLAGS+=	-L${LOCALBASE}/lib

CONFLICTS_INSTALL=	smi # bin/smi

DOCS=		README docs/*.txt
EXAMPLES=	sms.txt vCalendar.vcs vCard.vcf

OPTIONS_DEFINE=	DOCS

.include <bsd.port.pre.mk>

.if empty(ICONV_LIB)
CONFIGURE_ARGS+=ac_cv_lib_iconv_libiconv=no
.endif

post-patch:
	@${FIND} ${WRKSRC} -name 'Makefile*' | ${XARGS} \
		${REINPLACE_CMD} -e "s|CFLAGS=|CFLAGS+=|g"

post-install:
	@${MKDIR} ${STAGEDIR}${EXAMPLESDIR}
	cd ${WRKSRC}/examples && ${INSTALL_DATA} ${EXAMPLES} ${STAGEDIR}${EXAMPLESDIR}
post-install-DOCS-on:
	@${MKDIR} ${STAGEDIR}${DOCSDIR}
	cd ${WRKSRC} && ${INSTALL_DATA} ${DOCS} ${STAGEDIR}${DOCSDIR}

.include <bsd.port.post.mk>
