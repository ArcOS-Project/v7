<script lang="ts">
  let {
    currentChunk = $bindable(),
    totalItems,
    totalChunks,
    chunkSize,
  }: { currentChunk: number; totalItems: number; totalChunks: number; chunkSize: number } = $props();
</script>

<div class="pagination">
  <button
    class="lucide icon-chevron-first"
    aria-label="First page"
    disabled={currentChunk === 0}
    onclick={() => (currentChunk = 0)}
  ></button>
  <button
    class="lucide icon-chevrons-left"
    aria-label="Back 10 pages"
    onclick={() => (currentChunk -= 10)}
    disabled={currentChunk - 10 < 0}
  ></button>
  <button class="lucide icon-chevron-left" aria-label="Previous page" onclick={() => currentChunk--} disabled={currentChunk === 0}
  ></button>
  <span class="current">
    ({currentChunk + 1} / {totalChunks + 1}) Showing {currentChunk * chunkSize + 1}-{Math.min(
      currentChunk * chunkSize + chunkSize,
      totalItems,
    )} of {totalItems}
  </span>
  <button
    class="lucide icon-chevron-right"
    aria-label="Next page"
    onclick={() => currentChunk++}
    disabled={currentChunk >= totalChunks}
  ></button>
  <button
    class="lucide icon-chevrons-right"
    aria-label="Forward 10 pages"
    onclick={() => (currentChunk += 10)}
    disabled={currentChunk + 10 > totalChunks}
  ></button>
  <button
    class="lucide icon-chevron-last"
    aria-label="Last page"
    disabled={currentChunk === totalChunks}
    onclick={() => (currentChunk = totalChunks)}
  ></button>
</div>
