<script lang="ts">
  import { StoreItemIcon } from "$ts/distrib/util";
  import type { PartialStoreItem } from "$types/package";
  import type { AppStoreRuntime } from "../runtime";

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
    {#each items as item (item._id)}
      <button class="item" onclick={() => process.switchPage("viewStoreItem", { id: item._id })}>
        <img src={StoreItemIcon(item)} alt="" />
        <div class="info">
          <h1>{item.pkg.name}</h1>
          <p class="author">{item.user?.displayName || item.user?.username}</p>
        </div>
      </button>
    {/each}
  </div>
</section>
