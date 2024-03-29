PORTNAME=	dsbdriverd
PORTVERSION=	1.1
PORTREVISION=	1
CATEGORIES=	sysutils

MAINTAINER=	mk@nic-nac-project.org
COMMENT=	Hardware detecting, device driver loading daemon
WWW=		https://github.com/mrclksr/DSBDriverd

LICENSE=	BSD2CLAUSE
LICENSE_FILE=	${WRKSRC}/LICENSE

USES=		lua:52 tar:tgz

USE_GITHUB=	yes
GH_ACCOUNT=	mrclksr
GH_PROJECT=	DSBDriverd

OPTIONS_DEFINE=	PCIIDS USBIDS

PCIIDS_DESC=	Use pci.ids database to show PCI device information
USBIDS_DESC=	Use usb.ids database to show USB device information

OPTIONS_DEFAULT=PCIIDS USBIDS

PCIIDS_RUN_DEPENDS=	${LOCALBASE}/share/pciids/pci.ids:misc/pciids
USBIDS_RUN_DEPENDS=	${LOCALBASE}/share/usbids/usb.ids:misc/usbids

MAKE_ARGS+=	DBDIR=${DATADIR}
PCIIDS_MAKE_ARGS=	PCIDB0=${LOCALBASE}/share/pciids/pci.ids
USBIDS_MAKE_ARGS=	USBDB=${LOCALBASE}/share/usbids/usb.ids

PORTDATA=	drivers.db

USE_RC_SUBR=	dsbdriverd

PLIST_FILES=	"@sample ${ETCDIR}/config.lua.sample" \
		${ETCDIR}/netif.lua \
		libexec/dsbdriverd \
		share/man/man8/dsbdriverd.8.gz

post-patch:
	@${REINPLACE_CMD} -e 's|^MANDIR.*|MANDIR = $${PREFIX}/share/man/man8|' \
		${WRKSRC}/Makefile

.include <bsd.port.mk>
