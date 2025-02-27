<script lang="ts">
  import type { ReadableStore } from "$ts/writable";
  import { onMount } from "svelte";
  import type { ItemInfoRuntime } from "../runtime";
  import type { ItemInfo } from "../types";
  import { FolderIcon } from "$ts/images/filesystem";

  const {
    info,
    process,
  }: { info: ReadableStore<ItemInfo>; process: ItemInfoRuntime } = $props();

  let icon = $state<string>();

  onMount(() => {
    icon = $info.isFolder
      ? FolderIcon
      : process.userDaemon?.getMimeIconByFilename($info.name);
  });
</script>

<div class="header">
  <img src={icon} alt="" />
  <div>
    <h1>{$info.name}</h1>
    {#if $info.location.parent}
      <p>in {$info.location.parent}</p>
    {/if}
  </div>
  <button
    class="lucide icon-pencil-line"
    aria-label="Rename"
    onclick={() =>
      process.notImplemented("Renaming items from properties dialog")}
  ></button>
</div>
