<script lang="ts">
  import { derived, get } from "svelte/store";
  import type { ShellRuntime } from "../../runtime";
  import { onDestroy } from "svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { workspaceManagerOpened, userPreferences } = process;

  let workspaceIndex = derived(userPreferences, (v) => v.workspaces.index);
  let isChanging = $state(false);
  let animTimeout: number = -1;

  $effect(() => {
    $workspaceIndex;
    isChanging = true;
    animTimeout = Number(
      setTimeout(() => {
        isChanging = false;
      }, 350)
    );
  });

  function toggle() {
    $workspaceManagerOpened = !$workspaceManagerOpened;
  }

  function scroll(e: WheelEvent) {
    const down = e.deltaY > 0;
    const current = get(workspaceIndex);
    const desktops = userPreferences().workspaces.desktops;

    if (!down && current >= desktops.length - 1) return;
    else if (down && 0 >= current) return;

    userPreferences.update((v) => {
      if (!down) v.workspaces.index += 1;
      else v.workspaces.index -= 1;

      return v;
    });
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
    <span class="workspacebtnicon">{$workspaceIndex + 1}</span>
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
