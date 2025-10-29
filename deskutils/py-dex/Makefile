PORTNAME=	dex
DISTVERSION=	0.10.1
CATEGORIES=	deskutils

MAINTAINER=	me@svmhdvn.name
COMMENT=	DesktopEntry Execution
WWW=		https://github.com/jceb/dex

LICENSE=	GPLv3+
LICENSE_FILE=	${WRKSRC}/LICENSE

USES=		gmake python:run shebangfix

USE_GITHUB=	yes
GH_ACCOUNT=	jceb

SHEBANG_FILES=	dex

PLIST_FILES=	bin/dex

NO_ARCH=	yes
ALL_TARGET=	dex

OPTIONS_DEFINE=	MANPAGES

MANPAGES_DESC=		Build manpages (requires Sphinx)
MANPAGES_BUILD_DEPENDS=	sphinx-build:textproc/py-sphinx@${PY_FLAVOR}
MANPAGES_ALL_TARGET=	build
MANPAGES_PLIST_FILES=	share/man1/dex.1

do-install:
	${INSTALL_SCRIPT} ${WRKSRC}/dex ${STAGEDIR}${PREFIX}/bin/dex

do-install-MANPAGES-on:
	${MKDIR} ${STAGEDIR}${PREFIX}/share/man1
	${INSTALL_MAN} ${WRKSRC}/dex.1 ${STAGEDIR}${PREFIX}/share/man1/

.include <bsd.port.mk>
