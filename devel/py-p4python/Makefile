PORTNAME=	p4python
PORTVERSION=	2024.2.2682690
PORTREVISION=	1
CATEGORIES=	devel python
MASTER_SITES=	PYPI
PKGNAMEPREFIX=	${PYTHON_PKGNAMEPREFIX}

MAINTAINER=	antonfb@hesiod.org
COMMENT=	Python bindings for the Perforce API
WWW=		https://www.perforce.com/manuals/p4python/Content/P4Python/Home-p4python.html

LICENSE=	BSD2CLAUSE
LICENSE_FILE=	${WRKSRC}/LICENSE.txt

BUILD_DEPENDS=	${_BUILD_RUN_DEPENDS}
RUN_DEPENDS=	${_BUILD_RUN_DEPENDS}

USES=		dos2unix python ssl
USE_PYTHON=	distutils autoplist
PYDISTUTILS_BUILDARGS=	--ssl ${OPENSSLLIB}

_BUILD_RUN_DEPENDS=	${LOCALBASE}/lib/perforce/libclient.a:devel/p4api

post-patch:
	@${REINPLACE_CMD} -e 's:%%LOCALBASE%%:${LOCALBASE}:' ${WRKSRC}/setup.py

.include <bsd.port.mk>
