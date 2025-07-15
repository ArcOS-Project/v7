<script lang="ts">
  import { StoreItemScreenshot } from "$ts/distrib/util";
  import type { StoreItem } from "$types/package";
  import type { AppStoreRuntime } from "../../runtime";

  const { pkg, process }: { pkg: StoreItem; process: AppStoreRuntime } = $props();

  let index = $state<number>(0);
</script>

{#if pkg.pkg.store?.screenshots}
  <div class="screenshots-wrapper">
    <button class="lucide icon-arrow-left" disabled={index === 0} onclick={() => index--} aria-label="Previous"></button>
    <div class="carriage">
      <div class="inner" style="--i: {index};">
        {#each pkg.pkg.store.screenshots as _, i}
          <img src={StoreItemScreenshot(pkg, i)} alt="" class:selected={i === index} />
        {/each}
      </div>
    </div>
    <button
      class="lucide icon-arrow-right"
      disabled={index === pkg.pkg.store.screenshots.length - 1}
      onclick={() => index++}
      aria-label="Next"
    ></button>
  </div>
{/if}
