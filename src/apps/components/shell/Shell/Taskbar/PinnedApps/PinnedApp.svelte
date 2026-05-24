<script lang="ts">
  import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
<<<<<<< HEAD
  import Icon from "$lib/Icon.svelte";
=======
  import { Daemon } from "$ts/env";
>>>>>>> development
  import { contextProps } from "$ts/ui/context/actions.svelte";
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
    <Icon icon="@app::{app.id}" />
  </button>
{/if}
