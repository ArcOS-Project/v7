<script lang="ts">
  import { tick } from "svelte";
  import { MinesweeperRuntime } from "./runtime";
  import type { MinesweeperCell } from "./types";
  import { UUID } from "$ts/util/uuid";

  const { process }: { process: MinesweeperRuntime } = $props();
  const { grid, DEBUG, flagsLeft, duration, failed } = process;

  let clicked = $state(false);

  function rightClick(e: MouseEvent, cell: MinesweeperCell) {
    e.preventDefault();
    process.toggleFlagged(cell);
  }

  function onmousedown() {
    clicked = true;
    setTimeout(() => {
      clicked = false;
    }, 500);
  }

  function onmouseup() {
    clicked = false;
  }
</script>

<div class="header">
  <div class="flags-left"><span>{$flagsLeft.toString().padStart(3)}</span></div>
  <button class="smiley" onclick={() => process.newGame()}>
    {#if $failed}
      <img src={process.getIconCached("MinesweeperDeadIcon")} alt="" />
    {:else if clicked}
      <img src={process.getIconCached("MinesweeperOohIcon")} alt="" />
    {:else}
      <img src={process.getIconCached("MinesweeperHappyIcon")} alt="" />
    {/if}
  </button>
  <div class="time"><span>{$duration}</span></div>
</div>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="grid" {onmousedown} {onmouseup}>
  {#each $grid as row}
    <div class="row">
      {#each row as cell (UUID())}
        <button
          class="cell"
          class:revealed={cell.revealed}
          class:unrevealed={!cell.revealed}
          class:flagged={cell.flagged}
          onclick={() => process.revealCell(cell)}
          oncontextmenu={(e) => rightClick(e, cell)}
        >
          {process.getCellCaption(cell)}
        </button>
      {/each}
    </div>
  {/each}
</div>
