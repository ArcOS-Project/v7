<script lang="ts">
  import Header from "./AppInfo/Header.svelte";
  import IndepthInfo from "./AppInfo/IndepthInfo.svelte";
  import ProcessInfo from "./AppInfo/ProcessInfo.svelte";
  import ThirdPartyInfo from "./AppInfo/ThirdPartyInfo.svelte";
  import type { AppInfoRuntime } from "./runtime";

  const { process }: { process: AppInfoRuntime } = $props();
  const { targetApp, targetAppId } = process;
</script>

<Header id={targetAppId} target={$targetApp} {process} />
{#if !$targetApp.thirdParty}
  <IndepthInfo {process} target={$targetApp} />
{:else}
  <ThirdPartyInfo {process} target={$targetApp} />
{/if}
<ProcessInfo {process} appId={$targetApp.id} />
