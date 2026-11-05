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

<table class="json-viewer">
  <tbody>
    {#each Object.entries(data) as [key, value], i}
      <tr>
        <td class="key"><b>{key}</b>:</td>
        <td class="value">
          {#if Array.isArray(value)}
            <ArrayBranch {value} />
          {:else if typeof value === "object"}
            <ObjectBranch {value} />
          {:else}
            <span style="color: var(--clr-{color(value)}-fg);">
              {value}
            </span>
          {/if}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
