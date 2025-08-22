<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import { ShareIcon } from "$ts/images/filesystem";
  import type { ShareCreateGuiRuntime } from "./runtime";

  const { process }: { process: ShareCreateGuiRuntime } = $props();
  const { shareName, sharePassword } = process;
</script>

<div class="header">
  <img src={ShareIcon} alt="" />
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

<div class="actions">
  <button class="joined" onclick={() => process.myShares()}>My shares</button>
  <button class="cancel" onclick={() => process.closeWindow()}>Cancel</button>
  <button class="suggested" onclick={() => process.go()} disabled={!$shareName || !$sharePassword}>Create</button>
</div>
