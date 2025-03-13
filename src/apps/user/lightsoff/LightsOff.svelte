<script lang="ts">
  import Light from "./LightsOff/Light.svelte";
  import Stats from "./LightsOff/Stats.svelte";
  import type { LightsOffRuntime } from "./runtime";

  const { process }: { process: LightsOffRuntime } = $props();
  const { Transitioning, Grid } = process;
</script>

<Stats app={process.app.data} {process} />
<div class="grid" class:transitioning={$Transitioning}>
  {#each $Grid as row, y}
    {#each row as light, x}
      <Light {light} {x} {y} {process} />
    {/each}
  {/each}
</div>

<style scoped>
  div.grid {
    display: grid;
    grid-template-columns: repeat(5, 80px);
    grid-template-rows: repeat(5, 80px);
    grid-gap: 5px;
    margin: 10px;
    transition: opacity 0.3s;
  }

  div.grid.transitioning {
    opacity: 0 !important;
  }
</style>
