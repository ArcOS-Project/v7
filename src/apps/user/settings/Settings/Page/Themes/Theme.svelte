<script lang="ts">
  import type { SettingsRuntime } from "$apps/user/settings/runtime";
  import { contextProps } from "$ts/context/actions.svelte";
  import { MessageBox } from "$ts/dialog";
  import { QuestionIcon } from "$ts/images/dialog";
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

  function deleteTheme() {
    MessageBox(
      {
        title: "Delete theme?",
        message:
          "Are you sure you want to delete this amazing theme? You can't undo this.",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Delete it",
            action: () => {
              userDaemon.deleteUserTheme(id);
            },
            suggested: true,
          },
        ],
        image: QuestionIcon,
      },
      process.pid,
      true
    );
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
  use:contextProps={[apply, deleteTheme]}
>
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
