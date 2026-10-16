<script lang="ts">
  import type { SqlTable } from "$apps/user/sqeleton/types";
  import type { ISqeletonRuntime } from "$interfaces/runtimes/ISqeletonRuntime";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import TableColumn from "./TableColumn.svelte";

  const { process, table }: { process: ISqeletonRuntime; table: SqlTable } = $props();
</script>

<button
  ondblclick={() => process.openEditor(`SELECT * FROM ${table.name} WHERE 1;`)}
  use:contextMenu={[
    [
      {
        caption: "View top 200 rows",
        action: () => {
          process.executeSql(`SELECT * FROM ${table.name} LIMIT 200`);
          process.currentTab.set("result");
        },
        icon: "eye",
      },
      {
        caption: "View top 1000 rows",
        action: () => process.executeSql(`SELECT * FROM ${table.name} LIMIT 1000`),
        icon: "view",
      },
      { sep: true },
      {
        caption: "Export as SQL",
        subItems: [
          {
            caption: "Drop existing table first",
            action: async () => {
              const sqlResult = await process.tableToSql(table, true, true);
              if (sqlResult.success) process.openEditor(sqlResult.result);
            },
            icon: "eraser",
          },
          {
            caption: "Keep existing table",
            action: async () => {
              const sqlResult = await process.tableToSql(table, true, false);
              if (sqlResult) process.openEditor(sqlResult.result);
            },
            icon: "check-check",
          },
        ],
        icon: "hard-drive-upload",
      },
      { sep: true },
      {
        caption: "Drop table...",
        action: () => process.dropTableAck(table.name),
        icon: "bomb",
      },
    ],
    process,
  ]}
>
  {#if table.columns.length}
    <details class="expandable">
      <summary>
        <span class="lucide expander icon-chevron-right"></span>
        <span class="lucide icon-database"></span>
        <span>{table.name}</span>
      </summary>
      {#each table.columns as column (column.uuid)}
        <TableColumn {column} {table} />
      {/each}
    </details>
  {:else}
    <span class="lucide icon-database"></span>
    <span>{table.name}</span>
  {/if}
</button>
