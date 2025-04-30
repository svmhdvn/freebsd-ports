PORTNAME=	pinta
PORTVERSION=	3.0
CATEGORIES=	graphics
MASTER_SITES=	https://github.com/PintaProject/Pinta/releases/download/${PORTVERSION}/

MAINTAINER=	me@svmhdvn.name
COMMENT=	Simple Gtk\# Paint Program
WWW=		https://pinta-project.com/

LICENSE=	MIT
LICENSE_FILE=	${WRKSRC}/license-mit.txt

BR_DEPENDS=	${LOCALBASE}/libdata/pkgconfig/mono-addins.pc:devel/mono-addins \
		dotnet>0:lang/dotnet
BUILD_DEPENDS=	${BR_DEPENDS}
RUN_DEPENDS=	${BR_DEPENDS}

USES=		desktop-file-utils gmake gnome mono pkgconfig gettext-tools:build
USE_GNOME=	gtksharp20 intltool libadwaita
GNU_CONFIGURE=	yes
GNU_CONFIGURE_MANPREFIX=${PREFIX}/share

OPTIONS_DEFINE=	NLS
OPTIONS_SUB=	yes

NLS_CONFIGURE_ENABLE=	nls

.include <bsd.port.mk>
