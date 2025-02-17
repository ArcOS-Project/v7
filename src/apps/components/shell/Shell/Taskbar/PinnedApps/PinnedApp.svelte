<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import type { App, ThirdPartyApp } from "$types/app";

  const { appId, process }: { appId: string; process: ShellRuntime } = $props();

  let app: App | ThirdPartyApp | undefined = $state();

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
  <button class="pinned-app" title={app.metadata.name} onclick={spawn}>
    <img src={app.metadata.icon} alt="" />
  </button>
{/if}
