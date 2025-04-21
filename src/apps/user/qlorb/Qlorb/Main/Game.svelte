<script lang="ts">
  import { onMount } from "svelte";
  import type { QlorbRuntime } from "../../runtime";
  import type { Box } from "../../types";
  import BoxComponent from "./Game/Box.svelte";

  const { process }: { process: QlorbRuntime } = $props();
  const { Clicks, Score, Boxes } = process;

  let offset = $state(0);
  let boxes: Box[] = $state([]);

  Clicks.subscribe((v) => {
    const val = (v + 1) * (process.BOX_SIZE + process.BOX_SIZE / 2);

    offset = val / 2 - process.BOX_SIZE / 2;
    offset = -offset;
  });

  Score.subscribe((v) => {
    if (v < 0) process.Score.set(0);
  });

  Boxes.subscribe((v) => (boxes = v));

  onMount(() => {
    process.spawnBox(null, false, true);
  });

  function fail(e?: Event) {
    if (e) e.preventDefault();

    process.clickReset();
  }
</script>

<div class="game fullscreen">
  <div class="boxes" style="--boxsize: {process.BOX_SIZE}px; --boxes-offset: {offset}px;">
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <!-- svelte-ignore element_invalid_self_closing_tag -->
    <button class="misclick-trigger" onclick={fail} oncontextmenu={fail} />

    {#if boxes}
      {#each boxes as box}
        <BoxComponent {process} {box} />
      {/each}
    {/if}
  </div>
</div>
