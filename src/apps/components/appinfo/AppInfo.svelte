<script lang="ts">
  import Header from "./AppInfo/Header.svelte";
  import IndepthInfo from "./AppInfo/IndepthInfo.svelte";
  import type { AppInfoRuntime } from "./runtime";

  const { process }: { process: AppInfoRuntime } = $props();
  const { targetApp, targetAppId } = process;
</script>

<Header id={targetAppId} target={$targetApp} {process} />
{#if !$targetApp.thirdParty}
  <IndepthInfo {process} target={$targetApp} />
{/if}
