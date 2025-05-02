<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import { formatBytes } from "$ts/fs/util";
  import type { ReadableStore } from "$ts/writable";
  import type { SharedDriveType } from "$types/shares";

  const { share, selection, process }: { share: SharedDriveType; selection: ReadableStore<string>; process: AdminPortalRuntime } =
    $props();
</script>

<div class="share-row">
  <div class="segment icon">
    <span class="lucide icon-hard-drive"></span>
  </div>
  <div class="segment name">{share.shareName}</div>
  <div class="segment size">{formatBytes(share.maxSize)}</div>
  <div class="segment members">{share.accessors.length}</div>
  <div class="segment locked" class:is-locked={share.locked}>{share.locked ? "Yes" : "No"}</div>
</div>
