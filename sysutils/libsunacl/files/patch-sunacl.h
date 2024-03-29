--- sunacl.h.orig	2024-02-07 14:49:41 UTC
+++ sunacl.h
@@ -85,6 +85,13 @@ typedef struct ace {
 #define	ACE_ACCESS_DENIED_ACE_TYPE	0x0001
 #define	ACE_SYSTEM_AUDIT_ACE_TYPE	0x0002
 #define	ACE_SYSTEM_ALARM_ACE_TYPE	0x0003
+#define ACE_ALLOWED_COMPOUND_ACE_TYPE		0x0004
+#define ACE_ACCESS_ALLOWED_OBJECT_ACE_TYPE	0x0005
+#define ACE_ACCESS_DENIED_OBJECT_ACE_TYPE	0x0006
+#define ACE_SYSTEM_AUDIT_OBJECT_ACE_TYPE	0x0007
+#define ACE_SYSTEM_ALARM_OBJECT_ACE_TYPE	0x0008
+
+
 
 #define	ACE_ALL_PERMS	(ACE_READ_DATA|ACE_LIST_DIRECTORY|ACE_WRITE_DATA| \
     ACE_ADD_FILE|ACE_APPEND_DATA|ACE_ADD_SUBDIRECTORY|ACE_READ_NAMED_ATTRS| \
