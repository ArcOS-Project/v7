<script lang="ts">
  import ArrayBranch from "./ArrayBranch.svelte";
  import FunctionBranch from "./FunctionBranch.svelte";
  import MapBranch from "./MapBranch.svelte";
  import ObjectBranch from "./ObjectBranch.svelte";
  import PropertyKey from "./PropertyKey.svelte";

  let { key, value, expand = false }: { key: string; value: any; expand?: boolean } = $props();

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

<div class="row">
  {#if value === null}
    <PropertyKey {key} /> <span class="empty-value">null</span>
  {:else if value === undefined}
    <PropertyKey {key} /> <span class="empty-value">undefined</span>
  {:else if Array.isArray(value)}
    <ArrayBranch {key} {value} {expand} />
  {:else if value instanceof Map}
    <MapBranch {key} {value} {expand} />
  {:else if typeof value === "function"}
    <FunctionBranch {key} {value} {expand} />
  {:else if typeof value === "object"}
    <ObjectBranch {key} {value} {expand} />
  {:else}
    <PropertyKey {key} />
    <span style="color: var(--clr-{color(value)}-fg);">
      {#if typeof value === "string"}
        "{value}"
      {:else}
        {value}
      {/if}
    </span>
  {/if}
</div>
