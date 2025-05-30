<script lang="ts">
  import type { FileManagerRuntime } from "$apps/user/filemanager/runtime";
  import type { QuotedDrive } from "$apps/user/filemanager/types";
  import { contextProps } from "$ts/context/actions.svelte";
  import { DriveIcon } from "$ts/images/filesystem";
  import { onMount } from "svelte";

  const { process }: { process: FileManagerRuntime } = $props();
  const { drives, userPreferences } = process;

  let sorted = $state<[string, QuotedDrive][]>([]);

  onMount(() => {
    $userPreferences.appPreferences.fileManager.myExpandDrives ??= true;
  });

  drives.subscribe((v) => {
    sorted = Object.entries(v).sort((a, b) =>
      a[1].data.driveLetter?.toLowerCase() || "~" > (b[1].data.driveLetter?.toLowerCase() || "~") ? -1 : 0,
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
        <button
          class="drive"
          onclick={() => process.navigate(`${drive.data.driveLetter || drive.data.uuid}:/`)}
          data-contextmenu={drive.data.IDENTIFIES_AS === "share" ? "sidebar-shared-drive" : "sidebar-drive"}
          use:contextProps={[drive, `${drive.data.driveLetter || drive.data.uuid}:`, () => process.unmountDrive(drive.data, id)]}
        >
          <img src={DriveIcon} alt="" />
          <div>
            <h1>{drive.data.driveLetter ? `${drive.data.label} (${drive.data.driveLetter}:)` : drive.data.label}</h1>
            <p class="fs">{drive.data.FILESYSTEM_LONG}</p>
            <div class="usage">
              <div class="bar">
                <div class="inner" style="--w: {(100 / drive.quota.max) * drive.quota.used}%"></div>
              </div>
              <p class="percent">{((100 / drive.quota.max) * drive.quota.used).toFixed(0)}%</p>
            </div>
          </div>
        </button>
      {/each}
    </div>
  {/if}
</section>
