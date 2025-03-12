<script lang="ts">
  import type { PdfViewerRuntime } from "./runtime";

  const { process }: { process: PdfViewerRuntime } = $props();
  const { documentUrl, openedFile } = process;
  import { PdfViewer, type PdfPageContent, type PdfLoadSuccess } from "svelte-pdf-simple";

  let pageNumber = $state<number>();
  let totalPages = $state<number>();
  let isPdfLoaded = $state<boolean>();

  function handlePageChanged(event: CustomEvent<PdfPageContent>): void {
    pageNumber = event.detail.pageNumber;
  }

  function handleLoadedSuccess(event: CustomEvent<PdfLoadSuccess>) {
    totalPages = event.detail.totalPages;
    pageNumber = 1;
    isPdfLoaded = true;
  }
</script>

{#if $documentUrl && $openedFile}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- <object data={$documentUrl} type="application/pdf" aria-label="PDF viewer" oncontextmenu={(e) => e.preventDefault()}></object> -->
  <PdfViewer props={{ url: $documentUrl }} on:load_success={handleLoadedSuccess} on:page_changed={handlePageChanged} />
{/if}
