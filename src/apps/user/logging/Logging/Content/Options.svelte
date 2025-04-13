<script lang="ts">
  import { FolderIcon } from "$ts/images/filesystem";
  import type { LoggingRuntime } from "../../runtime";
  import Filter from "./Options/Filter.svelte";

  const { process }: { process: LoggingRuntime } = $props();
  const { currentSource, isArchive } = process;
</script>

<div class="options" class:archive={isArchive}>
  <div class="current-source">
    <div class="pill">
      <span class="lucide icon-scroll-text" class:icon-archive={isArchive}></span>
      <span>{isArchive ? "Archive" : "Group"}</span>
    </div>
    <img src={FolderIcon} alt="" />
    <span>{$currentSource}</span>
  </div>
  <div class="sep"></div>
  <Filter {process} />
</div>
