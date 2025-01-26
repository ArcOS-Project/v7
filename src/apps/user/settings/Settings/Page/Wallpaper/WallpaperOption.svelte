<script lang="ts">
  import type { SettingsRuntime } from "$apps/user/settings/runtime";
  import { MessageBox } from "$ts/dialog";
  import { WarningIcon } from "$ts/images/dialog";
  import { TrashIcon } from "$ts/images/general";
  import type { UserDaemon } from "$ts/server/user/daemon";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import type { ContextItemCallback, ContextMenuItem } from "$types/context";
  import type { UserPreferencesStore } from "$types/user";
  import type { Wallpaper } from "$types/wallpaper";

  interface Props {
    id: string;
    userPreferences: UserPreferencesStore;
    userDaemon: UserDaemon;
    isLogin?: boolean;
    isUser?: boolean;
    process: SettingsRuntime;
  }

  const {
    id,
    userPreferences,
    userDaemon,
    isLogin = false,
    isUser = false,
    process,
  }: Props = $props();

  const options: ContextItemCallback = async () =>
    isUser
      ? [
          {
            caption: "Apply",
            default: true,
            action: () => apply(),
            separator: true,
          },
          {
            caption: "Remove",
            action: () => removeWallpaper(),
          },
          {
            caption: "Delete",
            icon: "",
            action: () => deleteWallpaper(),
          },
        ]
      : [
          {
            caption: "Apply",
            default: true,
            action: () => apply(),
          },
        ];

  let wallpaper = $state<Wallpaper>();

  $effect(() => {
    getWallpaper();
  });

  async function getWallpaper() {
    wallpaper = await userDaemon.getWallpaper(id);
  }

  function apply() {
    if (isLogin) $userPreferences.account.loginBackground = id;
    else $userPreferences.desktop.wallpaper = id;
  }

  function removeWallpaper() {
    if (!isUser) return;

    MessageBox(
      {
        title: "Remove wallpaper?",
        message:
          "Are you sure you want to remove this wallpaper? It won't be deleted from your filesystem.",
        image: WarningIcon,
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Remove",
            action: () => {
              delete $userPreferences.userWallpapers[id];
              $userPreferences = $userPreferences;
            },
            suggested: true,
          },
        ],
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );
  }

  function deleteWallpaper() {
    if (!isUser) return;

    MessageBox(
      {
        title: "Delete wallpaper?",
        message:
          "Are you sure you want to delete this wallpaper? This will also delete it from your filesystem.",
        image: TrashIcon,
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Delete forever",
            action: async () => {
              await process.userDaemon?.deleteLocalWallpaper(id);
            },
            suggested: true,
          },
        ],
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );
  }
</script>

{#if wallpaper}
  <button
    class="wallpaper-option"
    style="--url: url('{wallpaper.thumb || wallpaper.url}')"
    aria-label="Apply '{wallpaper.name}'"
    title="{wallpaper.name} by {wallpaper.author}"
    onclick={apply}
    class:selected={isLogin
      ? $userPreferences.account.loginBackground === id
      : $userPreferences.desktop.wallpaper === id}
    use:contextMenu={{ process, options }}
  >
    <div class="selected-overlay">
      <span class="lucide icon-check"></span>
    </div>
  </button>
{/if}
