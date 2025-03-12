<script lang="ts">
  import type { PdfViewerRuntime } from "./runtime";

  const { process }: { process: PdfViewerRuntime } = $props();
  const { documentUrl, openedFile } = process;
</script>

{#if $documentUrl && $openedFile}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <object data={$documentUrl} type="application/pdf" aria-label="PDF viewer" oncontextmenu={(e) => e.preventDefault()}></object>
{/if}
