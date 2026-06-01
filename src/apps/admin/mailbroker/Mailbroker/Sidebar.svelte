<script lang="ts">
  import type { IMailbrokerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import { mailbrokerPages } from "../store";

  let { process }: { process: IMailbrokerRuntime } = $props();
  const { currentPage } = process;
</script>

{#each [...mailbrokerPages] as [id, page]}
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
