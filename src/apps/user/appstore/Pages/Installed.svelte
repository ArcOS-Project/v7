<script lang="ts">
  import { StoreItemIcon } from "$ts/distrib/util";
  import type { StoreItem, UpdateInfo } from "$types/package";
  import type { AppStoreRuntime } from "../runtime";

  const { process, updates, installed }: { process: AppStoreRuntime; updates: UpdateInfo[]; installed: StoreItem[] } = $props();
</script>

{#if updates?.length || installed?.length}
  {#if updates.length}
    <section class="updates">
      <h1>
        <span>Updates</span>
        <button onclick={() => process.notImplemented("Updating packages")}>
          <span>Update all</span>
        </button>
      </h1>
      <div class="app-listing">
        {#each updates as update (update.pkg._id)}
          <div class="app-row">
            <img src={StoreItemIcon(update.pkg)} alt="" />
            <p class="name">{update.pkg.pkg?.name || update.pkg.name}</p>
            <p class="author">{update.pkg.user?.displayName || update.pkg.user?.username || "Unknown"}</p>
            <div class="actions">
              <button
                class="lucide icon-refresh-cw"
                aria-label="Update package"
                onclick={() => process.notImplemented("Updating packages")}
              ></button>
            </div>
          </div>
        {/each}
      </div>
    </section>
  {/if}

  <section class="installed">
    <h1>Installed</h1>
    <div class="app-listing">
      {#each installed as pkg (pkg._id)}
        <div class="app-row">
          <img src={StoreItemIcon(pkg)} alt="" />
          <p class="name">{pkg.pkg?.name || pkg.name}</p>
          <p class="author">{pkg.user?.displayName || pkg.user?.username || "Unknown"}</p>
          <p class="version">v{pkg.pkg.version}</p>
        </div>
      {/each}
    </div>
  </section>
  <p class="end">Looks like you've reached the end.</p>
{:else}
  <div class="empty">
    <span class="lucide icon-circle-slash"></span>
    <h1>No packages!</h1>
    <p>You haven't installed any packages yet! Once you install a package, it'll show up here.</p>
    <button class="suggested">Home</button>
  </div>
{/if}
