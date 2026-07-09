<script lang="ts">
  import type { IItemInfoRuntime } from "$interfaces/runtimes/IItemInfoRuntime";
  import Icon from "$lib/Icon.svelte";
  import { Daemon } from "$ts/env";
  import type { ReadableStore } from "$types/shared/writable";
  import { onMount } from "svelte";
  import type { ItemInfo } from "../types";

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
      <p>%subtitle({$info.location.parent || $info.location.drive})%</p>
    {/if}
  </div>
  {#if $info.name}
    <button class="lucide icon-pencil-line" title="%renameItem%" aria-label="%" onclick={() => process.renameItem()}></button>
  {/if}
</div>
