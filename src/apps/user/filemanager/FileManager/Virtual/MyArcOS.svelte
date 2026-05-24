<script lang="ts">
  import type { IFileManagerRuntime } from "$interfaces/runtimes/IFileManagerRuntime";
  import type { IRecentFilesService } from "$interfaces/services/IRecentFilesService";
  import ServiceGate from "$lib/ServiceGate.svelte";
  import Drives from "./MyArcOS/Drives.svelte";
  import RecentFiles from "./MyArcOS/RecentFiles.svelte";

  const { process }: { process: IFileManagerRuntime } = $props();
</script>

<Drives {process} />

<ServiceGate id="RecentFilesSvc">
  {#snippet ifActive(service: IRecentFilesService)}
    <RecentFiles {process} {service} />
  {/snippet}
</ServiceGate>
