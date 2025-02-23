<script lang="ts">
  import type { HexEditRuntime } from "../runtime";

  let {
    process,
    scrollIndex = $bindable(),
  }: { process: HexEditRuntime; scrollIndex: number } = $props();
  const { hexRows } = process;

  function jumpUp() {
    if (scrollIndex - 16 >= 0) {
      scrollIndex -= 16;
    } else {
      scrollIndex = 0;
    }
  }
  function up() {
    if (scrollIndex - 1 >= 0) {
      scrollIndex--;
    }
  }
  function down() {
    if (scrollIndex + 17 <= $hexRows.length) {
      scrollIndex++;
    }
  }
  function jumpDown() {
    if (scrollIndex + 32 <= $hexRows.length) {
      scrollIndex += 16;
    } else {
      scrollIndex = $hexRows.length - 16;
    }
  }
</script>

<div class="virtual-scrollbar">
  <button
    class="lucide icon-chevrons-up jump-up"
    aria-label="Jump upward"
    onclick={jumpUp}
  ></button>
  <button class="lucide icon-chevron-up up" aria-label="Up" onclick={up}
  ></button>
  <div class="track">
    {#if $hexRows.length >= 16}
      <div
        class="inner"
        style="--top: {(100 / $hexRows.length) *
          scrollIndex}%; --height: {(100 / $hexRows.length) * 16}%"
      ></div>
    {/if}
  </div>
  <button class="lucide icon-chevron-down down" aria-label="Down" onclick={down}
  ></button>
  <button
    class="lucide icon-chevrons-down jump-down"
    aria-label="Jump downward"
    onclick={jumpDown}
  ></button>
</div>
