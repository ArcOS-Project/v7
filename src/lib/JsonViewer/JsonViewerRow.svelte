<script lang="ts">
  import ArrayBranch from "./ArrayBranch.svelte";
  import ObjectBranch from "./ObjectBranch.svelte";

  let { key, value }: { key: string; value: any } = $props();

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
  {#if Array.isArray(value)}
    <ArrayBranch {key} {value} />
  {:else if typeof value === "object"}
    <ObjectBranch {key} {value} />
  {:else}
    <b class="key">{key}</b>: <span style="color: var(--clr-{color(value)}-fg);">{value}</span>
  {/if}
</div>
