# Mold linker support
#
# TODO desc
#
# NOTE:
# * check for archs: (! ${ARCH:Mmips*})
.if !defined(_MOLD_MK_INCLUDED)
_MOLD_MK_INCLUDED=	yes
MOLD_Include_MAINTAINER=	me@svmhdvn.name

.  if !defined(MOLD_UNSAFE)
#BUILD_DEPENDS+=	devel/mold
MOLD_CFLAGS=	-fuse-ld=mold
.    if defined(_INCLUDE_USES_CARGO_MK)
RUSTFLAGS+=	-C link-arg=${MOLD_CFLAGS}
.    elif defined(_INCLUDE_USES_CMAKE_MK)
CMAKE_ARGS+=	-DCMAKE_EXE_LINKER_FLAGS="${MOLD_CFLAGS}" \
		-DCMAKE_SHARED_LINKER_FLAGS="${MOLD_CFLAGS}"
.    elif defined(_INCLUDE_USES_MSEON_MK)
MAKE_ENV+=	CC_LD=mold
.    else
CFLAGS+=	${MOLD_CFLAGS}
LDFLAGS+=	${MOLD_CFLAGS}
.    endif
.  endif
.endif
