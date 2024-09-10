PORTNAME=	cvs
PORTVERSION=	1.12.13
PORTREVISION=	14
CATEGORIES=	devel
MASTER_SITES=	GNU/non-gnu/${PORTNAME}/source/feature/${PORTVERSION}
PKGNAMESUFFIX=	-devel

MAINTAINER=	bdheeman@gmail.com
COMMENT=	IPv6 enabled cvs.  You can use IPv6 connection when using pserver
WWW=		https://www.cvshome.org/

CONFLICTS=	cvs cvs+ipv6

USES=		cpe makeinfo perl5 tar:bzip2
CPE_VENDOR=	gnu
GNU_CONFIGURE=	yes
GNU_CONFIGURE_MANPREFIX=${PREFIX}/share
CONFIGURE_ARGS=	--enable-ipv6 \
		--with-editor="vi" \
		--with-tmpdir="/tmp"

INFO=		cvs cvsclient

CVS_SITE?=	:pserver:anoncvs@anoncvs.jp.FreeBSD.org:/home/ncvs
CVS_VER?=	v${PORTVERSION:S//_/g}

OPTIONS_DEFINE=	GSSAPI PAM
GSSAPI_DESC=	GSSAPI support
PAM_DESC=	PAM support

.include <bsd.port.pre.mk>

PAM_CONFIGURE_ENABLE=	pam

GSSAPI_USES=		gssapi
GSSAPI_CONFIGURE_ON=	--with-gssapi=${GSSAPIBASEDIR} ${GSSAPI_CONFIGURE_ARGS}
GSSAPI_CONFIGURE_OFF=	--without-gssapi

post-patch:
	@${REINPLACE_CMD} 's/${PORTVERSION:S/./\./g}/&-devel/g' \
		${WRKSRC}/configure
	@${CP} ${FILESDIR}/missing ${WRKSRC}

generate-patch:
	cvs -R -d ${CVS_SITE} rdiff -u -r ${CVS_VER} -r HEAD \
	  src/contrib/cvs \
	| ${SED} \
	  -e 's,^\+\+\+ src/contrib/cvs/,+++ ,' \
	  -e 's,^Index: src/contrib/cvs/,Index: ,' \
	  -e 's,\$$FreeBSD: ,FreeBSD: ,' \
	  > ${FILESDIR}/patch-freebsdlocal
	cvs -R -d ${CVS_SITE} rdiff -u -D 1999-12-01 -r HEAD \
	  gnu/usr.bin/cvs/cvs/prepend_args.c \
	  gnu/usr.bin/cvs/cvs/prepend_args.h \
	| ${SED} \
	  -e 's,^\+\+\+ src/gnu/usr.bin/cvs/cvs/,+++ src/,' \
	  -e 's,^Index: src/gnu/usr.bin/cvs/cvs/,Index: src/,' \
	  -e 's,\$$FreeBSD: ,FreeBSD: ,' \
	  >> ${FILESDIR}/patch-freebsdlocal

.include <bsd.port.post.mk>
