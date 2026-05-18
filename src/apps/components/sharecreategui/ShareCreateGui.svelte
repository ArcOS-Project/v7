<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import type { ShareCreateGuiRuntime } from "./runtime";

  const { process }: { process: ShareCreateGuiRuntime } = $props();
  const { shareName, sharePassword } = process;
</script>

<div class="header">
  <img src={process.getIconCached("ShareIcon")} alt="" />
  <h1>Create a share</h1>
  <p>Fill out the fields to create a share. Each share is 512MB. You can create 5 shares in total.</p>
</div>
<InfoBlock>
  <InfoRow>
    <Segment title="Share name">
      <input type="text" bind:value={$shareName} />
    </Segment>
  </InfoRow>
  <InfoRow>
    <Segment title="Share password">
      <input type="password" bind:value={$sharePassword} />
    </Segment>
  </InfoRow>
</InfoBlock>

<ActionBar floating>
  {#snippet leftContent()}
    <ActionButton onclick={() => process.myShares()}>My shares</ActionButton>
  {/snippet}
  {#snippet rightContent()}
    <ActionButton onclick={() => process.closeWindow()}>Cancel</ActionButton>
    <ActionButton onclick={() => process.go()} suggested disabled={!$shareName || !$sharePassword}>Create</ActionButton>
  {/snippet}
</ActionBar>
