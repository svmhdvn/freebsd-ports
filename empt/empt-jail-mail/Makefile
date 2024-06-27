PORTNAME=	empt-jail-mail
DISTVERSION=	0.1.0
CATEGORIES=	empt
MASTER_SITES=
DISTFILES=

MAINTAINER=	me@svmhdvn.name
COMMENT=	EMPT mail server jail
WWW=		https://empt.ca

LICENSE=	UNLICENSE

RUN_DEPENDS=	cyrus-sasl-gssapi>0:security/cyrus-sasl2-gssapi \
		cyrus-sasl-saslauthd>0:security/cyrus-sasl2-saslauthd \
		cyrus-imapd310>0:mail/cyrus-imapd310 \
		mlmmj>0:mail/mlmmj \
		postfix>0:mail/postfix \
		redis>0:databases/redis \
		rspamd>0:mail/rspamd

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

	# TODO reenable once testing is done with FreeDNS DKIM keys
	# =========================================================
	# TODO change to ed25519 keys once every major provider supports verification
	#jexec -l mail rspamadm dkim_keygen -s key1 -d "${ORG_DOMAIN}" -b 2048 \
	#    -k "/var/db/opendkim/${ORG_DOMAIN}/key1.private" \
	#    > "/empt/jails/mail/var/db/opendkim/${ORG_DOMAIN}/key1.txt"
	(cd ${WRKSRC}/testing_dkim && ${COPYTREE_SHARE} . ${STAGEDIR}/var/db/opendkim/keys)
	# =========================================================

.include <bsd.port.mk>
