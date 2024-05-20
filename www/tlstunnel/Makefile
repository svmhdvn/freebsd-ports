PORTNAME=	tlstunnel
DISTVERSIONPREFIX=	v
DISTVERSION=	0.3.0
CATEGORIES=	www

MAINTAINER=	me@svmhdvn.name
COMMENT=	TLS reverse proxy
WWW=		https://git.sr.ht/~emersion/tlstunnel

LICENSE=	MIT

BUILD_DEPENDS=	scdoc:textproc/scdoc

USES=		go:modules

TLSTUNNEL_DBDIR=	/var/db/${PORTNAME}
GO_TARGET=	./cmd/tlstunnel
GO_BUILDFLAGS+=	-ldflags="-s -w -X 'main.configPath=${ETCDIR}/config' -X 'main.certDataPath=${TLSTUNNEL_DBDIR}'"

USERS=		${PORTNAME}
GROUPS=		${PORTNAME}
USE_RC_SUBR=	${PORTNAME}
SUB_LIST=	DAEMON_USER=${USERS} DAEMON_GROUP=${GROUPS}

USE_GITHUB=	nodefault
GH_TUPLE=	caddyserver:certmagic:v0.19.2:caddyserver_certmagic/vendor/github.com/caddyserver/certmagic \
		golang:crypto:v0.15.0:golang_crypto/vendor/golang.org/x/crypto \
		golang:mod:v0.14.0:golang_mod/vendor/golang.org/x/mod \
		golang:net:v0.18.0:golang_net/vendor/golang.org/x/net \
		golang:sys:v0.14.0:golang_sys/vendor/golang.org/x/sys \
		golang:text:v0.14.0:golang_text/vendor/golang.org/x/text \
		golang:tools:v0.15.0:golang_tools/vendor/golang.org/x/tools \
		klauspost:cpuid:v2.2.6:klauspost_cpuid_v2/vendor/github.com/klauspost/cpuid/v2 \
		libdns:dnsupdate:2e79c50ea2ee:libdns_dnsupdate/vendor/github.com/libdns/dnsupdate \
		libdns:libdns:v0.2.1:libdns_libdns/vendor/github.com/libdns/libdns \
		mholt:acmez:v1.2.0:mholt_acmez/vendor/github.com/mholt/acmez \
		miekg:dns:v1.1.57:miekg_dns/vendor/github.com/miekg/dns \
		pires:go-proxyproto:v0.7.0:pires_go_proxyproto/vendor/github.com/pires/go-proxyproto \
		uber-go:multierr:v1.11.0:uber_go_multierr/vendor/go.uber.org/multierr \
		uber-go:zap:v1.26.0:uber_go_zap/vendor/go.uber.org/zap \
		zeebo:blake3:v0.2.3:zeebo_blake3/vendor/github.com/zeebo/blake3

# Additional distfiles to fetch from https://git.sr.ht
# TODO waiting on SRHT_TUPLE support in bsd.sites.mk
_SRHT_TUPLE=	emersion:tlstunnel:${DISTVERSIONPREFIX}${DISTVERSION}:.. \
		emersion:go-scfg:9dce55c8d63b:vendor/git.sr.ht/~emersion/go-scfg

.for account project tag subdir in ${_SRHT_TUPLE:S/:/ /g}
MASTER_SITES+=	https://git.sr.ht/~${account}/${project}/archive/${tag}${EXTRACT_SUFX}?dummy=/:${account}_${project:S/-/_/g}
DISTFILES+=	${account}-${project}-${tag}_SRHT0${EXTRACT_SUFX}:${account}_${project:S/-/_/g}
.endfor

.include <bsd.port.pre.mk>

post-extract:
.for account project tag subdir in ${_SRHT_TUPLE:S/:/ /g}
	@${MKDIR} ${WRKSRC}/${subdir:H}
	@${MV} ${WRKDIR}/${project}-${tag} ${WRKSRC}/${subdir}
.endfor

post-build:
	${LOCALBASE}/bin/scdoc < ${WRKSRC}/${PORTNAME}.1.scd > ${WRKSRC}/${PORTNAME}.1

post-stage:
	${INSTALL_MAN} ${WRKSRC}/${PORTNAME}.1 ${STAGEDIR}${PREFIX}/share/man/man1
	${MKDIR} ${STAGEDIR}${ETCDIR}
	${INSTALL_DATA} files/config ${STAGEDIR}${ETCDIR}/config.sample
	${MKDIR} ${STAGEDIR}${TLSTUNNEL_DBDIR}

.include <bsd.port.post.mk>
