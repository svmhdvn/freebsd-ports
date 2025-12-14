PORTNAME=	zmx
DISTVERSIONPREFIX=	v
DISTVERSION=	0.1.1
CATEGORIES=	sysutils

MAINTAINER=	me@svmhdvn.name
COMMENT=	Session persistence for terminal processes
WWW=		https://zmx.sh

LICENSE=	MIT
LICENSE_FILE=	${WRKSRC}/LICENSE

USES=		zig

USE_GITHUB=	yes
GH_ACCOUNT=	neurosnap

ZIG_TUPLE=	breakpad:deps.files.ghostty.org/breakpad-b99f444ba5f6b98cac261cbb391d8766b34a5918.tar.gz:N-V-__8AALw2uwF_03u4JRkZwRLc3Y9hakkYV7NKRR9-RIZJ \
		fontconfig:deps.files.ghostty.org/fontconfig-2.14.2.tar.gz:N-V-__8AAIrfdwARSa-zMmxWwFuwpXf1T3asIN7s5jqi9c1v \
		freetype:deps.files.ghostty.org/freetype-1220b81f6ecfb3fd222f76cf9106fecfa6554ab07ec7fdc4124b9bb063ae2adf969d.tar.gz:N-V-__8AAKLKpwC4H27Ps_0iL3bPkQb-z6ZVSrB-x_3EEkub \
		gettext:deps.files.ghostty.org/gettext-0.24.tar.gz:N-V-__8AADcZkgn4cMhTUpIz6mShCKyqqB-NBtf_S2bHaTC- \
		ghostty:codeload.github.com/ghostty-org/ghostty/tar.gz/4ff0e0c9d251ddd0687ead578a90d58d6:ghostty-1.3.0-dev-5UdBC1jbPQQiKIuCh-CDmtqsuAVn7HUDNjkzKjt9H_aX \
		glslang:deps.files.ghostty.org/glslang-12201278a1a05c0ce0b6eb6026c65cd3e9247aa041b1c260324bf29cee559dd23ba1.tar.gz:N-V-__8AABzkUgISeKGgXAzgtutgJsZc0-kkeqBBscJgMkvy \
		gobject:deps.files.ghostty.org/gobject-2025-09-20-20-1.tar.zst:gobject-0.3.0-Skun7ET3nQCqJhDL0KnF_X7M4L7o7JePsJBbrYpEr7UV \
		gtk4_layer_shell:deps.files.ghostty.org/gtk4-layer-shell-1.1.0.tar.gz:N-V-__8AALiNBAA-_0gprYr92CjrMj1I5bqNu0TSJOnjFNSr \
		harfbuzz:deps.files.ghostty.org/harfbuzz-11.0.0.tar.xz:N-V-__8AAG02ugUcWec-Ndp-i7JTsJ0dgF8nnJRUInkGLG7G \
		highway:deps.files.ghostty.org/highway-66486a10623fa0d72fe91260f96c892e41aceb06.tar.gz:N-V-__8AAGmZhABbsPJLfbqrh6JTHsXhY6qCaLAQyx25e0XE \
		imgui:deps.files.ghostty.org/imgui-1220bc6b9daceaf7c8c60f3c3998058045ba0c5c5f48ae255ff97776d9cd8bfc6402.tar.gz:N-V-__8AAH0GaQC8a52s6vfIxg88OZgFgEW6DFxfSK4lX_l3 \
		iterm2_themes:github.com/mbadolato/iTerm2-Color-Schemes/releases/download/release-20251110-150531-d5f3d53/ghostty-themes.tgz:N-V-__8AAPZCAwDJ0OsIn2nbr3FMvBw68oiv-hC2pFuY1eLN \
		jetbrains_mono:deps.files.ghostty.org/JetBrainsMono-2.304.tar.gz:N-V-__8AAIC5lwAVPJJzxnCAahSvZTIlG-HhtOvnM1uh-66x \
		libpng:deps.files.ghostty.org/libpng-1220aa013f0c83da3fb64ea6d327f9173fa008d10e28bc9349eac3463457723b1c66.tar.gz:N-V-__8AAJrvXQCqAT8Mg9o_tk6m0yf5Fz-gCNEOKLyTSerD \
		libxev:deps.files.ghostty.org/libxev-34fa50878aec6e5fa8f532867001ab3c36fae23e.tar.gz:libxev-0.0.0-86vtc4IcEwCqEYxEYoN_3KXmc6A9VLcm22aVImfvecYs \
		libxml2:deps.files.ghostty.org/libxml2-2.11.5.tar.gz:N-V-__8AAG3RoQEyRC2Vw7Qoro5SYBf62IHn3HjqtNVY6aWK \
		nerd_fonts_symbols_only:deps.files.ghostty.org/NerdFontsSymbolsOnly-3.4.0.tar.gz:N-V-__8AAMVLTABmYkLqhZPLXnMl-KyN38R8UVYqGrxqO26s \
		oniguruma:deps.files.ghostty.org/oniguruma-1220c15e72eadd0d9085a8af134904d9a0f5dfcbed5f606ad60edc60ebeccd9706bb.tar.gz:N-V-__8AAHjwMQDBXnLq3Q2QhaivE0kE2aD138vtX2Bq1g7c \
		pixels:deps.files.ghostty.org/pixels-12207ff340169c7d40c570b4b6a97db614fe47e0d83b5801a932dcd44917424c8806.tar.gz:N-V-__8AADYiAAB_80AWnH1AxXC0tql9thT-R-DYO1gBqTLc \
		plasma_wayland_protocols:deps.files.ghostty.org/plasma_wayland_protocols-12207e0851c12acdeee0991e893e0132fc87bb763969a585dc16ecca33e88334c566.tar.gz:N-V-__8AAKYZBAB-CFHBKs3u4JkeiT4BMvyHu3Y5aaWF3Bbs \
		sentry:deps.files.ghostty.org/sentry-1220446be831adcca918167647c06c7b825849fa3fba5f22da394667974537a9c77e.tar.gz:N-V-__8AAPlZGwBEa-gxrcypGBZ2R8Bse4JYSfo_ul8i2jlG \
		spirv_cross:deps.files.ghostty.org/spirv_cross-1220fb3b5586e8be67bc3feb34cbe749cf42a60d628d2953632c2f8141302748c8da.tar.gz:N-V-__8AANb6pwD7O1WG6L5nvD_rNMvnSc9Cpg1ijSlTYywv \
		utfcpp:deps.files.ghostty.org/utfcpp-1220d4d18426ca72fc2b7e56ce47273149815501d0d2395c2a98c726b31ba931e641.tar.gz:N-V-__8AAHffAgDU0YQmynL8K35WzkcnMUmBVQHQ0jlcKpjH \
		uucode:codeload.github.com/jacobsandlund/uucode/tar.gz/31655fba3c638229989cc524363ef5e3c7b580c1:uucode-0.1.0-ZZjBPicPTQDlG6OClzn2bPu7ICkkkyWrTB6aRsBr-A1E \
		uucode:codeload.github.com/jacobsandlund/uucode/tar.gz/5f05f8f83a75caea201f12cc8ea32a2d82ea9732:uucode-0.1.0-ZZjBPj96QADXyt5sqwBJUnhaDYs_qBeeKijZvlRa0eqM \
		vaxis:codeload.github.com/rockorager/libvaxis/tar.gz/7dbb9fd3122e4ffad262dd7c151d80d863b68558:vaxis-0.5.1-BWNV_LosCQAGmCCNOLljCIw6j6-yt53tji6n6rwJ2BhS \
		wayland:deps.files.ghostty.org/wayland-9cb3d7aa9dc995ffafdbdef7ab86a949d0fb0e7d.tar.gz:N-V-__8AAKrHGAAs2shYq8UkE6bGcR1QJtLTyOE_lcosMn6t \
		wayland_protocols:deps.files.ghostty.org/wayland-protocols-258d8f88f2c8c25a830c6316f87d23ce1a0f12d9.tar.gz:N-V-__8AAKw-DAAaV8bOAAGqA0-oD7o-HNIlPFYKRXSPT03S \
		wuffs:deps.files.ghostty.org/wuffs-122037b39d577ec2db3fd7b2130e7b69ef6cc1807d68607a7c232c958315d381b5cd.tar.gz:N-V-__8AAAzZywE3s51XfsLbP9eyEw57ae9swYB9aGB6fCMs \
		z2d:codeload.github.com/vancluever/z2d/tar.gz/v0.9.0:z2d-0.9.0-j5P_Hu-WFgA_JEfRpiFss6gdvcvS47cgOc0Via2eKD_T \
		zbench:codeload.github.com/hendriknielaender/zBench/tar.gz/7069bb9c3e2e4773ff93995a85238b8e08039ba0:zbench-0.11.0-YTdc75klAQDX2m3fa_EHmQA_wJDgBIGiWXXX091e3qUQ \
		zf:codeload.github.com/natecraddock/zf/tar.gz/3c52637b7e937c5ae61fd679717da3e276765b23:zf-0.10.3-OIRy8RuJAACKA3Lohoumrt85nRbHwbpMcUaLES8vxDnh \
		zig_js:deps.files.ghostty.org/zig_js-04db83c617da1956ac5adc1cb9ba1e434c1cb6fd.tar.gz:zig_js-0.0.0-rjCAV-6GAADxFug7rDmPH-uM_XcnJ5NmuAMJCAscMjhi \
		zig_objc:deps.files.ghostty.org/zig_objc-f356ed02833f0f1b8e84d50bed9e807bf7cdc0ae.tar.gz:zig_objc-0.0.0-Ir_Sp5gTAQCvxxR7oVIrPXxXwsfKgVP7_wqoOQrZjFeK \
		zig_wayland:deps.files.ghostty.org/zig_wayland-1b5c038ec10da20ed3a15b0b2a6db1c21383e8ea.tar.gz:wayland-0.5.0-dev-lQa1khrMAQDJDwYFKpdH3HizherB7sHo5dKMECfvxQHe \
		zigimg:codeload.github.com/ivanstepanovftw/zigimg/tar.gz/d7b7ab0ba0899643831ef042bd73289510b39906:zigimg-0.1.0-8_eo2vHnEwCIVW34Q14Ec-xUlzIoVg86-7FU2ypPtxms \
		zlib:deps.files.ghostty.org/zlib-1220fed0c74e1019b3ee29edae2051788b080cd96e90d56836eea857b0b966742efb.tar.gz:N-V-__8AAB0eQwD-0MdOEBmz7intriBReIsIDNlukNVoNu6o

do-test:
	zig build test

.include <bsd.port.mk>
