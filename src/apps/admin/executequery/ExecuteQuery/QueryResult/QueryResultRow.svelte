<script lang="ts">
  import type { IExecuteQueryRuntime } from "$interfaces/runtimes/IExecuteQueryRuntime";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import { tryJsonStringify } from "$ts/util/json";
  import { ConceiledColumns, QueryUserColumns } from "../../store";

  const { item, process, columns }: { item: any; process: IExecuteQueryRuntime; columns: string[] } = $props();
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
      {:else if QueryUserColumns.includes(key)}
        <i>{users.find((u) => u._id === value)?.username || value || "no user"}</i>
      {:else if ConceiledColumns.includes(`${$selectedSource}.${key}`)}
        <i>[CONCEILED]</i>
      {:else}
        {valueStr}
      {/if}
    </td>
  {/each}
</tr>
