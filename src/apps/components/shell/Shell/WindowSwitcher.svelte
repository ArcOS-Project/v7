<script lang="ts">
  import type { IShellRuntime } from "$interfaces/shell";
  import { onMount } from "svelte";

  const { process }: { process: IShellRuntime } = $props();
  const { windowSwitcherOpened, userPreferences, openedApps, windowSwitcherIndex } = process;

  let currentTitle = $state<string>("");

  onMount(() => {
    windowSwitcherIndex.subscribe((v) => {
      currentTitle = $openedApps[v]?.[1]?.windowTitle?.() ?? "Switch Windows";
      console.log($openedApps[v]?.[1]);
    });
  });
</script>

<div class="window-switcher-wrapper" class:show={$windowSwitcherOpened}>
  <div class="window-switcher shell-colored" class:colored={$userPreferences.shell.taskbar.colored}>
    <div class="current">{currentTitle}</div>
    <hr />
    <div class="options">
      {#each $openedApps as [pid, proc], i (pid)}
        <button class:selected={$windowSwitcherIndex === i}>
          <img src={process.getIconCached(proc.app.data.metadata.icon)} alt="" />
        </button>
      {/each}
    </div>
  </div>
</div>
