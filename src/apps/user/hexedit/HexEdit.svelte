<script lang="ts">
  import Display from "./HexEdit/Display.svelte";
  import Offsets from "./HexEdit/Offsets.svelte";
  import type { HexEditRuntime } from "./runtime";

  const { process }: { process: HexEditRuntime } = $props();
  const { view, decoded, hexRows } = process;
  const ROWS = 16;

  let scrollIndex = $state<number>(0);

  function onwheel(e: WheelEvent) {
    const isDown = e.deltaY > 0;

    if (isDown && scrollIndex + ROWS + 1 <= $hexRows.length - 1) {
      scrollIndex++;
    } else if (!isDown && scrollIndex - 1 >= 0) {
      scrollIndex--;
    }
  }
</script>

<div class="container" {onwheel}>
  <Offsets {process} startIndex={scrollIndex} endIndex={scrollIndex + ROWS} />
  <Display {process} startIndex={scrollIndex} endIndex={scrollIndex + ROWS} />
  <div class="decoded">
    {#each $decoded.slice(scrollIndex, scrollIndex + ROWS) as chars, rowIndex}
      <div>
        {#each chars as [char, index], charIndex}
          <span
            class="{process.getByteClass($view[index])} {scrollIndex +
              rowIndex * chars.length +
              charIndex}">{char}</span
          >
        {/each}
      </div>
    {/each}
  </div>
</div>
