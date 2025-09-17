<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import { contextProps } from "$ts/context/actions.svelte";
  import type { App } from "$types/app";
  import { onMount } from "svelte";

  const { appId, process }: { appId: string; process: ShellRuntime } = $props();

  let app: App | undefined = $state();

  onMount(() => {
    getApp();
  });

  async function getApp() {
    app = process?.appStore()?.getAppSynchronous(appId);
  }

  function spawn() {
    process.spawnApp(appId, process.pid);
  }
</script>

{#if app && app.metadata}
  <button class="pinned-app" title={app.metadata.name} onclick={spawn} data-contextmenu="startmenu-app" use:contextProps={[app]}>
    <img src={process.userDaemon?.getAppIcon(app) || process.getIconCached("ComponentIcon")} alt="" />
  </button>
{/if}
