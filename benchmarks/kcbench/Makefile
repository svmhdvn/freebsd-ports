PORTNAME=	kcbench
DISTVERSIONPREFIX=	v
DISTVERSION=	0.9.13
CATEGORIES=	benchmarks

LICENSE=	MIT
LICENSE_FILE=	${WRKSRC}/LICENSE

MAINTAINER=	me@svmhdvn.name
COMMENT=	Linux kernel compile benchmark
WWW=		https://gitlab.com/knurd42/kcbench

USE_GITLAB=	yes
GL_ACCOUNT=	knurd42

RUN_DEPENDS=	bash:shells/bash \
		lscpu:sysutils/lscpu \
		bison:devel/bison

NO_ARCH=	yes
NO_BUILD=	yes

USES=		compiler:perl:run pkgconfig:run shebangfix
SHEBANG_FILES=	kcbench kcbenchrate

.include <bsd.port.mk>
