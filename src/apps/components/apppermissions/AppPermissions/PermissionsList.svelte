<script lang="ts">
  import { AppPermissionsRuntime } from "../runtime";
  import PermissionRow from "./PermissionRow.svelte";
  import { PERMISSIONS } from "$ts/permissions/store";
  import { Permissions } from "$ts/permissions";
  import { onMount } from "svelte";

  const { Configuration } = Permissions!;
  const { app, process }: { app: string; process: AppPermissionsRuntime } = $props();

  let uuid = $state("");

    onMount(() => {
        Configuration.subscribe((permissions) => {
            const reg = permissions?.registration ?? {};
            uuid = Object.keys(reg).find((key) => reg[key] === app) ?? "";
        });
    });
</script>
{#if uuid}
    <div class="permissionslist">
        {#each PERMISSIONS as p}
            <PermissionRow app={app} id={p}></PermissionRow>
        {/each}
    </div>
{:else}
    <div class="permissionslist">
        <p class="graytext">This application hasn't yet asked for permissions.</p>
    </div>
{/if}
