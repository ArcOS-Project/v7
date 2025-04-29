<script lang="ts">
  import type { AdminPortalRuntime } from "../runtime";
  import { AdminPortalPageStore } from "../store";

  const { process }: { process: AdminPortalRuntime } = $props();
  const { currentPage } = process;
</script>

<div class="sidebar">
  <section>
    {#each [...AdminPortalPageStore] as [id, page] (id)}
      {#if !page.hidden}
        <button class="page" class:selected={$currentPage === id} onclick={() => process.switchPage(id)}>
          <span class="lucide icon-{page.icon}"></span>
          <span>{page.name}</span>
        </button>
        {#if page.separator}
          <hr />
        {/if}
      {/if}
    {/each}
  </section>
</div>
