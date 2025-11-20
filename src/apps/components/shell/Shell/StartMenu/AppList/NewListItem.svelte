<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import { contextMenu } from "$ts/context/actions.svelte";
  import type { ArcShortcut } from "$types/shortcut";

  const { shortcut, process }: { shortcut: ArcShortcut; process: ShellRuntime } = $props();

  const app = process.userDaemon?.appStorage()?.getAppSynchronous(shortcut.target);

  let disabled = $state(false);

  async function launch() {
    disabled = true;
    await process.spawnApp(shortcut.target, process.pid);
    disabled = false;
    process.startMenuOpened.set(false);
  }
</script>

{#if app && process}
  <button
    class="list-item"
    onclick={launch}
    {disabled}
    use:contextMenu={[[], process]}
    class:no-safemode={process.safeMode && app.noSafeMode}
  >
    <img src={process.userDaemon?.icons?.getAppIcon(app)} alt="" />
    <span class="name">{app.metadata.name}</span>
  </button>
{/if}
