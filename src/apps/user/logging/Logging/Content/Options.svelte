<script lang="ts">
  import { FolderIcon } from "$ts/images/filesystem";
  import type { LoggingRuntime } from "../../runtime";
  import Filter from "./Options/Filter.svelte";

  const { process }: { process: LoggingRuntime } = $props();
  const { currentSource } = process;
</script>

<div class="options">
  <div class="current-source">
    <div class="pill">
      <span class="lucide icon-scroll-text"></span>
      <span>{$currentSource === "*" ? "All" : "Group"}</span>
    </div>
    <img src={FolderIcon} alt="" />
    <span>{$currentSource == "*" ? "All Log Items" : $currentSource}</span>
  </div>
  <div class="sep"></div>
  <Filter {process} />
</div>
