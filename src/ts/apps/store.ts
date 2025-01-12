import { ArcShellApp } from "$apps/components/shell/metadata";
import { WallpaperApp } from "$apps/components/wallpaper/metadata";
import { TestApp } from "$apps/user/test/metadata";
import type { App } from "$types/app";

export const BuiltinApps: App[] = [WallpaperApp, ArcShellApp, TestApp];
