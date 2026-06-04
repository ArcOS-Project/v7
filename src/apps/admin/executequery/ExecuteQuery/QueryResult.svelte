<script lang="ts">
  import type { IExecuteQueryRuntime } from "$interfaces/runtimes/IExecuteQueryRuntime";
  import { UUID } from "$ts/util/uuid";

  import ActionBar from "./QueryResult/ActionBar.svelte";
  import QueryResultRow from "./QueryResult/QueryResultRow.svelte";

  const { process }: { process: IExecuteQueryRuntime } = $props();
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
