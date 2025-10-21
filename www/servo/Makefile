PORTNAME=	servo
DISTVERSIONPREFIX=	v
DISTVERSION=	0.0.4
CATEGORIES=	www

MAINTAINER=	me@svmhdvn.name
COMMENT=	Prototype web browser engine
WWW=		https://servo.org/

LICENSE=	MPL20
LICENSE_FILE=	${WRKSRC}/LICENSE

USES=		gmake cargo python:build pkgconfig
USE_GITHUB=	yes

BUILD_DEPENDS=	curl:ftp/curl \
		uv:devel/uv


#${LOCALBASE}/llvm${LLVM_DEFAULT}/lib/libclang.so:devel/llvm${LLVM_DEFAULT}

CARGO_ENV+=	MOZJS_FROM_SOURCE=1
#CARGO_FEATURES=	libz-sys

BINARY_ALIAS=	python3=${PYTHON_CMD}

.include <bsd.port.mk>
