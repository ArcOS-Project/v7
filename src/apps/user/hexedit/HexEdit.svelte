<script lang="ts">
  import Display from "./HexEdit/Display.svelte";
  import Offsets from "./HexEdit/Offsets.svelte";
  import type { HexEditRuntime } from "./runtime";

  const { process }: { process: HexEditRuntime } = $props();
  const { view, decoded } = process;
</script>

<div class="container">
  <Offsets {process} />
  <Display {process} />
  <div class="decoded">
    {#each $decoded as chars}
      <div>
        {#each chars as [char, index]}
          <span class={process.getByteClass($view[index])}>{char}</span>
        {/each}
      </div>
    {/each}
  </div>
</div>
