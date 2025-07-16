<script lang="ts">
  import { StoreItemIcon } from "$ts/distrib/util";
  import { UUID } from "$ts/uuid";
  import type { PartialStoreItem } from "$types/package";
  import type { AppStoreRuntime } from "../runtime";
  import PackageInstallAction from "./PackageInstallAction.svelte";

  interface Props {
    items: PartialStoreItem[];
    name: string;
    more?: () => void;
    className?: string;
    process: AppStoreRuntime;
  }

  const { items, name, more, className, process }: Props = $props();
</script>

<section class="package-grid">
  <h1>
    <span>{name}</span>
    {#if more}
      <button class="more" onclick={more}>
        <span>More</span>
        <span class="lucide icon-chevron-right"></span>
      </button>
    {/if}
  </h1>
  <div class="items">
    {#each items.filter((i) => !!i) as item (item?._id || UUID())}
      <button class="item" class:unverified={item.verifiedVer !== item.pkg.version}>
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="trigger" onclick={() => process.switchPage("viewStoreItem", { id: item._id })}></div>
        <img src={StoreItemIcon(item)} alt="" />
        <div class="info">
          <h1>{item.pkg.name}</h1>
          <p class="author">
            <span>{item.pkg.version}</span>
            <span>{item.user?.displayName || item.user?.username}</span>
          </p>
        </div>
        {#if item.verifiedVer === item.pkg.version}
          <PackageInstallAction pkg={item} {process} compact />
        {/if}
      </button>
    {/each}
  </div>
</section>
