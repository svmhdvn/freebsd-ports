PORTNAME=	libcsv
PORTVERSION=	3.0.3
PORTREVISION=	4
CATEGORIES=	textproc
MASTER_SITES=	SF/${PORTNAME}/${PORTNAME}/${PORTNAME}-${PORTVERSION}

MAINTAINER=	bob@eager.cx
COMMENT=	Small, simple and fast CSV library
WWW=		https://sourceforge.net/projects/libcsv/

LICENSE=	LGPL21

USES=		uidfix
USE_LDCONFIG=	yes

MAKEFILE=	Makefile.lib

PLIST_SUB=	SHLIB_MAJOR="${SHLIB_MAJOR}"

OPTIONS_DEFINE=	EXAMPLES PROFILE

PROFILE_MAKE_ENV_OFF=	WITHOUT_PROFILE=true
PROFILE_PLIST_SUB=	PROFILE=""
PROFILE_PLIST_SUB_OFF=	PROFILE="@comment "

SHLIB_MAJOR=	3

do-configure:
	@${SED} -e 's|%%SHLIB_MAJOR%%|${SHLIB_MAJOR}|' \
		< ${FILESDIR}/Makefile > ${WRKSRC}/${MAKEFILE}

do-install-EXAMPLES-on:
	@${MKDIR} ${STAGEDIR}${EXAMPLESDIR}
	(cd ${WRKSRC}/examples && ${COPYTREE_SHARE} . ${STAGEDIR}${EXAMPLESDIR})

.include <bsd.port.mk>
