<script lang="ts">
  import type { IFileManagerRuntime } from "$interfaces/runtimes/IFileManagerRuntime";
  import Icon from "$lib/Icon.svelte";
  import { Plural } from "$ts/util";
  import type { QuotedDrive } from "../../types";

  const {
    name,
    itemCount,
    currentDrive,
    process,
  }: { name: string; itemCount: number; currentDrive: QuotedDrive; process: IFileManagerRuntime } = $props();
</script>

<div class="multi-file">
  <div class="header">
    <Icon icon="FolderIcon" />
    <h1>Multiple files</h1>
    <p>in {name || currentDrive.data.label}</p>
  </div>

  <p>{itemCount} {Plural("item", itemCount)}</p>
</div>
