<script lang="ts">
  import type { FileManagerRuntime } from "$apps/user/filemanager/runtime";
  import { DriveIconsMulticolor } from "$apps/user/filemanager/store";
  import type { QuotedDrive } from "$apps/user/filemanager/types";
  import { contextProps } from "$ts/context/actions.svelte";
  import type { SharedDrive } from "$ts/shares/drive";

  const { drive, id, process }: { drive: QuotedDrive; id: string; process: FileManagerRuntime } = $props();
  const { userPreferences } = process;

  const isShare = drive.data.IDENTIFIES_AS === "share";
  const isLocked = isShare && (drive.data as SharedDrive)?.shareInfo?.locked;
  const usagePercentage = (100 / drive.quota.max) * drive.quota.used;
  const icon = process.getIconCached(DriveIconsMulticolor[drive.data.IDENTIFIES_AS] || "DriveIcon");
</script>

{#if !drive.data.HIDDEN || $userPreferences.appPreferences.fileManager?.showHiddenDrives}
  <button
    class="drive"
    onclick={() => process.navigate(`${drive.data.driveLetter || drive.data.uuid}:/`)}
    data-contextmenu={isShare ? "sidebar-shared-drive" : "sidebar-drive"}
    use:contextProps={[drive, `${drive.data.driveLetter || drive.data.uuid}:`, () => process.unmountDrive(drive.data, id)]}
    disabled={isLocked} 
  >
    <img src={icon} alt="" />
    <div>
      <h1>{drive.data.driveLetter ? `${drive.data.label} (${drive.data.driveLetter}:)` : drive.data.label}</h1>
      <p class="fs">{drive.data.FILESYSTEM_LONG}</p>

      {#if !drive.quota.unknown}
        <div class="usage">
          <div class="bar">
            <div class="inner" style="--w: {usagePercentage}%"></div>
          </div>
          <p class="percent">{usagePercentage.toFixed(0)}%</p>
        </div>
      {:else}
        <div class="usage">
          <div class="bar"></div>
        </div>
      {/if}
    </div>
  </button>
{/if}
