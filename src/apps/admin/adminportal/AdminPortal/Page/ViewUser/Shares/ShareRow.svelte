<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/admin";
  import { formatBytes } from "$ts/util/fs";
  import type { SharedDriveType } from "$types/shares";
  import type { ReadableStore } from "$types/writable";

  const {
    share,
    selection,
    process,
  }: { share: SharedDriveType; selection: ReadableStore<string>; process: IAdminPortalRuntime } = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="share-row" ondblclick={() => process.switchPage("viewShare", { share })}>
  <div class="segment icon">
    <span class="lucide icon-hard-drive"></span>
  </div>
  <div class="segment name">{share.shareName}</div>
  <div class="segment size">{formatBytes(share.maxSize)}</div>
  <div class="segment members">{share.accessors.length}</div>
  <div class="segment locked" class:is-locked={share.locked}>{share.locked ? "Yes" : "No"}</div>
</div>
