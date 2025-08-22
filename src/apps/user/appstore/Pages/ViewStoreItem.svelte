<script lang="ts">
  import MarkdownRenderingComponent from "$lib/MarkdownRenderingComponent.svelte";
  import { StoreItemBanner, StoreItemIcon } from "$ts/distrib/util";
  import { formatBytes } from "$ts/fs/util";
  import type { StoreItem } from "$types/package";
  import { onMount } from "svelte";
  import PackageInstallAction from "../AppStore/PackageInstallAction.svelte";
  import type { AppStoreRuntime } from "../runtime";
  import Screenshots from "./ViewStoreItem/Screenshots.svelte";

  const { process, pkg }: { process: AppStoreRuntime; pkg: StoreItem } = $props();

  let readme = $state<string>("");

  onMount(async () => {
    if (!pkg) return;

    readme = (await process.distrib.storeItemReadme(pkg._id)) || process.readmeFallback(pkg);
  });
</script>

{#if pkg}
  <div class="header" class:no-banner={!pkg.pkg.store?.banner}>
    <img src={StoreItemBanner(pkg) || StoreItemIcon(pkg)} class:fallback={!pkg.pkg.store?.banner} alt="" class="banner" />
    <div class="info">
      <img src={StoreItemIcon(pkg)} alt="" />
      <div class="metadata">
        <h1>
          <span class="name">{pkg.pkg.name}</span>
          <span class="version">v{pkg.pkg.version}</span>
        </h1>
        <p class="description" title={pkg.pkg.description}>{pkg.pkg.description}</p>
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
  <Screenshots {pkg} {process} />
  {#if pkg.deprecated}
    <div class="notice warning">
      <span class="lucide icon-triangle-alert"></span>
      <p>
        This package has been marked as deprecated by its author. This means that this package is unmaintained and outdated. We
        strongly advise against installing deprecated packages.
      </p>
    </div>
  {:else if pkg.verifiedVer !== pkg.pkg.version}
    <div class="notice warning">
      <span class="lucide icon-triangle-alert"></span>
      <p>
        The current version of this package hasn't yet been verified by an ArcOS administrator! Unverified apps can contain bugs,
        malicious code or security vulnerabilities.
      </p>
    </div>
  {/if}
  <MarkdownRenderingComponent source={readme} />
{:else}
  <div class="empty">
    <span class="lucide icon-circle-slash"></span>
    <h1>Package not found</h1>
    <p>Sorry! Couldn't find the package you're looking for</p>
    <button class="suggested" onclick={() => process.switchPage("home")}>Home</button>
  </div>
{/if}
