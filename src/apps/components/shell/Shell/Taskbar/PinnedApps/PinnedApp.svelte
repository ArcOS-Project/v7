<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import { ComponentIcon } from "$ts/images/general";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import type { App, ThirdPartyApp } from "$types/app";
  import type { ContextItemCallback } from "$types/context";

  const { appId, process }: { appId: string; process: ShellRuntime } = $props();

  let app: App | ThirdPartyApp | undefined = $state();

  const options: ContextItemCallback = async () => [
    {
      caption: app?.metadata.name || "Application",
      image: app?.metadata.icon || ComponentIcon,
      action: () => {
        spawn();
      },
      separator: true,
    },
    {
      caption: "Unpin",
      icon: "pin-off",
      action: () => {
        process.unpinApp(appId);
      },
    },
  ];

  $effect(() => {
    getApp();
  });

  async function getApp() {
    app = await process?.userDaemon?.appStore?.getAppById(appId);
  }

  function spawn() {
    process.spawnApp(appId);
  }

  // TODO: context menu to unpin
</script>

{#if app && app.metadata}
  <button
    class="pinned-app"
    title={app.metadata.name}
    onclick={spawn}
    use:contextMenu={{ process, options }}
  >
    <img src={app.metadata.icon} alt="" />
  </button>
{/if}
