<script lang="ts">
  import type { SqlTable, SqlTableColumn } from "$apps/user/sqeleton/types";

  const { table, column }: { table: SqlTable; column: SqlTableColumn } = $props();
</script>

<div class="table-column">
  <span class="lucide icon-tag"></span>
  <span>{column.name}</span>
</div>
