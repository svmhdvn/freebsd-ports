--- kg.c.orig	2025-05-22 02:34:09 UTC
+++ kg.c
@@ -31,7 +31,7 @@
 
 #define NTRACE		10
 
-#define DFLPATH		".:lib"
+#define DFLPATH		".:lib:%%DATADIR%%/lib"
 
 #define T_DICTIONARY	(USER_SPECIALS-1)
 #define T_VARIABLE	(USER_SPECIALS-2)
