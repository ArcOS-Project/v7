<script lang="ts">
  import { Env } from "$ts/env";
  import { StoreItemIcon } from "$ts/util/distrib";
  import { Plural } from "$ts/util";
  import type { StoreItem, UpdateInfo } from "$types/package";
  import PackageGrid from "../AppStore/PackageGrid.svelte";
  import PackageInstallAction from "../AppStore/PackageInstallAction.svelte";
  import type { AppStoreRuntime } from "../runtime";

  const { process, updates, installed }: { process: AppStoreRuntime; updates: UpdateInfo[]; installed: StoreItem[] } = $props();

  function updateAll() {
    process.spawnOverlayApp("MultiUpdateGui", +Env.get("shell_pid") || process.pid, updates);
  }
</script>

{#if updates?.length || installed?.length}
  {#if updates.length}
    <div class="updates-banner">
      <img src={StoreItemIcon(updates[0].pkg)} alt="" class="banner" />
      <div class="cta">
        {#if updates.length > 1}
          <h1>There are updates available!</h1>
          <p>{updates.length} {Plural("app", updates.length)} have received new features and security improvements.</p>
          <button class="suggested" onclick={updateAll}>Update</button>
        {:else}
          <h1>{updates[0].pkg.pkg.name} can be updated!</h1>
          <p>Version <b>{updates[0].newVer}</b> can be installed. You currently have version <b>{updates[0].oldVer}</b>.</p>
          <PackageInstallAction
            pkg={{ ...updates[0].pkg, pkg: { ...updates[0].pkg.pkg, version: updates[0].newVer } }}
            {process}
          />
        {/if}
      </div>
      <div class="icons">
        {#each updates as update, i}
          {#if i < 4}
            <div class="icon">
              <img src={StoreItemIcon(update.pkg)} alt={update.pkg.pkg.name} />
            </div>
          {/if}
        {/each}
      </div>
    </div>
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
