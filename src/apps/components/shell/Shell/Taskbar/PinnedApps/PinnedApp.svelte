<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import type { App } from "$types/app";

  const { appId, process }: { appId: string; process: ShellRuntime } = $props();

  let app: App | undefined = $state();

  $effect(() => {
    const renderer = process.handler.renderer;

    app = renderer?.getAppById(appId);
  });

  function spawn() {
    process.handler.renderer?.spawnApp(appId);
  }

  // TODO: context menu to unpin
</script>

{#if app && app.metadata}
  <button class="pinned-app" title={app.metadata.name} onclick={spawn}>
    <img src={app.metadata.icon} alt="" />
  </button>
{/if}
