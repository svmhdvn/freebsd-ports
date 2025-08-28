--- app/buck2_core/build.rs.orig	2026-02-11 00:11:24 UTC
+++ app/buck2_core/build.rs
@@ -42,11 +42,6 @@ fn check_rustc_version() {
     let expected = expected_version();
     let actual = rustc_version();
     if actual != expected {
-        panic!(
-            "buck2 only works with version `{expected}` of rustc, but you are \
-            using `{actual}`. Correct version is installed automatically when \
-            `rustup` is used",
-        );
     }
 }
 
