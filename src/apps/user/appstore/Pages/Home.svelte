<script lang="ts">
  import { StoreItemBanner, StoreItemIcon } from "$ts/distrib/util";
  import type { PartialStoreItem, StoreItem } from "$types/package";
  import PackageGrid from "../AppStore/PackageGrid.svelte";
  import type { AppStoreRuntime } from "../runtime";

  interface Props {
    process: AppStoreRuntime;
    all: PartialStoreItem[];
    recentlyAdded: PartialStoreItem[];
    popular: PartialStoreItem[];
    mostPopular: StoreItem;
  }
  const { process, all, recentlyAdded, popular, mostPopular }: Props = $props();
</script>

{#if all && recentlyAdded && popular && mostPopular}
  <div class="hero">
    <img
      src={StoreItemBanner(popular[0]) || StoreItemIcon(popular[0])}
      alt=""
      class="banner"
      class:fallback={!StoreItemBanner(popular[0])}
    />
    <div class="info">
      <img src={StoreItemIcon(popular[0])} alt="" class="icon" />
      <h1>{mostPopular.pkg.name}</h1>
      <p class="description">{mostPopular.pkg.description}</p>
      <p class="stats">{mostPopular.user?.displayName || mostPopular.user?.username} · {mostPopular.installCount} downloads</p>
    </div>
    <button class="suggested" onclick={() => process.switchPage("viewStoreItem", { id: mostPopular._id })}>View</button>
  </div>

  <div class="popular">
    {#each [popular[1], popular[2]].filter(Boolean) as item}
      <button class="item" onclick={() => process.switchPage("viewStoreItem", { id: item._id })}>
        <img src={StoreItemBanner(item) || StoreItemIcon(item)} alt="" class="backdrop" class:fallback={!StoreItemBanner(item)} />
        <div class="content">
          <img src={StoreItemIcon(item)} alt="" class="icon" />
          <h1>{item.pkg.name}</h1>
          <p class="description">{item.pkg.description}</p>
          <p class="stats">{item.user?.displayName || item.user?.username} · {item.installCount} downloads</p>
        </div>
      </button>
    {/each}
  </div>

  <!-- <PackageGrid name="Popular" items={popular} {process} /> -->
  <PackageGrid name="Recently Added" items={recentlyAdded} {process} more={() => process.switchPage("recentlyAdded")} />
  <p class="end">Looks like you've reached the end.</p>
{:else}
  <div class="empty">
    <span class="lucide icon-circle-slash"></span>
    <h1>No packages!</h1>
    <p>Nobody has published a package yet! Maybe you'll be the first?</p>
    <button class="suggested" onclick={() => process.publishPackage()}>Upload...</button>
  </div>
{/if}
