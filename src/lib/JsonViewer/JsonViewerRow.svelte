<script lang="ts">
  import { onMount } from "svelte";
  import ArrayBranch from "./ArrayBranch.svelte";
  import ObjectBranch from "./ObjectBranch.svelte";
  import FunctionBranch from "./FunctionBranch.svelte";
  import MapBranch from "./MapBranch.svelte";

  let { key, value }: { key: string; value: any } = $props();

  onMount(() => {
    console.log(`ENTERING ${key}`);
  });

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
    <b class="key">{key}</b>: <span class="empty-value">null</span>
  {:else if value === undefined}
    <b class="key">{key}</b>: <span class="empty-value">undefined</span>
  {:else if Array.isArray(value)}
    <ArrayBranch {key} {value} />
  {:else if value instanceof Map}
    <MapBranch {key} {value} />
  {:else if typeof value === "function"}
    <FunctionBranch {key} {value} />
  {:else if typeof value === "object"}
    <ObjectBranch {key} {value} />
  {:else}
    <b class="key">{key}</b>:
    <span style="color: var(--clr-{color(value)}-fg);">
      {#if typeof value === "string"}
        "{value}"
      {:else}
        {value}
      {/if}
    </span>
  {/if}
</div>
