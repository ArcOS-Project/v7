<script lang="ts">
  import JsonViewer from "$lib/JsonViewer.svelte";
  import ComplexDataTypeSummary from "./ComplexDataTypeSummary.svelte";

  let { key, value, expand = false }: { key: string; value: any; expand?: boolean } = $props();
  let open = $state<boolean>(expand);
  let isClass = $derived(value?.constructor?.name && value.constructor.name !== "Object");
</script>

<details bind:open>
  <ComplexDataTypeSummary {key} {value}>
    {#snippet ValueComponent()}
      {isClass ? `class ${value?.constructor?.name}` : "Object"}
      {"{...}"}
      <span class="src-url">
        {value.sourceUrl || ""}
      </span>
    {/snippet}
  </ComplexDataTypeSummary>

  {#if open}
    <JsonViewer data={value} withProto={isClass} />
  {/if}
</details>
