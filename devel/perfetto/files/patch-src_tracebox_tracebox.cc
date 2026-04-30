--- src/tracebox/tracebox.cc.orig	2026-05-01 18:58:47 UTC
+++ src/tracebox/tracebox.cc
@@ -135,7 +135,8 @@ int TraceboxMain(int argc, char** argv) {
     // Use an unlinked abstract domain socket on Linux/Android.
     std::string consumer_socket = "@traced-c-" + pid_str;
     std::string producer_socket = "@traced-p-" + pid_str;
-#elif PERFETTO_BUILDFLAG(PERFETTO_OS_APPLE)
+#elif PERFETTO_BUILDFLAG(PERFETTO_OS_APPLE) || \
+    PERFETTO_BUILDFLAG(PERFETTO_OS_FREEBSD)
     std::string consumer_socket = "/tmp/traced-c-" + pid_str;
     std::string producer_socket = "/tmp/traced-p-" + pid_str;
 #else
