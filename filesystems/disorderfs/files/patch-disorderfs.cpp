--- disorderfs.cpp.orig	2025-05-19 17:06:38 UTC
+++ disorderfs.cpp
@@ -37,7 +37,7 @@ extern "C" {
 #include <vector>
 #include <random>
 #include <algorithm>
-#include <sys/xattr.h>
+#include <sys/extattr.h>
 #include <sys/types.h>
 #include <sys/syscall.h>
 #include <sys/file.h>
@@ -409,21 +409,21 @@ int        main (int argc, char** argv)
     };
     disorderfs_fuse_operations.setxattr = [] (const char* path, const char* name, const char* value, size_t size, int flags) -> int {
         Guard g;
-        return wrap(lsetxattr((root + path).c_str(), name, value, size, flags));
+        return wrap(extattr_set_file((root + path).c_str(), EXTATTR_NAMESPACE_USER, name, value, size));
     };
     disorderfs_fuse_operations.getxattr = [] (const char* path, const char* name, char* value, size_t size) -> int {
         Guard g;
-        ssize_t res = lgetxattr((root + path).c_str(), name, value, size);
+        ssize_t res = extattr_get_file((root + path).c_str(), EXTATTR_NAMESPACE_USER, name, value, size);
         return res >= 0 ? res : -errno;
     };
     disorderfs_fuse_operations.listxattr = [] (const char* path, char* list, size_t size) -> int {
         Guard g;
-        ssize_t res = llistxattr((root + path).c_str(), list, size);
+        ssize_t res = extattr_list_file((root + path).c_str(), EXTATTR_NAMESPACE_USER, list, size);
         return res >= 0 ? res : -errno;
     };
     disorderfs_fuse_operations.removexattr = [] (const char* path, const char* name) -> int {
         Guard g;
-        return wrap(lremovexattr((root + path).c_str(), name));
+        return wrap(extattr_delete_file((root + path).c_str(), EXTATTR_NAMESPACE_USER, name));
     };
     disorderfs_fuse_operations.opendir = [] (const char* path, struct fuse_file_info* info) -> int {
         Guard g;
@@ -557,9 +557,6 @@ int        main (int argc, char** argv)
         *bufp = src;
 
         return 0;
-    };
-    disorderfs_fuse_operations.fallocate = [] (const char* path, int mode, off_t off, off_t len, struct fuse_file_info* info) -> int {
-        return wrap(fallocate(info->fh, mode, off, len));
     };
 
     return fuse_main(fargs.argc, fargs.argv, &disorderfs_fuse_operations, nullptr);
