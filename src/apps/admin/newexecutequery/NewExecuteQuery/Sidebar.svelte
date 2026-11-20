<script lang="ts">
  import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";

  let { process }: { process: INewExecuteQueryRuntime } = $props();
  const { collections, selectedCollection } = process;
</script>

<div class="window-symbolic-sidebar">
  <section class="sidebar-section">
    <h1>Collections</h1>
    {#each $collections as collection (collection)}
      <button
        class="sidebar-button page"
        class:selected={$selectedCollection === collection}
        onclick={() => process.SelectCollection(collection)}
      >
        <span class="lucide icon-database"></span>
        <span>{collection}</span>
      </button>
    {/each}
  </section>
</div>
