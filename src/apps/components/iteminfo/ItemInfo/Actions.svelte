<script lang="ts">
  import type { IItemInfoRuntime } from "$interfaces/runtimes/IItemInfoRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import type { ReadableStore } from "$types/writable";
  import type { ItemInfo } from "../types";

  const { info, process }: { info: ReadableStore<ItemInfo>; process: IItemInfoRuntime } = $props();
</script>

<ActionBar floating>
  {#snippet rightContent()}
    {#if $info.isShortcut}
      <ActionButton
        onclick={() => process.spawnOverlayApp("ShortcutProperties", process.pid, $info.location.fullPath, process.shortcut())}
      >
        Edit Shortcut...
      </ActionButton>
    {/if}
    <ActionButton onclick={() => process.open()}>Open</ActionButton>
    <ActionButton suggested onclick={() => process.closeWindow()}>Okay</ActionButton>
  {/snippet}
</ActionBar>
