<script lang="ts">
  import type { FileManagerRuntime } from "$apps/user/filemanager/runtime";
  import type { QuotedDrive } from "$apps/user/filemanager/types";
  import { contextProps } from "$ts/context/actions.svelte";
  import { SharedDrive } from "$ts/shares/drive";
  import { onMount } from "svelte";
  import Drive from "./Drives/Drive.svelte";

  const { process }: { process: FileManagerRuntime } = $props();
  const { drives, userPreferences } = process;

  let sorted = $state<[string, QuotedDrive][]>([]);

  onMount(() => {
    $userPreferences.appPreferences.fileManager.myExpandDrives ??= true;
  });

  drives.subscribe((v) => {
    sorted = Object.entries(v).sort((a, b) =>
      a[1].data.driveLetter?.toLowerCase() || "~" > (b[1].data.driveLetter?.toLowerCase() || "~") ? -1 : 0
    );
  });
</script>

<section class="drives">
  <button
    class="expander"
    onclick={() =>
      ($userPreferences.appPreferences.fileManager.myExpandDrives = !$userPreferences.appPreferences.fileManager.myExpandDrives)}
    class:expanded={$userPreferences.appPreferences.fileManager.myExpandDrives}
  >
    <span>Mounted Drives</span>
    <span class="lucide icon-chevron-down"></span>
  </button>
  {#if $userPreferences.appPreferences.fileManager.myExpandDrives}
    <div class="content">
      {#each sorted as [id, drive] (`${id}-${drive.data.uuid}`)}
        <Drive {id} {drive} {process} />
      {/each}
    </div>
  {/if}
</section>
