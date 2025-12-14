--- build.zig.orig	2026-07-22 14:51:16 UTC
+++ build.zig
@@ -1,4 +1,5 @@ const std = @import("std");
 const std = @import("std");
+const build_zig_zon = @import("build.zig.zon");
 
 const linux_targets: []const std.Target.Query = &.{
     .{ .cpu_arch = .x86_64, .os_tag = .linux, .abi = .musl },
@@ -15,11 +16,11 @@ pub fn build(b: *std.Build) void {
     const is_macos = target.result.os.tag == .macos;
     const optimize = b.standardOptimizeOption(.{});
     const version = b.option([]const u8, "version", "Version string for release") orelse
-        @as([]const u8, @import("build.zig.zon").version);
+        @as([]const u8, build_zig_zon.version);
 
     const options = b.addOptions();
     options.addOption([]const u8, "version", version);
-    const ghostty_ver = @import("build.zig.zon").dependencies.ghostty.hash;
+    const ghostty_ver = build_zig_zon.dependencies.ghostty.hash;
     options.addOption([]const u8, "ghostty_version", ghostty_ver);
 
     const exe_mod = b.createModule(.{
