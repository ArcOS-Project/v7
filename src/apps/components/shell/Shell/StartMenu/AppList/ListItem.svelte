<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import { contextProps } from "$ts/context/actions.svelte";
  import type { App, ThirdPartyApp } from "$types/app";

  const { app, process }: { app: App | ThirdPartyApp; process: ShellRuntime } = $props();

  let disabled = $state(false);

  async function launch() {
    disabled = true;
    await process.spawnApp(app.id, process.pid);
    disabled = false;
    process.startMenuOpened.set(false);
  }
</script>

{#if app && process}
  <button class="list-item" onclick={launch} {disabled} data-contextmenu="startmenu-app" use:contextProps={[app]}>
    <img src={app.metadata.icon} alt="" />
    <span class="name">{app.metadata.name}</span>
  </button>
{/if}
