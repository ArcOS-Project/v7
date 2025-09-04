<script lang="ts">
  import { contextMenu } from "$ts/context/actions.svelte";
  import { UUID } from "$ts/uuid";
  import type { SqeletonRuntime } from "../runtime";

  const { process }: { process: SqeletonRuntime } = $props();
  const { queryIndex, queries, tables } = process;
</script>

<div class="sidebar">
  {#if $tables?.length}
    <div class="tables">
      <h1>
        <span>Tables</span>
        <button
          class="lucide icon-rotate-cw"
          aria-label="Refresh tables"
          title="Refresh tables"
          onclick={() => process.updateTables()}
        ></button>
      </h1>
      {#each $tables as table}
        <button
          ondblclick={() => process.newQuery(`SELECT * FROM ${table.name} WHERE 1;`)}
          use:contextMenu={[
            [
              {
                caption: "View top 200 rows",
                action: () => {
                  process.execute(`SELECT * FROM ${table.name} LIMIT 200`);
                  process.maximizeBottom.set(true);
                  process.currentTab.set("result");
                },
                icon: "eye",
              },
              {
                caption: "View top 1000 rows",
                action: () => process.execute(`SELECT * FROM ${table.name} LIMIT 1000`),
                icon: "view",
              },
              { sep: true },
              {
                caption: "Export as SQL",
                subItems: [
                  {
                    caption: "Drop existing table first",
                    action: async () => {
                      const sql = await process.tableToSql(table, true, true);
                      if (sql) process.newQuery(sql);
                    },
                    icon: "eraser",
                  },
                  {
                    caption: "Keep existing table",
                    action: async () => {
                      const sql = await process.tableToSql(table, true, false);
                      if (sql) process.newQuery(sql);
                    },
                    icon: "check-check",
                  },
                ],
                icon: "hard-drive-upload",
              },
              { sep: true },
              {
                caption: "Drop table...",
                action: () => process.dropTableInteractively(table.name),
                icon: "bomb",
              },
            ],
            process,
          ]}
        >
          <span class="lucide icon-database"></span>
          <span>{table.name}</span>
        </button>
      {/each}
    </div>
  {/if}
  {#if $queries.length}
    <div class="queries">
      <h1>
        <span>Queries</span>
        <button class="lucide icon-plus" onclick={() => process.newQuery()} aria-label="New query" title="New query"></button>
      </h1>
      {#each $queries as query, i (`${i}-${query}-${UUID()}`)}
        <div class="query" class:selected={$queryIndex === i}>
          <button onclick={() => ($queryIndex = i)}>
            <span class="lucide icon-scroll-text"></span>
            <span>{query || "New query"}</span>
          </button>
          <button
            class="lucide icon-x"
            onclick={() => process.deleteQuery(i)}
            title="Delete query"
            aria-label="Delete query"
            disabled={$queries.length <= 1}
          ></button>
        </div>
      {/each}
    </div>
  {/if}
</div>
