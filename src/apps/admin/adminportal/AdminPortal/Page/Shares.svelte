<script lang="ts">
  import { formatBytes } from "$ts/fs/util";
  import type { AdminPortalRuntime } from "../../runtime";
  import type { SharesData } from "../../types";

  const { process, data }: { process: AdminPortalRuntime; data: SharesData } = $props();
  const { shares } = data;
</script>

<div class="share-list">
  <div class="row header">
    <div class="segment icon">
      <span class="lucide icon-hard-drive"></span>
    </div>
    <div class="segment name">Share name</div>
    <div class="segment owner">Owner name</div>
    <div class="segment members">Members</div>
    <div class="segment size">Size</div>
    <div class="segment locked">LCK</div>
  </div>
  {#each shares as share (share._id)}
    <div class="row">
      <div class="segment icon">
        <span class="lucide icon-hard-drive"></span>
      </div>
      <div class="segment name">{share.shareName}</div>
      <div class="segment owner">{share.ownerName || "Unknown"}</div>
      <div class="segment members">{share.accessors.length}</div>
      <div class="segment size">{formatBytes(share.maxSize)}</div>
      <div class="segment locked">{share.locked ? "Yes" : "No"}</div>
    </div>
  {/each}
</div>
