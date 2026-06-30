<script lang="ts">
  import DataTableColumn from "./DataTableColumn.svelte";

  export let value = false;
  export let friendly = false;
</script>

<DataTableColumn className="data-table-boolean-column is-{value}">
  <span class="pill">
    {#if friendly}
      {value ? "Yes" : "No"}
    {:else}
      {value}
    {/if}
  </span>
</DataTableColumn>
