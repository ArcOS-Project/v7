<script lang="ts">
  import type { IAdvSysSetRuntime } from "$interfaces/runtimes/IAdvSysSetRuntime";
  import NewTabs from "$lib/NewTabs.svelte";

  const { process }: { process: IAdvSysSetRuntime } = $props();
  const { tabs, bufferChanged, initialTab } = process;
</script>

<NewTabs {tabs} {process} {initialTab} padded paddedTop />

<div class="actions">
  <button class="suggested" onclick={() => process.apply(true)}>Okay</button>
  <button onclick={() => process.closeWindow()}>Cancel</button>
  <button onclick={() => process.apply()} disabled={!$bufferChanged}>Apply</button>
</div>
