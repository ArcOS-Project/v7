<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import { contextProps } from "$ts/context/actions.svelte";
  import { ComponentIcon } from "$ts/images/general";
  import type { App } from "$types/app";
  import { onMount } from "svelte";

  const { appId, process }: { appId: string; process: ShellRuntime } = $props();

  let app: App | undefined = $state();

  onMount(() => {
    getApp();
  });

  async function getApp() {
    app = await process?.appStore()?.getAppById(appId);
  }

  function spawn() {
    process.spawnApp(appId, process.pid);
  }

  // TODO: context menu to unpin
</script>

{#if app && app.metadata}
  <button class="pinned-app" title={app.metadata.name} onclick={spawn} data-contextmenu="startmenu-app" use:contextProps={[app]}>
    <img src={process.userDaemon?.getAppIcon(app) || ComponentIcon} alt="" />
  </button>
{/if}
