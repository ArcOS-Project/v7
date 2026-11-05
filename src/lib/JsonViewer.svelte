<script lang="ts">
  import JsonViewer from "./JsonViewer.svelte";
  import ArrayBranch from "./JsonViewer/ArrayBranch.svelte";
  import ObjectBranch from "./JsonViewer/ObjectBranch.svelte";

  let { data }: { data: object } = $props();

  function color(value: any) {
    switch (typeof value) {
      case "boolean":
        return "orange";
      case "number":
        return "aqua";
      case "string":
        return "green";
      default:
        return "none";
    }
  }
</script>

<div class="json-viewer">
  {#each Object.entries(data) as [key, value], i}
    <div class="row">
      {#if Array.isArray(value)}
        <ArrayBranch {key} {value} />
      {:else if typeof value === "object"}
        <ObjectBranch {key} {value} />
      {:else}
      {/if}
    </div>
  {/each}
</div>
