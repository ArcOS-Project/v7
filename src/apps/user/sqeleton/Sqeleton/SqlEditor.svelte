<script lang="ts">
  import type { ISqeletonRuntime } from "$interfaces/runtimes/ISqeletonRuntime";

  let { process }: { process: ISqeletonRuntime } = $props();
  let { queries, queryIndex } = process;
</script>

<div class="sql-editor">
  {#if $queries[$queryIndex]}
      <textarea
        bind:value={$queries[$queryIndex].content}
        placeholder="SELECT * FROM ..."
        oninput={() => ($queries[$queryIndex].hasChanges = true)}
      ></textarea>
  {/if}
</div>
