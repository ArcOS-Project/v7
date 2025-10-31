<script lang="ts">
  import type { FilesystemDrive } from "$ts/drives/drive";

  const { drive }: { drive: FilesystemDrive } = $props();
</script>

<div class="advanced-info">
  <div class="row">
    <h1>%advanced.id%</h1>
    <p>{drive.uuid}</p>
  </div>
  <div class="row">
    <h1>%advanced.mountpoint%</h1>
    <p>{drive.driveLetter || drive.uuid}:/</p>
  </div>
  <div class="row">
    <h1>%advanced.label%</h1>
    <p>{drive.label}</p>
  </div>
  <div class="row">
    <h1>%advanced.identifiesAs%</h1>
    <p>{drive.IDENTIFIES_AS}</p>
  </div>
  <div class="row">
    <h1>%advanced.flags%</h1>
    <p>
      {`${drive.BUSY ? "%advanced.busy%" : ""} ${drive.FIXED ? "%advanced.fixed%" : ""} ${drive.READONLY ? "%advanced.readonly%" : ""} ${drive.REMOVABLE ? "%advanced.removable%" : ""}`.trim()}
    </p>
  </div>
</div>
