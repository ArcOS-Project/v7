<script lang="ts">
  import type { ISettingsRuntime } from "$interfaces/runtimes/ISettingsRuntime";
  import Icon from "$lib/Icon.svelte";
  import AccountButton from "./Sidebar/AccountButton.svelte";

  const { process }: { process: ISettingsRuntime } = $props();
  const { currentPage } = process;
  const Pages = process.MuiSupplier.Pages;
</script>

<div class="sidebar">
  <AccountButton {process} />
  <hr />
  {#each [...Pages] as [id, page]}
    {#if !page.hidden && (process.safeMode ? !page.noSafeMode : true)}
      <button class="page" class:selected={$currentPage === id} onclick={() => process.switchPage(id)}>
        <Icon icon={page.icon} />
        <span>{page.title}</span>
      </button>
      {#if page.separator}
        <hr />
      {/if}
    {/if}
  {/each}
</div>
