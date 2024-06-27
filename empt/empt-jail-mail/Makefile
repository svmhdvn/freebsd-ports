PORTNAME=	empt-jail-mail
DISTVERSION=	0.1.0
CATEGORIES=	empt
MASTER_SITES=
DISTFILES=

MAINTAINER=	me@svmhdvn.name
COMMENT=	EMPT mail server jail
WWW=		https://empt.ca

LICENSE=	UNLICENSE

RUN_DEPENDS=	\
		cyrus-sasl-gssapi:security/cyrus-sasl-gssapi \
		cyrus-sasl-saslauthd:security/cyrus-sasl-saslauthd \
		imapd:mail/cyrus-imapd310 \
		mlmmj:mail/mlmmj \
		postfix:mail/postfix \
		redis:databases/redis \
		rspamd:mail/rspamd


USERS=		mlmmj
GROUPS=		mlmmj

NO_BUILD=	yes
NO_ARCH=	yes

do-extract:
	${CP} -R ${.CURDIR}/src/ ${WRKSRC}

do-install:
	(cd ${WRKSRC}/postfix && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/postfix)
	(cd ${WRKSRC}/cyrus && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/cyrus)
	(cd ${WRKSRC}/redis && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/redis)
	(cd ${WRKSRC}/sasl2 && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/sasl2)
	(cd ${WRKSRC}/rspamd && ${COPYTREE_SHARE} . ${STAGEDIR}${PREFIX}/etc/rspamd/local.d)

.include <bsd.port.mk>
