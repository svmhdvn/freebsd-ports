PORTNAME=	disorderfs
DISTVERSION=	0.6.0
CATEGORIES=	filesystems
PKGNAMEPREFIX=	fusefs-

MAINTAINER=	me@svmhdvn.name
COMMENT=	FUSE filesystem that introduces non-determinism
WWW=		https://salsa.debian.org/reproducible-builds/disorderfs

LICENSE=	GPLv3
LICENSE_FILE=	${WRKSRC}/COPYING

BUILD_DEPENDS=	a2x:textproc/asciidoc

USES=		compiler:c++11-lang fuse pkgconfig gmake
USE_GITLAB=	yes
GL_SITE=	https://salsa.debian.org
GL_ACCOUNT=	reproducible-builds

CFLAGS+=	-I${PREFIX}/include

TEST_TARGET=	test

PLIST_FILES=	bin/disorderfs \
		share/man/man1/disorderfs.1.gz

post-install:
	${STRIP_CMD} ${STAGEDIR}${PREFIX}/bin/disorderfs

pre-test:
# fusefs(5) must be loaded.
	@kldload -n fusefs || ${ECHO_MSG} "WARNING: Cannot load the fusefs kernel module! If fusefs isn't already loaded, will NOT succeed."
# /dev/fuse must be readable and writable by the user running the tests.
	@test -r /dev/fuse -a -w /dev/fuse || ${ECHO_MSG} "ERROR: Current user does cannot access /dev/fuse! Tests will NOT succeed."

.include <bsd.port.mk>
