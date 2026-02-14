<script lang="ts">
  import type { IShellRuntime } from "$interfaces/shell";
  import { contextProps } from "$ts/ui/context/actions.svelte";
  import { Daemon } from "$ts/daemon";
  import type { App } from "$types/app";

  const { app, process }: { app: App; process: IShellRuntime } = $props();

  let disabled = $state(false);

  async function launch() {
    disabled = true;
    await process.spawnApp(app.id, process.pid);
    disabled = false;
    process.startMenuOpened.set(false);
  }
</script>

{#if app && process}
  <button
    class="list-item"
    onclick={launch}
    {disabled}
    data-contextmenu="startmenu-app"
    use:contextProps={[app]}
    class:no-safemode={process.safeMode && app.noSafeMode}
  >
    <img src={Daemon?.icons?.getAppIcon(app)} alt="" />
    <span class="name">{app.metadata.name}</span>
  </button>
{/if}
