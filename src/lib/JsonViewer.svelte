<script lang="ts">
  import { uniqueStrings } from "$ts/util";
  import JsonViewerRow from "./JsonViewer/JsonViewerRow.svelte";

  let { data, withProto = true, expandTopLevel = false }: { data: any; withProto?: boolean; expandTopLevel?: boolean } = $props();

  let keys = $derived(
    data
      ? uniqueStrings([
          ...Object.getOwnPropertyNames(data),
          ...(withProto ? Object.getOwnPropertyNames(Object.getPrototypeOf(data)) : []),
        ])
      : []
  );
</script>

<div class="json-viewer">
  {#if data && keys.length}
    {#each keys as key}
      <JsonViewerRow {key} value={data[key]} expand={!!expandTopLevel} />
    {/each}
  {:else}
    <p class="empty">(empty)</p>
  {/if}
</div>
