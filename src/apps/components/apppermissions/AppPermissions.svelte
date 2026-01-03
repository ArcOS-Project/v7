<script lang="ts">
  import Actions from "./AppPermissions/Actions.svelte";
  import Header from "./AppPermissions/Header.svelte";
  import PermissionsList from "./AppPermissions/PermissionsList.svelte";
  import { AppPermissionsRuntime } from "./runtime";

  const { process }: { process: AppPermissionsRuntime } = $props();
  const { targetApp, targetAppId } = process;
</script>

{#if $targetApp}
    <Header target={$targetApp} {process}></Header>
    <PermissionsList {process} app={targetAppId}></PermissionsList>
    <Actions {process} app={targetAppId} />
{/if}