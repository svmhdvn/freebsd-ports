--- Make.inc.orig	2025-04-29 02:15:20 UTC
+++ Make.inc
@@ -250,7 +250,7 @@ docdir := $(prefix)/$(framework_documentation)
 libexecdir := $(prefix)/$(framework_helpers)
 datarootdir := $(prefix)/$(framework_resources)
 docdir := $(prefix)/$(framework_documentation)
-mandir := $(datarootdir)/man
+mandir := $(prefix)/share/man
 man1dir := $(mandir)/man1
 includedir := $(prefix)/$(framework_headers)
 sysconfdir := $(prefix)/$(framework_resources)
@@ -1367,7 +1367,7 @@ ifeq ($(OS), FreeBSD)
 endif
 
 ifeq ($(OS), FreeBSD)
-JLDFLAGS += -Wl,-Bdynamic
+JLDFLAGS += -Wl,-Bdynamic -Wl,-L$(GCCPATH)
 OSLIBS += -lelf -lkvm -lrt -lpthread -latomic
 
 # Tweak order of libgcc_s in DT_NEEDED,
@@ -1376,8 +1376,7 @@ OSLIBS += -lgcc_s
 # See #21788
 OSLIBS += -lgcc_s
 
-OSLIBS += -Wl,--export-dynamic -Wl,--version-script=$(BUILDROOT)/src/julia.expmap \
-	$(NO_WHOLE_ARCHIVE)
+OSLIBS += -Wl,--export-dynamic $(NO_WHOLE_ARCHIVE)
 endif
 
 ifeq ($(OS), Darwin)
