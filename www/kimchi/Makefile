PORTNAME=	kimchi
DISTVERSION=	20240509
CATEGORIES=	www

MAINTAINER=	me@svmhdvn.name
COMMENT=	Bare-bones HTTP server
WWW=		https://git.sr.ht/~emersion/kimchi

LICENSE=	MIT

BUILD_DEPENDS=	scdoc:textproc/scdoc

USES=		go:modules
GO_BUILDFLAGS+=	-ldflags="-s -w -X 'main.configPath=${ETCDIR}/config'"

USE_GITHUB=	nodefault
GH_TUPLE=	golang:net:v0.22.0:golang_net/vendor/golang.org/x/net \
		golang:text:v0.14.0:golang_text/vendor/golang.org/x/text \
		pires:go-proxyproto:v0.7.0:pires_go_proxyproto/vendor/github.com/pires/go-proxyproto

USERS=		${PORTNAME}
GROUPS=		${PORTNAME}
USE_RC_SUBR=	${PORTNAME}
SUB_LIST=	DAEMON_USER=${USERS} DAEMON_GROUP=${GROUPS}

# Additional distfiles to fetch from https://git.sr.ht
# TODO waiting on SRHT_TUPLE support in bsd.sites.mk
COMMIT=		4b663f91b4bc7bb1a7d8257a436ef4c552f7875b
WRKSRC=		${WRKDIR}/${PORTNAME}-${COMMIT}
_SRHT_TUPLE=	emersion:kimchi:${COMMIT}:"" \
		emersion:go-scfg:2ae16e782082:vendor/git.sr.ht/~emersion/go-scfg

.for account project tag subdir in ${_SRHT_TUPLE:S/:/ /g}
MASTER_SITES+=	https://git.sr.ht/~${account}/${project}/archive/${tag}${EXTRACT_SUFX}?dummy=/:${account}_${project:S/-/_/g}
DISTFILES+=	${account}-${project}-${tag}_SRHT0${EXTRACT_SUFX}:${account}_${project:S/-/_/g}
.endfor

.include <bsd.port.pre.mk>

post-extract:
.for account project tag subdir in ${_SRHT_TUPLE:S/:/ /g:[5..-1]}
	@${MKDIR} ${WRKSRC}/${subdir:H}
	@${MV} ${WRKDIR}/${project}-${tag} ${WRKSRC}/${subdir}
.endfor

post-build:
	${LOCALBASE}/bin/scdoc < ${WRKSRC}/${PORTNAME}.1.scd > ${WRKSRC}/${PORTNAME}.1

post-stage:
	${INSTALL_MAN} ${WRKSRC}/${PORTNAME}.1 ${STAGEDIR}${PREFIX}/share/man/man1
	${MKDIR} ${STAGEDIR}${ETCDIR}
	${INSTALL_DATA} files/config ${STAGEDIR}${ETCDIR}/config.sample

.include <bsd.port.post.mk>
