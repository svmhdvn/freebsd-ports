--- stdlib/OpenLibm_jll/src/OpenLibm_jll.jl.orig	2025-04-02 16:22:06 UTC
+++ stdlib/OpenLibm_jll/src/OpenLibm_jll.jl
@@ -21,7 +21,7 @@ else
 elseif Sys.isapple()
     const libopenlibm = "@rpath/libopenlibm.4.dylib"
 else
-    const libopenlibm = "libopenlibm.so.4"
+    const libopenlibm = "libopenlibm.so"
 end
 
 function __init__()
