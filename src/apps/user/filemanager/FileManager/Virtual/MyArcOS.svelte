<script lang="ts">
  import type { IFileManagerRuntime } from "$interfaces/runtimes/IFileManagerRuntime";
  import Drives from "./MyArcOS/Drives.svelte";
  import RecentFiles from "./MyArcOS/RecentFiles.svelte";

  const { process }: { process: IFileManagerRuntime } = $props();
</script>

<Drives {process} />
<RecentFiles {process} />
