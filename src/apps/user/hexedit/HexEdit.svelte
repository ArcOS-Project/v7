<script lang="ts">
  import Display from "./HexEdit/Display.svelte";
  import Offsets from "./HexEdit/Offsets.svelte";
  import StatusBar from "./HexEdit/StatusBar.svelte";
  import VirtualScrollbar from "./HexEdit/VirtualScrollbar.svelte";
  import type { HexEditRuntime } from "./runtime";

  const { process }: { process: HexEditRuntime } = $props();
  const { view, decoded, hexRows, activeByte } = process;
  const ROWS = 16;

  let scrollIndex = $state<number>(0);

  function onwheel(e: WheelEvent) {
    const isDown = e.deltaY > 0;
    const isShifting = e.shiftKey;

    if (isShifting) {
      if (isDown && scrollIndex + ROWS + ROWS + 1 <= $hexRows.length) {
        scrollIndex += ROWS;
      } else if (!isDown && scrollIndex - ROWS >= 0) {
        scrollIndex -= ROWS;
      }
    } else {
      if (isDown && scrollIndex + ROWS + 1 <= $hexRows.length) {
        scrollIndex++;
      } else if (!isDown && scrollIndex - 1 >= 0) {
        scrollIndex--;
      }
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
            class="{process.getByteClass($view[index])} {scrollIndex + rowIndex * chars.length + charIndex}"
            class:prominent={$activeByte === index}>{char}</span
          >
        {/each}
      </div>
    {/each}
  </div>
  <VirtualScrollbar {process} bind:scrollIndex />
</div>
<StatusBar {process} {scrollIndex} {ROWS} />
