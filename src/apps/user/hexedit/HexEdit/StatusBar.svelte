<script lang="ts">
  import { formatBytes } from "$ts/fs/util";
  import { decimalToHex } from "$ts/util";
  import type { HexEditRuntime } from "../runtime";

  const {
    process,
    scrollIndex,
    ROWS,
  }: { process: HexEditRuntime; scrollIndex: number; ROWS: number } = $props();
  const { hexRows, view, filename } = process;
</script>

{#if $hexRows && $view}
  <div class="status-bar">
    <div class="segment index">
      0x{decimalToHex(scrollIndex * 16, 8)} - 0x{decimalToHex(
        (scrollIndex + ROWS) * 16,
        8
      )}
    </div>
    <div class="segment rows">
      0x{decimalToHex($hexRows.length, 8)}
    </div>
    <div class="segment size">
      {formatBytes($view.length)}
    </div>
    <div class="segment filename">
      {$filename}
    </div>
  </div>
{/if}
