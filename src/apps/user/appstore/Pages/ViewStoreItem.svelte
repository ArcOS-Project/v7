<script lang="ts">
  import MarkdownRenderingComponent from "$lib/MarkdownRenderingComponent.svelte";
  import { StoreItemBanner, StoreItemIcon } from "$ts/distrib/util";
  import { formatBytes } from "$ts/fs/util";
  import type { StoreItem } from "$types/package";
  import { onMount } from "svelte";
  import PackageInstallAction from "../AppStore/PackageInstallAction.svelte";
  import type { AppStoreRuntime } from "../runtime";

  const { process, pkg }: { process: AppStoreRuntime; pkg: StoreItem } = $props();

  let readme = $state<string>("");

  onMount(async () => {
    readme = await process.distrib.storeItemReadme(pkg._id);
  });
</script>

{#if pkg}
  <div class="header" class:no-banner={!pkg.pkg.store?.banner}>
    {#if pkg.pkg.store?.banner}
      <img src={StoreItemBanner(pkg)} alt="" class="banner" />
    {/if}
    <div class="info">
      <img src={StoreItemIcon(pkg)} alt="" />
      <div class="metadata">
        <h1>
          <span class="name">{pkg.pkg.name}</span>
          <span class="version">v{pkg.pkg.version}</span>
        </h1>
        <p class="description">{pkg.pkg.description}</p>
        <p class="author">{pkg.user?.displayName || pkg.user?.username || pkg.pkg.author} · {pkg.installCount} downloads</p>
      </div>
      <div class="right">
        <div class="size">
          <span class="lucide icon-file-archive"></span>
          <span>{formatBytes(pkg.size)}</span>
        </div>
        <PackageInstallAction {pkg} {process} />
      </div>
    </div>
  </div>
  <MarkdownRenderingComponent source={readme} />
{:else}
  <div class="empty">
    <span class="lucide icon-circle-slash"></span>
    <h1>Package not found</h1>
    <p>Sorry! Couldn't find the package you're looking for</p>
    <button class="suggested" onclick={() => process.switchPage("home")}>Home</button>
  </div>
{/if}
