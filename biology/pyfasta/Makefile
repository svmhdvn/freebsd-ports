PORTNAME=	pyfasta
PORTVERSION=	0.5.2
PORTREVISION=	6
CATEGORIES=	biology python
MASTER_SITES=	PYPI
PKGNAMEPREFIX=	${PYTHON_PKGNAMEPREFIX}

MAINTAINER=	wen@FreeBSD.org
COMMENT=	Fast, memory-efficient, pythonic access to fasta sequence files
WWW=		https://bitbucket.org/brentp/biostuff/src/

LICENSE=	MIT

BUILD_DEPENDS=	${_BUILD_RUN_DEPENDS}
RUN_DEPENDS=	${_BUILD_RUN_DEPENDS}

USES=		python
USE_PYTHON=	distutils autoplist

_BUILD_RUN_DEPENDS=	${PYNUMPY}

.include <bsd.port.mk>
