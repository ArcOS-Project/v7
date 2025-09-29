<script lang="ts">
  import CircularProgress from "$lib/CircularProgress.svelte";
  import Spinner from "$lib/Spinner.svelte";
  import AdvancedInfo from "./DriveInfo/AdvancedInfo.svelte";
  import Quota from "./DriveInfo/Quota.svelte";
  import Usage from "./DriveInfo/Usage.svelte";
  import type { DriveInfoRuntime } from "./runtime";
  const { process }: { process: DriveInfoRuntime } = $props();
  const { usage, quota, drive, isUserFs } = process;

  let advanced = $state(!isUserFs);
</script>

{#if quota && drive}
  <div class="header">
    <CircularProgress max={quota.max} value={quota.used} size={84} strokeWidth={8} />
    <h1>{drive.label}</h1>
    <p>{drive.FILESYSTEM_LONG} ({drive.FILESYSTEM_SHORT})</p>
  </div>
  <Quota {quota} />
  {#if advanced}
    <AdvancedInfo {drive} />
  {:else if usage}
    <Usage {usage} />
  {/if}
{:else}
  <div class="loading">
    <Spinner height={32} />
  </div>
{/if}
<div class="actions">
  {#if isUserFs}
    <button class="advanced" onclick={() => (advanced = !advanced)}>{advanced ? "%actions.simple%" : "%actions.advanced%"}</button
    >
  {/if}
  <button class="suggested" onclick={() => process.closeWindow()}>%general.close%</button>
</div>
