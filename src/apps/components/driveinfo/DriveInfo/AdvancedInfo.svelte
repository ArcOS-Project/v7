<script lang="ts">
  import type { FilesystemDrive } from "$ts/kernel/mods/fs/drive";

  const { drive }: { drive: FilesystemDrive } = $props();
</script>

<div class="advanced-info">
  <div class="row">
    <h1>ID</h1>
    <p>{drive.uuid}</p>
  </div>
  <div class="row">
    <h1>Mountpoint</h1>
    <p>{drive.driveLetter || drive.uuid}:/</p>
  </div>
  <div class="row">
    <h1>Label</h1>
    <p>{drive.label}</p>
  </div>
  <div class="row">
    <h1>Identifies As</h1>
    <p>{drive.IDENTIFIES_AS}</p>
  </div>
  <div class="row">
    <h1>Flags</h1>
    <p>
      {`${drive.BUSY ? "Busy" : ""} ${drive.FIXED ? "Fixed" : ""} ${drive.READONLY ? "Readonly" : ""} ${drive.REMOVABLE ? "Removable" : ""}`.trim()}
    </p>
  </div>
</div>
