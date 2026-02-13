<script lang="ts">
  import type { IShellRuntime } from "$interfaces/shell";
  import { contextProps } from "$ts/context/actions.svelte";
  import { Daemon } from "$ts/server/user/daemon";
  import type { App } from "$types/app";
  import { onMount } from "svelte";

  const { appId, process }: { appId: string; process: IShellRuntime } = $props();

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
    <img src={Daemon?.icons?.getAppIcon(app) || process.getIconCached("ComponentIcon")} alt="" />
  </button>
{/if}
