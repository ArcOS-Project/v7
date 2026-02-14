<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/admin";
  import { AdminPortalPageStore } from "../store";

  const { process }: { process: IAdminPortalRuntime } = $props();
  const { currentPage, ready } = process;
</script>

<div class="sidebar">
  <section>
    {#each [...AdminPortalPageStore] as [id, page] (id)}
      {#if !page.hidden}
        <button
          class="page"
          class:selected={$currentPage === id}
          onclick={() => process.switchPage(id)}
          disabled={!$ready || (page.scopes && !process.admin?.canAccess(...page.scopes))}
        >
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
