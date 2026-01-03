<script lang="ts">
  import { Permissions } from "$ts/permissions";
  import { onMount } from "svelte";
  import Actions from "./AppPermissions/Actions.svelte";
  import Header from "./AppPermissions/Header.svelte";
  import PermissionsList from "./AppPermissions/PermissionsList.svelte";
  import { AppPermissionsRuntime } from "./runtime";

  const { process }: { process: AppPermissionsRuntime } = $props();
  const { targetApp } = process;
  const { Configuration } = Permissions!;

  let permissionId = $state<string>("");

  onMount(() => {
    Configuration.subscribe((permissions) => {
      const reg = permissions?.registration ?? {};
      permissionId = Object.keys(reg).find((key) => reg[key] === $targetApp.id) ?? "";
    });
  });
</script>

{#if $targetApp && permissionId}
  <Header target={$targetApp} {process} />
  <PermissionsList {permissionId} />
  <Actions {permissionId} {process} />
{/if}
