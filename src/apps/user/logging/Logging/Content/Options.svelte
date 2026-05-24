<script lang="ts">
  import type { ILoggingRuntime } from "$interfaces/runtimes/ILoggingRuntime";
<<<<<<< HEAD
  import Icon from "$lib/Icon.svelte";
=======
>>>>>>> development
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
    <Icon icon="FolderIcon" />
    <span>{$currentSource}</span>
  </div>
  <div class="sep"></div>
  <Filter {process} />
</div>
