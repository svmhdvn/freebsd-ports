PORTNAME=	tty-file
PORTVERSION=	0.10.0
CATEGORIES=	devel rubygems
MASTER_SITES=	RG

MAINTAINER=	sunpoet@FreeBSD.org
COMMENT=	File and directory manipulation utility methods
WWW=		https://ttytoolkit.org/ \
		https://github.com/piotrmurach/tty-file

LICENSE=	MIT
LICENSE_FILE=	${WRKSRC}/LICENSE.txt

RUN_DEPENDS=	rubygem-diff-lcs>=1.3<2:textproc/rubygem-diff-lcs \
		rubygem-pastel>=0.8<1:devel/rubygem-pastel \
		rubygem-tty-prompt>=0.22<1:devel/rubygem-tty-prompt

USES=		gem

NO_ARCH=	yes

.include <bsd.port.mk>
