<script lang="ts">
  import { Daemon } from "$ts/server/user/daemon";
  import { onMount } from "svelte";
  import type { ItemInfoRuntime } from "../runtime";
  import type { ItemInfo } from "../types";
  import type { ReadableStore } from "$types/writable";

  const { info, process }: { info: ReadableStore<ItemInfo>; process: ItemInfoRuntime } = $props();

  let icon = $state<string>();

  onMount(() => {
    const assoc = Daemon?.assoc?.getFileAssociation($info.name);
    icon = $info.isFolder ? process.getIconCached("FolderIcon") : assoc?.icon || process.getIconCached("DefaultMimeIcon");
  });
</script>

<div class="header">
  <img src={$info.name ? icon || process.getIconCached("DefaultMimeIcon") : process.getIconCached("DriveIcon")} alt="" />
  <div>
    <h1>{$info.name || $info.location.parent || $info.location.drive}</h1>
    {#if $info.name && ($info.location.parent || $info.location.drive)}
      <p>in {$info.location.parent || $info.location.drive}</p>
    {/if}
  </div>
  {#if $info.name}
    <button class="lucide icon-pencil-line" title="Rename item" aria-label="Rename" onclick={() => process.renameItem()}></button>
  {/if}
</div>
