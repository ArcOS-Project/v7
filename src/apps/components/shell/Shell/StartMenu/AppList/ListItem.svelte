<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import type { App } from "$types/app";

  const { app, process }: { app: App; process: ShellRuntime } = $props();

  let disabled = $state(false);

  async function launch() {
    disabled = true;
    await process.handler.renderer?.spawnApp(app.id, process.pid);
    disabled = false;
    process.startMenuOpened.set(false);
  }
</script>

{#if app && process}
  <button class="list-item" onclick={launch} {disabled}>
    <img src={app.metadata.icon} alt="" />
    <span class="name">{app.metadata.name}</span>
  </button>
{/if}
