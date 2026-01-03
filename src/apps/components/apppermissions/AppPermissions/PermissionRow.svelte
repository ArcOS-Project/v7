<script lang="ts">
  import { Permissions } from "$ts/permissions";
  import { PERMISSION_NAMES, type PermissionString } from "$ts/permissions/store";
  import { onMount } from "svelte";

  const { id, permissionId }: { id: PermissionString; permissionId: string } = $props();
  const { Configuration } = Permissions!;

  const options = ["Unset", "Allow", "Deny"] as const;
  type Option = (typeof options)[number];

  let option = $state<Option>("Unset");

  onMount(() => {
    Configuration.subscribe((permissions) => {
      const state = permissions.allowed[permissionId]?.includes(id)
        ? "Allow"
        : permissions.denied[permissionId]?.includes(id)
          ? "Deny"
          : "Unset";

      option = state;
    });
  });

  function onchange() {
    if (!permissionId) return;

    switch (option) {
      case "Allow":
        if (Permissions.isDeniedById(permissionId, id)) Permissions.revokeDenialById(permissionId, id);
        Permissions.grantPermissionById(permissionId, id);

        break;
      case "Deny":
        if (Permissions.hasPermissionById(permissionId, id)) Permissions.revokePermissionById(permissionId, id);
        Permissions.denyPermissionById(permissionId, id);

        break;
      case "Unset":
        if (Permissions.hasPermissionById(permissionId, id)) Permissions.revokePermissionById(permissionId, id);
        if (Permissions.isDeniedById(permissionId, id)) Permissions.revokeDenialById(permissionId, id);

        break;
    }
  }
</script>

<div class="permission-row">
  <div class="name">
    <!-- Icon is placeholder for now -->
    <span class="lucide icon-slash"></span>
    <p>{PERMISSION_NAMES[id]}</p>
  </div>
  <select class="option" bind:value={option} {onchange}>
    {#each options as option (option)}
      <option value={option}>{option}</option>
    {/each}
  </select>
</div>
