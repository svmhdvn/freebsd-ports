PORTNAME=	soju
DISTVERSIONPREFIX=	v
DISTVERSION=	0.8.0
PORTREVISION=	1
CATEGORIES=	irc

MAINTAINER=	ashish@FreeBSD.org
COMMENT=	IRC bouncer
WWW=		https://soju.im

LICENSE=	AGPLv3
LICENSE_FILE=	${WRKSRC}/LICENSE

USES=		go:modules sqlite:3
GO_TARGET=	./cmd/soju \
		./cmd/sojuctl \
		./cmd/sojudb \
		./contrib/migrate-db:soju-migrate-db \
		./contrib/migrate-logs:soju-migrate-logs \
		./contrib/znc-import:soju-znc-import


OPTIONS_DEFAULT=	DOCS
OPTIONS_DEFINE=		DOCS

PORTDOCS=		README* doc/*.md doc/**/*.md
SOJU_MAN1=		soju.1 sojuctl.1

USERS=			soju
GROUPS=			soju
SUB_LIST=		USER=${USERS} GROUP=${GROUPS}
USE_RC_SUBR=		${PORTNAME}
CGO_LDFLAGS+=		-lsqlite3
BUILD_DEPENDS=		scdoc:textproc/scdoc

USE_GITHUB=	nodefault
GH_TUPLE=       \
                SherClockHolmes:webpush-go:v1.3.0:sherclockholmes_webpush_go/vendor/github.com/SherClockHolmes/webpush-go \
                beorn7:perks:v1.0.1:beorn7_perks/vendor/github.com/beorn7/perks \
                cespare:xxhash:v2.2.0:cespare_xxhash_v2/vendor/github.com/cespare/xxhash/v2 \
                dustin:go-humanize:v1.0.1:dustin_go_humanize/vendor/github.com/dustin/go-humanize \
                emersion:go-sasl:e73c9f7bad43:emersion_go_sasl/vendor/github.com/emersion/go-sasl \
                go-irc:irc:v4.0.0:go_irc_irc/vendor/gopkg.in/irc.v4 \
                golang-jwt:jwt:v3.2.2:golang_jwt_jwt/vendor/github.com/golang-jwt/jwt \
                golang:crypto:v0.21.0:golang_crypto/vendor/golang.org/x/crypto \
                golang:sys:v0.18.0:golang_sys/vendor/golang.org/x/sys \
                golang:term:v0.18.0:golang_term/vendor/golang.org/x/term \
                golang:time:v0.5.0:golang_time/vendor/golang.org/x/time \
                google:uuid:v1.6.0:google_uuid/vendor/github.com/google/uuid \
                hashicorp:golang-lru:v2.0.7:hashicorp_golang_lru_v2/vendor/github.com/hashicorp/golang-lru/v2 \
                lib:pq:v1.10.9:lib_pq/vendor/github.com/lib/pq \
                mattn:go-isatty:v0.0.20:mattn_go_isatty/vendor/github.com/mattn/go-isatty \
                mattn:go-sqlite3:v1.14.22:mattn_go_sqlite3/vendor/github.com/mattn/go-sqlite3 \
                msteinert:pam:v2.0.0:msteinert_pam_v2/vendor/github.com/msteinert/pam/v2 \
                ncruces:go-strftime:v0.1.9:ncruces_go_strftime/vendor/github.com/ncruces/go-strftime \
                nhooyr:websocket:v1.8.10:nhooyr_websocket/vendor/nhooyr.io/websocket \
                pires:go-proxyproto:v0.7.0:pires_go_proxyproto/vendor/github.com/pires/go-proxyproto \
                prometheus:client_golang:v1.18.0:prometheus_client_golang/vendor/github.com/prometheus/client_golang \
                prometheus:client_model:v0.6.0:prometheus_client_model/vendor/github.com/prometheus/client_model \
                prometheus:common:v0.47.0:prometheus_common/vendor/github.com/prometheus/common \
                prometheus:procfs:v0.13.0:prometheus_procfs/vendor/github.com/prometheus/procfs \
                protocolbuffers:protobuf-go:v1.33.0:protocolbuffers_protobuf_go/vendor/google.golang.org/protobuf \
                remyoudompheng:bigfft:24d4a6f8daec:remyoudompheng_bigfft/vendor/github.com/remyoudompheng/bigfft

GL_TUPLE=       \
                cznic:gc:f0dba7c97c2b9a339c26efa9f85898b1d4d62c59:cznic_gc/vendor/modernc.org/gc/v3 \
                cznic:libc:43bff57ba062dd636862c109510b3ddb257691c2:cznic_libc/vendor/modernc.org/libc \
                cznic:mathutil:aabd79189264b253ce2360e80193242239022080:cznic_mathutil/vendor/modernc.org/mathutil \
                cznic:memory:dda74182ee99cca437f9abb436d906192e090c70:cznic_memory/vendor/modernc.org/memory \
                cznic:sqlite:569f7680f838c9da4ddc965633f4cab2c852fda6:cznic_sqlite/vendor/modernc.org/sqlite \
                cznic:strutil:f4c290107e9e43b1bb4a8bc7dcd154eb9b565cd8:cznic_strutil/vendor/modernc.org/strutil \
                cznic:token:24e30cd78ee0f2d5d4516917d9cc1101e3ccc1ab:cznic_token/vendor/modernc.org/token

# Additional distfiles to fetch from https://git.sr.ht
# TODO waiting on SRHT_TUPLE support in bsd.sites.mk
_SRHT_TUPLE=	emersion:soju:${DISTVERSIONPREFIX}${DISTVERSION}:.. \
		emersion:go-scfg:2ae16e782082:vendor/git.sr.ht/~emersion/go-scfg \
		sircmpwn:go-bare:ab86bc2846d9:vendor/git.sr.ht/~sircmpwn/go-bare \
		emersion:go-sqlite3-fts5:f3a72e8b79b1:vendor/git.sr.ht/~emersion/go-sqlite3-fts5

.for account project tag subdir in ${_SRHT_TUPLE:S/:/ /g}
MASTER_SITES+=	https://git.sr.ht/~${account}/${project}/archive/${tag}${EXTRACT_SUFX}?dummy=/:${account}_${project:S/-/_/g}
DISTFILES+=	${account}-${project}-${tag}_SRHT0${EXTRACT_SUFX}:${account}_${project:S/-/_/g}
.endfor

# TODO add these to OPTIONS_DEFINE
GO_BUILD_TAGS=	sqlite3 pam

GO_BUILDFLAGS+=	-ldflags="-X 'git.sr.ht/~emersion/soju/config.DefaultPath=${ETCDIR}/config' -X 'git.sr.ht/~emersion/soju/config.DefaultUnixAdminPath=/var/run'" \
		-tags="${GO_BUILD_TAGS:ts,}"

.include <bsd.port.pre.mk>

post-extract:
.for account project tag subdir in ${_SRHT_TUPLE:S/:/ /g}
	@${MKDIR} ${WRKSRC}/${subdir:H}
	@${MV} ${WRKDIR}/${project}-${tag} ${WRKSRC}/${subdir}
.endfor

post-patch:
	@${REINPLACE_CMD} -r -e 's,/var/lib/soju,/var/db/soju,g' \
		${WRKSRC}/config.in

post-build:
.for f in ${SOJU_MAN1}
	${LOCALBASE}/bin/scdoc < ${WRKSRC}/doc/${f}.scd > ${WRKSRC}/${f}
.endfor

post-install:
	(cd ${WRKSRC} && ${INSTALL_MAN} ${SOJU_MAN1} ${STAGEDIR}${PREFIX}/share/man/man1)
	${MKDIR} ${STAGEDIR}${ETCDIR}
	${INSTALL_DATA} ${WRKSRC}/config.in ${STAGEDIR}${ETCDIR}/config.sample

post-install-DOCS-on:
	${MKDIR} ${STAGEDIR}${DOCSDIR}
.for f in ${PORTDOCS}
	${INSTALL_DATA} ${WRKSRC}/${f} ${STAGEDIR}${DOCSDIR}
.endfor

.include <bsd.port.post.mk>
