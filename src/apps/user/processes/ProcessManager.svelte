<script lang="ts">
  import type { IProcessManagerRuntime } from "$interfaces/runtimes/IProcessManagerRuntime";
  import NewTabs from "$lib/NewTabs.svelte";
  import type { Component } from "svelte";

  const { process }: { process: IProcessManagerRuntime } = $props();
  const { currentTab, selected } = process;

  let Tab: Component | undefined = $state(undefined);

  currentTab.subscribe((v) => {
    Tab = process.tabs[v];
    $selected = "";
  });
</script>

<NewTabs initialTab="Processes" tabs={process.tabs} {process} fullHeight />
