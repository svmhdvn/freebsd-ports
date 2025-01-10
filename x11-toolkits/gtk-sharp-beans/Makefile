PORTNAME=	gtk-sharp-beans
PORTVERSION=	2.14.1
PORTREVISION=	1
CATEGORIES=	x11-toolkits
MASTER_SITES=	http://download.mono-project.com/sources/${PORTNAME}/

MAINTAINER=	ports@FreeBSD.org
COMMENT=	Extensions on top of GTK-sharp
WWW=		http://gitorious.org/gtk-sharp-beans

LICENSE=	LGPL21

BUILD_DEPENDS=	${_BUILD_RUN_DEPENDS}
RUN_DEPENDS=	${_BUILD_RUN_DEPENDS}

GNU_CONFIGURE=	yes
CONFIGURE_ENV=	ac_cv_path_CSC=${LOCALBASE}/bin/mcs
USES=		gmake pathfix pkgconfig tar:bzip2
MAKE_JOBS_UNSAFE=yes

_BUILD_RUN_DEPENDS=	${LOCALBASE}/libdata/pkgconfig/gio-sharp-2.0.pc:devel/gio-sharp

.include <bsd.port.mk>
