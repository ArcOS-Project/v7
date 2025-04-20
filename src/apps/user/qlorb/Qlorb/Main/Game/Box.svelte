<script lang="ts">
  import type { QlorbRuntime } from "$apps/user/qlorb/runtime";
  import type { Box } from "$apps/user/qlorb/types";
  import { onMount } from "svelte";

  const { process, box }: { process: QlorbRuntime; box: Box } = $props();

  const { Clicks } = process;

  let button: HTMLButtonElement;
  let disabled = $state(false);
  let offset = $state(-65);
  let rightclicked = $state(false);

  onMount(() => {
    setTimeout(() => (offset = box.yoffset), 100);
  });

  Clicks.subscribe((v) => v == 0 && setTimeout(() => (disabled = false)));

  function score() {
    process.ScorePoints(box, button);
    disabled = true;
  }

  function negativeScore(e: Event) {
    e.preventDefault();

    process.ScoreNegativePoints(box, button);

    rightclicked = true;
    disabled = true;
  }
</script>

<button
  class="box {box.class}"
  style="--offset: {offset}px;"
  class:triggered={disabled}
  onclick={score}
  oncontextmenu={negativeScore}
  {disabled}
  bind:this={button}
>
  <span
    class="modifier-floaty"
    class:positive={(rightclicked ? -box.modifier : box.modifier) >= 0}
    class:negative={(rightclicked ? -box.modifier : box.modifier) < 0}
  >
    {rightclicked ? -box.modifier : box.modifier}
  </span>
</button>
