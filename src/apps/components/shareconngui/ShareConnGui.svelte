<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import type { ShareConnGuiRuntime } from "./runtime";

  const { process }: { process: ShareConnGuiRuntime } = $props();
  const { shareUsername, shareName, sharePassword } = process;
</script>

<div class="header">
  <img src={process.getIconCached("ShareIcon")} alt="" />
  <h1>Join a share</h1>
  <p>Enter the information to join a share or click 'Joined' to view the shares you've joined already.</p>
</div>
<div class="fields">
  <InfoBlock>
    <InfoRow>
      <Segment title="Owner of the share">
        <input type="text" bind:value={$shareUsername} />
      </Segment>
    </InfoRow>
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
</div>
<ActionBar floating>
  {#snippet leftContent()}
    <ActionButton onclick={() => process.myShares()}>My shares</ActionButton>
  {/snippet}
  {#snippet rightContent()}
    <ActionButton onclick={() => process.closeWindow()}>Cancel</ActionButton>
    <ActionButton onclick={() => process.go()} disabled={!$shareUsername || !$shareName || !$sharePassword} suggested>
      Connect
    </ActionButton>
  {/snippet}
</ActionBar>
