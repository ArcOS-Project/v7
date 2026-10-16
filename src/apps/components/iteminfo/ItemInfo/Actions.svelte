<script lang="ts">
  import type { IItemInfoRuntime } from "$interfaces/runtimes/IItemInfoRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import type { ReadableStore } from "$types/shared/writable";
  import type { ItemInfo } from "../types";

  const { info, process }: { info: ReadableStore<ItemInfo>; process: IItemInfoRuntime } = $props();
</script>

<ActionBar floating>
  {#snippet rightContent()}
    {#if $info.isShortcut}
      <ActionButton
        onclick={() => process.spawnOverlayApp("ShortcutProperties", process.pid, $info.location.fullPath, process.shortcut())}
      >
        %actions.editShortcut%
      </ActionButton>
    {/if}
    <ActionButton onclick={() => process.open()}>%general.open%</ActionButton>
    <ActionButton suggested onclick={() => process.closeWindow()}>%general.okay%</ActionButton>
  {/snippet}
</ActionBar>
