--- extensions/shell/app/shell_main_delegate.cc.orig	2025-06-30 07:04:30 UTC
+++ extensions/shell/app/shell_main_delegate.cc
@@ -41,7 +41,7 @@
 #if BUILDFLAG(IS_WIN)
 #include "base/base_paths_win.h"
 #include "base/process/process_info.h"
-#elif BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_CHROMEOS)
+#elif BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_CHROMEOS) || BUILDFLAG(IS_BSD)
 #include "base/nix/xdg_util.h"
 #elif BUILDFLAG(IS_MAC)
 #include "base/base_paths_mac.h"
@@ -61,7 +61,7 @@ base::FilePath GetDataPath() {
   }
 
   base::FilePath data_dir;
-#if BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_CHROMEOS)
+#if BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_CHROMEOS) || BUILDFLAG(IS_BSD)
   std::unique_ptr<base::Environment> env(base::Environment::Create());
   data_dir = base::nix::GetXDGDirectory(
       env.get(), base::nix::kXdgConfigHomeEnvVar, base::nix::kDotConfigDir);
