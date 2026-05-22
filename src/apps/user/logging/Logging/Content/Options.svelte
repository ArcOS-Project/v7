<script lang="ts">
  import type { ILoggingRuntime } from "$interfaces/runtimes/ILoggingRuntime";
  import Filter from "./Options/Filter.svelte";

  const { process }: { process: ILoggingRuntime } = $props();
  const { currentSource, isArchive } = process;
</script>

<div class="options" class:archive={isArchive}>
  <div class="current-source">
    <div class="pill">
      <span class="lucide icon-scroll-text" class:icon-archive={isArchive}></span>
      <span>{isArchive ? "Archive" : "Group"}</span>
    </div>
    <img src={process.getIconCached("FolderIcon")} alt="" />
    <span>{$currentSource}</span>
  </div>
  <div class="sep"></div>
  <Filter {process} />
</div>
