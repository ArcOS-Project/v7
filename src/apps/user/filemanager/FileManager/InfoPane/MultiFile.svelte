<script lang="ts">
  import { FolderIcon } from "$ts/images/filesystem";
  import { Plural } from "$ts/util";
  import type { QuotedDrive } from "../../types";

  const { name, itemCount, currentDrive }: { name: string; itemCount: number; currentDrive: QuotedDrive } = $props();
</script>

<div class="multi-file">
  <div class="header">
    <img src={FolderIcon} alt="" />
    <h1>Multiple files</h1>
    <p>in {name || currentDrive.data.label}</p>
  </div>

  <p>{itemCount} {Plural("item", itemCount)}</p>
</div>
