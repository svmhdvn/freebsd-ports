PORTNAME=	nvidia-drm-510-kmod
CATEGORIES=	graphics

RUN_DEPENDS+=	${KMODDIR}/drm.ko:graphics/drm-510-kmod
CONFLICTS_INSTALL=	nvidia-drm-515-kmod nvidia-drm-61-kmod

.include "${.CURDIR}/../drm-510-kmod/Makefile.version"
.include "${.CURDIR}/../nvidia-drm-kmod/Makefile.common"

.include <bsd.port.mk>
