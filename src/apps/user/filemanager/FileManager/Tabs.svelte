<script lang="ts">
  import { Sleep } from "$ts/sleep";
  import type { FileManagerRuntime } from "../runtime";
  import type { Tab } from "../types";
  import TabSvelte from "./Tabs/Tab.svelte";

  const { process }: { process: FileManagerRuntime } = $props();
  const { tabs: tabStore } = process;
  let tabs: Record<string, Tab> = $state<Record<string, Tab>>({});

  $effect(() => {
    const sub = process.tabs.subscribe(async (v) => {
      tabs = {};
      await Sleep(1);
      tabs = v || {};
    });

    return () => sub();
  });
</script>

<div class="tabs">
  {#each Object.entries(tabs) as [uuid, tab]}
    <TabSvelte {uuid} {tab} {process} />
  {/each}
  <button
    class="lucide icon-plus"
    aria-label="New Tab"
    onclick={() => process.createTab()}
    disabled={Object.entries($tabStore).length >= 8}
  ></button>
</div>
