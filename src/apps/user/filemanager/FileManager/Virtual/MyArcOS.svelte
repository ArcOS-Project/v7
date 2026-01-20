<script lang="ts">
  import type { FileManagerRuntime } from "../../runtime";
  import Drives from "./MyArcOS/Drives.svelte";
  import RecentFiles from "./MyArcOS/RecentFiles.svelte";

  const { process }: { process: FileManagerRuntime } = $props();
</script>

<Drives {process} />
<RecentFiles {process} />
