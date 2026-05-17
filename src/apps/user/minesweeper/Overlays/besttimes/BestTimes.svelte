<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import { Plural } from "$ts/util";
  import type { MinesweeperBestTimesRuntime } from "./runtime";

  const { process }: { process: MinesweeperBestTimesRuntime } = $props();
  const { Settings } = process.parent;
</script>

<div class="table-wrapper">
  <table>
    <tbody>
      {#each Object.entries($Settings.scores) as [difficulty, value] (difficulty)}
        <tr>
          <td>{difficulty}:</td>
          <td>{value.seconds} {Plural("second", value.seconds)}</td>
          <td>{value.name}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
<ActionBar>
  {#snippet rightContent()}
    <ActionButton onclick={() => process.resetScores()}>Reset scores</ActionButton>
    <ActionButton onclick={() => process.closeWindow()} suggested>Okay</ActionButton>
  {/snippet}
</ActionBar>
