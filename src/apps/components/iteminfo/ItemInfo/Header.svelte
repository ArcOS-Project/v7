<script lang="ts">
  import { DriveIcon, FolderIcon } from "$ts/images/filesystem";
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
  <img src={$info.name ? icon || DefaultMimeIcon : DriveIcon} alt="" />
  <div>
    <h1>{$info.name || $info.location.parent || $info.location.drive}</h1>
    {#if $info.name && ($info.location.parent || $info.location.drive)}
      <p>in {$info.location.parent || $info.location.drive}</p>
    {/if}
  </div>
  {#if $info.name}
    <button class="lucide icon-pencil-line" aria-label="Rename" onclick={() => process.renameItem()}></button>
  {/if}
</div>
