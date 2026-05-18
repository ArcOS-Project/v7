<script lang="ts">
  import { UUID } from "$ts/util/uuid";
  import type { ExecuteQueryRuntime } from "../runtime";
  import ActionBar from "./QueryResult/ActionBar.svelte";
  import QueryResultRow from "./QueryResult/QueryResultRow.svelte";

  const { process }: { process: ExecuteQueryRuntime } = $props();
  const { result } = process;
  const columns = process.findMostColumnsOf($result);
</script>

<div class="results">
  <ActionBar {process} />

  <div class="table-wrapper">
    <table class="result-table">
      <thead>
        <tr>
          {#each columns as key}
            <th title={key}>{key}</th>
          {/each}
        </tr>
      </thead>

      <tbody>
        {#each $result as item (item?._id || item?.id || UUID())}
          <QueryResultRow {item} {process} {columns} />
        {/each}
      </tbody>
    </table>
  </div>
</div>
