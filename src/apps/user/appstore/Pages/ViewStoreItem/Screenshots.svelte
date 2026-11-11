<script lang="ts">
  import type { IAppStoreRuntime } from "$interfaces/runtimes/IAppStoreRuntime";
  import { StoreItemScreenshot } from "$ts/util/distrib";
  import type { StoreItem } from "$types/tpa/package";

  const { pkg, process }: { pkg: StoreItem; process: IAppStoreRuntime } = $props();

  let index = $state<number>(0);
  let timeout: NodeJS.Timeout | undefined = undefined;

  function singleClick(e: MouseEvent) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      if (process.toastMessage()) return;

      process.ShowToast({
        content: "Double-click to enlarge",
        icon: "zoom-in",
      });
    }, 300);
  }

  function enlarge(i: number) {
    clearTimeout(timeout);

    process.viewImage(StoreItemScreenshot(pkg, i), `Screenshot #${i + 1} of ${pkg.pkg.name}`);
  }
</script>

{#if pkg.pkg.store?.screenshots}
  <div class="screenshots-wrapper">
    <button class="lucide icon-arrow-left" disabled={index === 0} onclick={() => index--} aria-label="Previous"></button>
    <div class="carriage">
      <div class="inner" style="--i: {index};">
        {#each pkg.pkg.store.screenshots as _, i}
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
          <img
            src={StoreItemScreenshot(pkg, i)}
            alt=""
            class:selected={i === index}
            onclick={singleClick}
            ondblclick={() => enlarge(i)}
          />
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
