PORTNAME=	gtk4
PORTVERSION=	4.3.0
CATEGORIES=	x11-toolkits rubygems
MASTER_SITES=	RG

MAINTAINER=	sunpoet@FreeBSD.org
COMMENT=	Ruby binding of GTK 4
WWW=		https://ruby-gnome.github.io/ \
		https://github.com/ruby-gnome/ruby-gnome

LICENSE=	LGPL21+
LICENSE_FILE=	${WRKSRC}/COPYING.LIB

RUN_DEPENDS=	rubygem-atk>=${PORTVERSION}<${PORTVERSION}_99:accessibility/rubygem-atk \
		rubygem-gdk4>=${PORTVERSION}<${PORTVERSION}_99:x11-toolkits/rubygem-gdk4

USES=		gem gnome
USE_GNOME=	gtk40

.include <bsd.port.mk>
