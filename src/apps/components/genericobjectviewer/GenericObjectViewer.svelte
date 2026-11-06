<script lang="ts">
  import type { IGenericObjectViewerRuntime } from "$interfaces/runtimes/IGenericObjectViewerRuntime";
  import JsonViewer from "$lib/JsonViewer.svelte";

  let { process }: { process: IGenericObjectViewerRuntime } = $props();
</script>

<JsonViewer data={process.data} withProto={!!process.withProto} expandTopLevel={!process.withProto} />
