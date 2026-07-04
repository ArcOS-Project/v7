<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import { Plural } from "$ts/util";
  import type { MineSweeperHighScoreRuntime } from "./runtime";

  const { process }: { process: MineSweeperHighScoreRuntime } = $props();
  const { Settings } = process.parent;
  const {winnerName} = process;
</script>

<div class="top">
  <p>You have the fastest time<br />for {$Settings.mode.toLowerCase()} level.<br />Please enter your name.</p>
  <input type="text" bind:value={$winnerName}>
</div>
<ActionBar>
  {#snippet rightContent()}
    <ActionButton onclick={() => process.save()} suggested disabled={!$winnerName}>Okay</ActionButton>
  {/snippet}
</ActionBar>
