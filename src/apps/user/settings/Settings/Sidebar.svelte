<script lang="ts">
  import type { SettingsRuntime } from "../runtime";
  import { settingsPageStore } from "../store";
  import AccountButton from "./Sidebar/AccountButton.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { currentPage } = process;
</script>

<div class="sidebar">
  <AccountButton {process} />
  <hr />
  {#each [...settingsPageStore] as [id, page]}
    {#if !page.hidden}
      <button class="page" class:selected={$currentPage === id} onclick={() => process.switchPage(id)}>
        <img src={page.icon} alt="" />
        <span>{page.name}</span>
      </button>
      {#if page.separator}
        <hr />
      {/if}
    {/if}
  {/each}
</div>
