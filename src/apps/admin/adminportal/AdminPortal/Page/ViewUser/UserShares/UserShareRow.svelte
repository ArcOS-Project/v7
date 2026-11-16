<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import { formatBytes } from "$ts/util/fs";
  import type { SharedDriveType } from "$types/server/shares";
  import type { ReadableStore } from "$types/shared/writable";

  const {
    share,
    selection,
    process,
  }: { share: SharedDriveType; selection: ReadableStore<string>; process: IAdminPortalRuntime } = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<tr class="share-row" ondblclick={() => process.switchPage("viewShare", { share })}>
  <td class="icon-col">
    <span class="lucide icon-hard-drive"></span>
  </td>
  <td>{share.shareName}</td>
  <td>{formatBytes(share.maxSize)}</td>
  <td>{share.accessors.length}</td>
  <td class:clr-orange={share.locked}>{share.locked ? "Yes" : "No"}</td>
</tr>
