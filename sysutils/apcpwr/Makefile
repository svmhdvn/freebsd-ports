PORTNAME=		apcpwr
PORTVERSION=		1.3
PORTREVISION=		2
CATEGORIES=		sysutils net
MASTER_SITES=		LOCAL/jwd

MAINTAINER=	ports@FreeBSD.org
COMMENT=	Control APC 9211 MasterSwitchs via snmp

RUN_DEPENDS=	snmpwalk:net-mgmt/net-snmp

USES=		shebangfix
SHEBANG_FILES=	apcpwr.pl

SUB_FILES=	pkg-message

PLIST_FILES=	bin/apcpwr etc/apcpwr.conf.dist share/man/man8/apcpwr.8.gz

do-install:
	${INSTALL} -m 4555 ${WRKSRC}/apcpwr ${STAGEDIR}${PREFIX}/bin
	${INSTALL} -m 600 ${WRKSRC}/apcpwr.conf.dist ${STAGEDIR}${PREFIX}/etc
	${INSTALL_MAN} ${WRKSRC}/apcpwr.8 ${STAGEDIR}${PREFIX}/share/man/man8

.include <bsd.port.mk>
