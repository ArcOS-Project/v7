<script lang="ts">
  import type { IShellRuntime } from "$interfaces/shell";
  import { onDestroy } from "svelte";

  const { process }: { process: IShellRuntime } = $props();
  const { workspaceManagerOpened, userPreferences } = process;

  let isChanging = $state(false);
  let animTimeout = $state<NodeJS.Timeout>();

  function toggle() {
    $workspaceManagerOpened = !$workspaceManagerOpened;
  }

  function scroll(e: WheelEvent) {
    const down = e.deltaY > 0;
    const current = $userPreferences.workspaces.index;
    const desktops = $userPreferences.workspaces.desktops;

    if (down && current >= desktops.length - 1) return;
    else if (!down && 0 >= current) return;

    clearTimeout(animTimeout);

    if (down) $userPreferences.workspaces.index++;
    else $userPreferences.workspaces.index--;

    isChanging = true;

    animTimeout = setTimeout(() => {
      isChanging = false;
    }, 1000);
  }

  onDestroy(() => {
    clearTimeout(animTimeout);
  });
</script>

<button
  class="workspace-manager-button"
  class:active={$workspaceManagerOpened}
  onclick={toggle}
  onwheel={scroll}
  aria-label="Workspace Manager"
  title="Workspaces..."
>
  {#if isChanging}
    <span class="workspacebtnicon">{$userPreferences.workspaces.index + 1}</span>
  {:else}
    <span class="workspacebtnicon lucide icon-gallery-horizontal"></span>
  {/if}
</button>

<style>
  .workspacebtnicon {
    animation: show 0.4s;
  }

  @keyframes show {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>
