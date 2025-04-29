--- Make.inc.orig	2025-04-29 15:24:15 UTC
+++ Make.inc
@@ -310,7 +310,7 @@ docdir := $(datarootdir)/doc/julia
 libexecdir := $(prefix)/libexec
 datarootdir := $(prefix)/share
 docdir := $(datarootdir)/doc/julia
-mandir := $(datarootdir)/man
+mandir := $(prefix)/share/man
 man1dir := $(mandir)/man1
 includedir := $(prefix)/include
 sysconfdir := $(prefix)/etc
@@ -1506,7 +1506,7 @@ ifeq ($(OS), FreeBSD)
 endif
 
 ifeq ($(OS), FreeBSD)
-JLDFLAGS += -Wl,-Bdynamic
+JLDFLAGS += -Wl,-Bdynamic -Wl,-L$(GCCPATH)
 OSLIBS += -lelf -lkvm -lrt -lpthread -latomic
 
 # Tweak order of libgcc_s in DT_NEEDED,
