PORTNAME=	phoronix-test-suite
DISTVERSIONPREFIX=	v
DISTVERSION=	10.8.4
PORTREVISION=	3
CATEGORIES=	benchmarks
PKGNAMESUFFIX=	${PHP_PKGNAMESUFFIX}

MAINTAINER=	pizzamig@FreeBSD.org
COMMENT=	Phoronix Benchmarking Suite
WWW=		https://www.phoronix-test-suite.com

LICENSE=	GPLv3
LICENSE_FILE=	${WRKSRC}/COPYING

RUN_DEPENDS=	sudo:security/sudo \
		bash:shells/bash

USES=		php:cli,build,flavors python shebangfix
USE_GITHUB=	yes
USE_PHP=	curl dom gd pcntl posix simplexml zip zlib
NO_BUILD=	yes

PORTDATA=	*
PORTDOCS=	*

NO_ARCH=	yes

SHEBANG_GLOB=	*.sh

CONFLICTS_INSTALL=	phoronix-test-suite-php[0-9][0-9] # bin/phoronix-test-suite

OPTIONS_DEFINE=	BASH_COMPLETIONS DOCS X11
OPTIONS_DEFAULT=	X11
OPTIONS_SUB=	yes

BASH_COMPLETIONS_DESC=	Install bash completions
BASH_COMPLETIONS_CONFIGURE_ON=	WITH_BASH_COMPLETIONS=yes
X11_DESC=	Install X11 icons and mimetypes
X11_USES=	desktop-file-utils shared-mime-info
X11_CONFIGURE_OFF=	WITHOUT_X11=yes

post-patch:
	@${SED} -i '' -e "s|/usr/local|${LOCALBASE}|g" \
		${WRKSRC}/phoronix-test-suite \
		${WRKSRC}/pts-core/commands/ob_test_profile_analyze.php \
		${WRKSRC}/pts-core/pts-core.php \
		${WRKSRC}/pts-core/objects/pts_svg_dom_gd.php \
		${WRKSRC}/pts-core/objects/client/pts_external_dependencies.php \
		${WRKSRC}/pts-core/objects/client/pts_client.php \
		${WRKSRC}/pts-core/objects/phodevi/components/phodevi_system.php
	@${SED} -i '' -e "s|/usr/share/fonts|${LOCALBASE}/share/fonts| ; \
		s|/usr/X11/lib|${LOCALBASE}/lib|" \
		${WRKSRC}/pts-core/objects/pts_svg_dom_gd.php
	@${SED} -i '' -e "/fpdf.php/s|/usr/share/php|${PREFIX}/share|" \
		${WRKSRC}/pts-core/objects/pts_pdf_template.php

do-install:
	(cd ${WRKSRC} && ${CONFIGURE_ARGS} DESTDIR="${STAGEDIR}" ./install-sh ${PREFIX})

.include <bsd.port.mk>
