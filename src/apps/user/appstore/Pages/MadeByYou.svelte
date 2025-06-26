<script lang="ts">
  import { StoreItemIcon } from "$ts/distrib/util";
  import type { StoreItem } from "$types/package";
  import type { AppStoreRuntime } from "../runtime";

  const { process, unblocked, blocked }: { process: AppStoreRuntime; unblocked: StoreItem[]; blocked: StoreItem[] } = $props();
</script>

<section class="by-you">
  <h1>Made by you</h1>
  <div class="app-listing">
    {#each unblocked as pkg}
      <div class="app-row">
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
        <div class="app-row">
          <img src={StoreItemIcon(pkg)} alt="" />
          <p class="name">{pkg.pkg?.name || pkg.name}</p>
          <p class="author">{pkg.user?.displayName || pkg.user?.username || "Unknown"}</p>
          <p class="version">v{pkg.pkg.version}</p>
        </div>
      {/each}
    </div>
  </section>
{/if}
