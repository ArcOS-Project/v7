<script lang="ts">
  import { uniqueStrings } from "$ts/util";
  import JsonViewerRow from "./JsonViewer/JsonViewerRow.svelte";

  let { data, withProto = true }: { data: any; withProto?: boolean } = $props();

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
      <JsonViewerRow {key} value={data[key]} />
    {/each}
  {:else}
    <p class="empty">(empty)</p>
  {/if}
</div>
