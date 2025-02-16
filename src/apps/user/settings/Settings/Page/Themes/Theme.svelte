<script lang="ts">
  import type { SettingsRuntime } from "$apps/user/settings/runtime";
  import type { UserDaemon } from "$ts/server/user/daemon";
  import type { UserTheme } from "$types/theme";

  interface Props {
    id: string;
    theme: UserTheme;
    userDaemon: UserDaemon;
    isUser?: boolean;
    process: SettingsRuntime;
  }

  const { id, theme, userDaemon, isUser = false, process }: Props = $props();
  const { preferences } = userDaemon;

  let wallpaper = $state("");
  let css = $state("");

  $effect(() => {
    getWall();
    css = userDaemon.getAppRendererStyle(theme.desktopAccent);
  });

  async function getWall() {
    wallpaper = (await userDaemon.getWallpaper(theme.desktopWallpaper)).thumb;
  }

  function apply() {
    userDaemon.applyThemeData(theme, id);
  }
</script>

<button
  class="user-theme"
  class:selected={$preferences.currentThemeId === id}
  class:sharp={theme.sharpCorners}
  class:noani={theme.noAnimations}
  class:noglass={theme.noGlass}
  aria-label="Apply theme '{theme.name}'"
  title="{theme.name} by {theme.author} (version {theme.version})"
  onclick={apply}
  style="--url: url('{wallpaper}');"
  data-contextmenu={isUser ? "user-theme-option" : "builtin-theme-option"}
  data-id={id}
>
  <!-- <img src={wallpaper} alt={theme.name} /> -->
  <div
    class="fake-window shell-colored theme-{theme.desktopTheme}"
    style={css}
    class:colored={theme.taskbarColored}
  >
    <div class="fake-button"></div>
  </div>
  <div class="selected-overlay">
    <span class="lucide icon-check"></span>
  </div>
</button>
