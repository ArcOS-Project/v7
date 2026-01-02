<script lang="ts">
  import { AppPermissionsRuntime } from "../runtime";
  import { PERMISSION_NAMES, type PermissionString } from "$ts/permissions/store";
  import { onMount } from "svelte";
  import { Permissions } from "$ts/permissions";

  const { app, process }: { app: string; process: AppPermissionsRuntime } = $props();
  const { Configuration } = Permissions!;

  let allowed = $state<PermissionString[]>([]);
  let denied = $state<PermissionString[]>([]);
  let uuid = $state<string>("");

  onMount(() => {
    Configuration.subscribe((permissions) => {
      const reg = permissions?.registration ?? {};
      uuid = Object.keys(reg).find((key) => reg[key] === app) ?? "";
      allowed = (permissions?.allowed?.[uuid] as PermissionString[]) ?? [];
      denied = (permissions?.denied?.[uuid] as PermissionString[]) ?? [];
    });
  });
</script>

<p class="sectiontitle">Allowed permissions</p>
<div class="permissionslist">
  {#each allowed as p}
    <div class="permission">
      <p class="permname">{PERMISSION_NAMES[p] ?? "Unknown Permission"}</p>
      <div class="options">
        <button class="deny" onclick={() => Permissions.denyPermissionById(uuid, p)}>Deny</button>
        <button class="revoke" onclick={() => Permissions.revokePermissionById(uuid, p)}>Revoke</button>
      </div>
    </div>
  {/each}
  {#if allowed.length === 0}
    <p class="graytext">This app doesn't have any allowed permissions</p>
  {/if}
</div>
<p class="sectiontitle">Denied permissions</p>
<div class="permissionslist">
  {#each denied as p}
    <div class="permission">
      <p class="permname">{PERMISSION_NAMES[p] ?? "Unknown Permission"}</p>
      <div class="options">
        <button class="allow" onclick={() => Permissions.revokeDenialById(uuid, p)}>Revoke</button>
      </div>
    </div>
  {/each}
  {#if denied?.length === 0}
    <p class="graytext">This app doesn't have any denied permissions</p>
  {/if}
</div>
