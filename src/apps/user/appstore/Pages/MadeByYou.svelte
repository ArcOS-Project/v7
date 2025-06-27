<script lang="ts">
  import { StoreItemIcon } from "$ts/distrib/util";
  import type { StoreItem } from "$types/package";
  import type { AppStoreRuntime } from "../runtime";

  const { process, unblocked, blocked }: { process: AppStoreRuntime; unblocked: StoreItem[]; blocked: StoreItem[] } = $props();
</script>

{#if unblocked.length || blocked.length}
  <section class="by-you">
    <h1>
      <span>Made by you</span>
      <button>
        <span>Upload</span>
        <span class="lucide icon-upload"></span>
      </button>
    </h1>
    <div class="app-listing">
      {#each unblocked as pkg}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="app-row" onclick={() => process.switchPage("manageStoreItem", { id: pkg._id })}>
          <img src={StoreItemIcon(pkg)} alt="" />
          <p class="name">{pkg.pkg?.name || pkg.name}</p>
          <p class="author">{pkg.user?.displayName || pkg.user?.username || "Unknown"}</p>
          <p class="version">v{pkg.pkg.version}</p>
        </div>
      {/each}
    </div>
  </section>

  {#if blocked.length}
    <section class="blocked">
      <h1>
        <span>Taken down</span>
        <button>Learn more</button>
      </h1>
      <div class="app-listing">
        {#each blocked as pkg}
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <div class="app-row" onclick={() => process.switchPage("manageStoreItem", { id: pkg._id })}>
            <img src={StoreItemIcon(pkg)} alt="" />
            <p class="name">{pkg.pkg?.name || pkg.name}</p>
            <p class="author">{pkg.user?.displayName || pkg.user?.username || "Unknown"}</p>
            <p class="version">v{pkg.pkg.version}</p>
          </div>
        {/each}
      </div>
    </section>
  {/if}
  <p class="end">Looks like you've reached the end.</p>
{:else}
  <div class="empty">
    <span class="lucide icon-circle-slash"></span>
    <h1>No packages!</h1>
    <p>You haven't uploaded any packages yet! Click the button to upload your first one.</p>
    <button class="suggested">Upload...</button>
  </div>
{/if}
