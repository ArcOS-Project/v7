<script lang="ts">
  import { contextMenu } from "$ts/context/actions.svelte";
  import { tryJsonStringify } from "$ts/json";
  import type { ExecuteQueryRuntime } from "../../runtime";
  import { QueryUserColumns } from "../../store";

  const { item, process, columns }: { item: any; process: ExecuteQueryRuntime; columns: string[] } = $props();
  const { selectedSource, users } = process;
</script>

<tr>
  {#each columns as key}
    {@const value = item[key]}
    {@const valueStr = tryJsonStringify(value, 2)}

    <td
      class={key}
      title={key}
      use:contextMenu={[
        [
          {
            caption: "Copy value",
            action: () => navigator.clipboard.writeText(valueStr),
            icon: "copy",
          },
        ],
        process,
      ]}
    >
      {#if typeof value === "object"}
        {#if Array.isArray(value)}
          Array[{value.length}]
        {:else}
          Object
        {/if}
      {:else if QueryUserColumns.includes(key) || (key === "_id" && $selectedSource === "users")}
        {users.find((u) => u._id === value)?.username || value || "no user"}
      {:else}
        {valueStr}
      {/if}
    </td>
  {/each}
</tr>
