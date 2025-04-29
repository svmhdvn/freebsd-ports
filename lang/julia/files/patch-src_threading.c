--- src/threading.c.orig	2025-04-29 16:04:51 UTC
+++ src/threading.c
@@ -404,12 +404,6 @@ jl_ptls_t jl_init_threadtls(int16_t tid)
     jl_fence();
     uv_mutex_unlock(&tls_lock);
 
-#if !defined(_OS_WINDOWS_) && !defined(JL_DISABLE_LIBUNWIND) && !defined(LLVMLIBUNWIND)
-    // ensures libunwind TLS space for this thread is allocated eagerly
-    // to make unwinding async-signal-safe even when using thread local caches.
-    unw_ensure_tls();
-#endif
-
     return ptls;
 }
 
