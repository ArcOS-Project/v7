<script lang="ts">
  import type { ISettingsRuntime } from "$interfaces/runtimes/ISettingsRuntime";
  import { settingsPageStore } from "../store";
  import AccountButton from "./Sidebar/AccountButton.svelte";

  const { process }: { process: ISettingsRuntime } = $props();
  const { currentPage } = process;
</script>

<div class="sidebar">
  <AccountButton {process} />
  <hr />
  {#each [...settingsPageStore] as [id, page]}
    {#if !page.hidden && (process.safeMode ? !page.noSafeMode : true)}
      <button class="page" class:selected={$currentPage === id} onclick={() => process.switchPage(id)}>
        <img src={process.getIconCached(page.icon)} alt="" />
        <span>{page.name}</span>
      </button>
      {#if page.separator}
        <hr />
      {/if}
    {/if}
  {/each}
</div>
