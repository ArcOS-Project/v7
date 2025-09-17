<script lang="ts">
  import { Plural } from "$ts/util";
  import type { FileManagerRuntime } from "../../runtime";
  import type { QuotedDrive } from "../../types";

  const {
    name,
    itemCount,
    currentDrive,
    process,
  }: { name: string; itemCount: number; currentDrive: QuotedDrive; process: FileManagerRuntime } = $props();
</script>

<div class="multi-file">
  <div class="header">
    <img src={process.getIconCached("FolderIcon")} alt="" />
    <h1>Multiple files</h1>
    <p>in {name || currentDrive.data.label}</p>
  </div>

  <p>{itemCount} {Plural("item", itemCount)}</p>
</div>
