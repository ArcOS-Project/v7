<script lang="ts">
  import type { IAppInfoRuntime } from "$interfaces/runtimes/IAppInfoRuntime";
  import Actions from "./AppInfo/Actions.svelte";
  import Header from "./AppInfo/Header.svelte";
  import IndepthInfo from "./AppInfo/IndepthInfo.svelte";
  import InternalInfo from "./AppInfo/InternalInfo.svelte";
  import ProcessInfo from "./AppInfo/ProcessInfo.svelte";
  import ThirdPartyInfo from "./AppInfo/ThirdPartyInfo.svelte";

  const { process }: { process: IAppInfoRuntime } = $props();
  const { targetApp, targetAppId } = process;
</script>

{#if $targetApp}
  <Header id={targetAppId} target={$targetApp} {process} />
  {#if !$targetApp.thirdParty}
    <IndepthInfo target={$targetApp} />
  {:else}
    <ThirdPartyInfo {process} target={$targetApp} />
  {/if}
  <ProcessInfo {process} appId={$targetApp.id} />
  {#if $targetApp._internalOriginalPath}
    <InternalInfo {process} target={$targetApp} />
  {/if}
  <Actions {process} appId={$targetApp.id} />
{/if}
