<script lang="ts">
  import type { SqeletonRuntime } from "../runtime";

  const { process }: { process: SqeletonRuntime } = $props();
  const { result } = process;
</script>

{#if $result?.length}
  {#each $result as queryResult, i}
    <div class="result">
      <h1>Result set #{i}</h1>
      <table>
        <thead>
          <tr>
            {#if queryResult.length > 0}
              {#each Object.keys(queryResult[0]) as col}
                <th>{col}</th>
              {/each}
            {/if}
          </tr>
        </thead>
        <tbody>
          {#each queryResult as row}
            <tr>
              {#each Object.values(row) as val}
                <td>{val}</td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/each}
{:else}
  <p class="empty">No result</p>
{/if}
