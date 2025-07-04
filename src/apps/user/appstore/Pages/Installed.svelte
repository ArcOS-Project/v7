<script lang="ts">
  import { StoreItemIcon } from "$ts/distrib/util";
  import type { StoreItem, UpdateInfo } from "$types/package";
  import PackageGrid from "../AppStore/PackageGrid.svelte";
  import PackageInstallAction from "../AppStore/PackageInstallAction.svelte";
  import type { AppStoreRuntime } from "../runtime";

  const { process, updates, installed }: { process: AppStoreRuntime; updates: UpdateInfo[]; installed: StoreItem[] } = $props();

  function updateAll() {
    process.spawnOverlayApp("MultiUpdateGui", +process.env.get("shell_pid") || process.pid, updates);
  }
</script>

{#if updates?.length || installed?.length}
  {#if updates.length}
    <section class="updates">
      <h1>
        <span>Updates</span>
        <button onclick={updateAll}>
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
              <PackageInstallAction
                {process}
                pkg={{ ...update.pkg, pkg: { ...update.pkg.pkg, version: update.newVer } }}
                compact
              />
            </div>
          </div>
        {/each}
      </div>
    </section>
  {/if}

  <PackageGrid items={installed} name="Installed" {process} />
  <p class="end">Looks like you've reached the end.</p>
{:else}
  <div class="empty">
    <span class="lucide icon-circle-slash"></span>
    <h1>No packages!</h1>
    <p>You haven't installed any packages yet! Once you install a package, it'll show up here.</p>
    <button class="suggested">Home</button>
  </div>
{/if}
