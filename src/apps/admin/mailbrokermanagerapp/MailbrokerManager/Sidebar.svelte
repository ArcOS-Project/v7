<script lang="ts">
  import type { IMailbrokerManagerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import { mailbrokerPages } from "../store";

  let { process }: { process: IMailbrokerManagerRuntime } = $props();
  const { currentPage } = process;
</script>

<div class="window-symbolic-sidebar">
  <section class="sidebar-section">
    <h1>Mailbroker manager</h1>
    {#each [...mailbrokerPages] as [id, page]}
      {#if !page.hidden}
        <button class="sidebar-button page" class:selected={$currentPage === id} onclick={() => process.switchPage(id)}>
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
