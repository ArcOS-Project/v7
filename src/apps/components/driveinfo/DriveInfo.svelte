<script lang="ts">
  import { DriveIconsMulticolor } from "$apps/user/filemanager/store";
  import type { IDriveInfoRuntime } from "$interfaces/runtimes/IDriveInfoRuntime";
  import CircularProgress from "$lib/CircularProgress.svelte";
  import Spinner from "$lib/Spinner.svelte";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import AdvancedInfo from "./DriveInfo/AdvancedInfo.svelte";
  import Quota from "./DriveInfo/Quota.svelte";
  import Usage from "./DriveInfo/Usage.svelte";

  const { process }: { process: IDriveInfoRuntime } = $props();
  const { usage, quota, drive, isUserFs } = process;

  let advanced = $state(!isUserFs);
</script>

{#if quota && drive}
  <div class="header">
    {#if quota.max > 0}
      <CircularProgress max={quota.max} value={quota.used} size={84} strokeWidth={8} />
    {:else}
      <img src={process.getIconCached(DriveIconsMulticolor[drive.IDENTIFIES_AS])} alt="" class="no-quota" />
    {/if}
    <h1>{drive.label}</h1>
    <p>{drive.FILESYSTEM_LONG} ({drive.FILESYSTEM_SHORT})</p>
  </div>
  <Quota {quota} {process} />
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

<ActionBar floating>
  {#snippet leftContent()}
    {#if isUserFs}
      <ActionButton onclick={() => (advanced = !advanced)}>{advanced ? "%actions.simple%" : "%actions.advanced%"}</ActionButton
    >
    {/if}
  {/snippet}
  {#snippet rightContent()}
    <ActionButton suggested onclick={() => process.closeWindow()}>%general.close%</ActionButton>
  {/snippet}
</ActionBar>
