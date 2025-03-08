<script lang="ts">
  import { FolderIcon } from "$ts/images/filesystem";
  import { DefaultMimeIcon } from "$ts/images/mime";
  import type { ReadableStore } from "$ts/writable";
  import { onMount } from "svelte";
  import type { ItemInfoRuntime } from "../runtime";
  import type { ItemInfo } from "../types";

  const { info, process }: { info: ReadableStore<ItemInfo>; process: ItemInfoRuntime } = $props();

  let icon = $state<string>();

  onMount(() => {
    icon = $info.isFolder ? FolderIcon : process.userDaemon?.getMimeIconByFilename($info.name);
  });
</script>

<div class="header">
  <img src={icon || DefaultMimeIcon} alt="" />
  <div>
    <h1>{$info.name}</h1>
    {#if $info.location.parent || $info.location.drive}
      <p>in {$info.location.parent || $info.location.drive}</p>
    {/if}
  </div>
  <button class="lucide icon-pencil-line" aria-label="Rename" onclick={() => process.renameItem()}></button>
</div>
