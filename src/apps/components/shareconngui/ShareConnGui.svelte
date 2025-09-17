<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
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
<div class="actions">
  <button class="joined" onclick={() => process.myShares()}>My shares</button>
  <button class="cancel" onclick={() => process.closeWindow()}>Cancel</button>
  <button class="suggested connect" disabled={!$shareUsername || !$shareName || !$sharePassword} onclick={() => process.go()}>
    Connect
  </button>
</div>
