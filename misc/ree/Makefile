PORTNAME=	ree
PORTVERSION=	1.4.1
PORTREVISION=	1
CATEGORIES=	misc

MAINTAINER=	ehaupt@FreeBSD.org
COMMENT=	Tool to dump your ROM extensions
WWW=		https://github.com/alexmyczko/ree

LICENSE=	GPLv2
LICENSE_FILE=	${WRKSRC}/LICENSE

ONLY_FOR_ARCHS=	amd64 i386

USE_GITHUB=	yes

GH_ACCOUNT=	alexmyczko

MAKEFILE=	makefile

PLIST_FILES=	bin/fontdump \
		sbin/rom-ree \
		share/man/man1/fontdump.1.gz \
		share/man/man8/rom-ree.8.gz

PORTDOCS=	README.md

OPTIONS_DEFINE=	DOCS

post-patch:
	@${REINPLACE_CMD} \
		-e 's|ree|rom-ree|g' \
		-e 's|REE|ROM-REE|g' \
			${WRKSRC}/ree.8

post-install:
	@${MKDIR} ${STAGEDIR}${DOCSDIR}
	${STRIP_CMD} ${STAGEDIR}${PREFIX}/sbin/rom-ree \
		${STAGEDIR}${PREFIX}/bin/fontdump
	${INSTALL_DATA} ${WRKSRC}/README.md ${STAGEDIR}${DOCSDIR}
	${INSTALL_MAN} ${WRKSRC}/ree.8 ${STAGEDIR}${PREFIX}/share/man/man8/rom-ree.8
	${INSTALL_MAN} ${WRKSRC}/fontdump.1 ${STAGEDIR}${PREFIX}/share/man/man1

.include <bsd.port.mk>
