PORTNAME=	ruby-openai
PORTVERSION=	3.7.0
PORTREVISION=	1
CATEGORIES=	www rubygems
MASTER_SITES=	RG
PKGNAMESUFFIX=	37

MAINTAINER=	mfechner@FreeBSD.org
COMMENT=	OpenAI API + Ruby
WWW=		https://github.com/alexrudall/ruby-openai

LICENSE=	MIT
LICENSE_FILE=	${WRKSRC}/LICENSE.txt

RUN_DEPENDS=	rubygem-httparty-gitlab>=0.18.1:www/rubygem-httparty-gitlab

NO_ARCH=	yes
USES=		gem

PORTSCOUT=	limit:^3\.7\.

.include <bsd.port.mk>
