PORTNAME=       testport
PORTVERSION=    1
CATEGORIES=     ports-mgmt

FLAVORS=        foo bar
foo_PKGNAMESUFFIX=      -foo
bar_PKGNAMESUFFIX=      -bar

USES=           metaport

foo_RUN_DEPENDS=        testport-bar>0:ports-mgmt/testport@bar
bar_RUN_DEPENDS=        testport-foo>0:ports-mgmt/testport@foo

.include <bsd.port.mk>
