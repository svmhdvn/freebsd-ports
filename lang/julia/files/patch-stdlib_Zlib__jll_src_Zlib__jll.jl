--- stdlib/Zlib_jll/src/Zlib_jll.jl.orig	2025-04-29 16:42:21 UTC
+++ stdlib/Zlib_jll/src/Zlib_jll.jl
@@ -21,7 +21,7 @@ else
 elseif Sys.isapple()
     const libz = "@rpath/libz.1.dylib"
 else
-    const libz = "libz.so.1"
+    const libz = "libz.so"
 end
 
 function __init__()
