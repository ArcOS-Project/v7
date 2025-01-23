<script lang="ts">
  import type { UserDaemon } from "$ts/server/user/daemon";
  import { getWallpaper } from "$ts/wallpaper";
  import type { UserTheme } from "$types/theme";

  const {
    id,
    theme,
    userDaemon,
  }: { id: string; theme: UserTheme; userDaemon: UserDaemon } = $props();
  const { preferences } = userDaemon;

  let wallpaper = $state("");
  let css = $state("");

  $effect(() => {
    getWall();
    css = userDaemon.getAppRendererStyle(theme.desktopAccent);
  });

  async function getWall() {
    wallpaper = (await getWallpaper(theme.desktopWallpaper)).thumb;
  }

  function apply() {
    userDaemon.applyThemeData(theme, id);
  }
</script>

<button
  class="user-theme builtin"
  class:selected={$preferences.currentThemeId === id}
  class:sharp={theme.sharpCorners}
  class:noani={theme.noAnimations}
  class:noglass={theme.noGlass}
  aria-label="Apply theme '{theme.name}'"
  title="{theme.name} by {theme.author} (version {theme.version})"
  onclick={apply}
  style="--url: url('{wallpaper}');"
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
