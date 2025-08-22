<script lang="ts">
  import { DriveIcon } from "$ts/images/filesystem";
  import type { ItemInfoRuntime } from "../../runtime";

  const { process }: { process: ItemInfoRuntime } = $props();
  const { drive } = process;
</script>

{#if drive}
  <div class="header">
    <img src={DriveIcon} alt="" />
    <div>
      <h1>{drive.label}</h1>
      {#if drive.FILESYSTEM_LONG}
        <p>{drive.FILESYSTEM_LONG}</p>
      {/if}
    </div>
    <button class="unmount" disabled={!drive.REMOVABLE} onclick={() => process.unmount()}>Unmount</button>
  </div>
{/if}
