<script lang="ts">
  import type { IItemInfoRuntime } from "$interfaces/runtimes/IItemInfoRuntime";
  import { Daemon } from "$ts/env";
  import type { ReadableStore } from "$types/shared/writable";
  import { onMount } from "svelte";
  import type { ItemInfo } from "../types";
  import Icon from "$lib/Icon.svelte";

  const { info, process }: { info: ReadableStore<ItemInfo>; process: IItemInfoRuntime } = $props();

  let icon = $state<string>();

  onMount(() => {
    const assoc = Daemon?.assoc?.getFileAssociation($info.name);
    icon = $info.isFolder ? "FolderIcon" : assoc?.icon || "DefaultMimeIcon";
  });
</script>

<div class="header">
  <Icon icon={$info.name ? icon || "DefaultMimeIcon" : "DriveIcon"} />
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
