<script lang="ts">
  import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
  import Icon from "$lib/Icon.svelte";
  import { Daemon } from "$ts/env";
  import { contextProps } from "$ts/ui/context/actions.svelte";
  import type { ArcShortcut } from "$types/system/shortcut";

  const { shortcut, process }: { shortcut: ArcShortcut; process: IShellRuntime } = $props();

  const app = Daemon?.appStorage()?.getAppSynchronous(shortcut.target);

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
    data-contextmenu="startmenu-app"
    use:contextProps={[app]}
    class:no-safemode={process.safeMode && app.noSafeMode}
  >
    <Icon icon="@app::{app.id}" />
    <span class="name">{shortcut.name === `_${app.id}` ? app.metadata.name : shortcut.name}</span>
  </button>
{/if}
