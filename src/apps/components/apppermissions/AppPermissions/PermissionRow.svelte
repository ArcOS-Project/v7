<script lang="ts">
    import { Permissions } from "$ts/permissions";
    import { PERMISSION_NAMES, type PermissionString } from "$ts/permissions/store";
    import { onMount } from "svelte";

    const { app, id }: { app: string, id: PermissionString } = $props();
    const { Configuration } = Permissions!;

    let opt = $state<"Unset" | "Allow" | "Deny">("Unset");
    let uuid = $state("");

    onMount(() => {
        Configuration.subscribe((permissions) => {
            const reg = permissions?.registration ?? {};
            uuid = Object.keys(reg).find((key) => reg[key] === app) ?? "";
            const state = permissions.allowed[uuid]?.includes(id) ? "Allow" : permissions.denied[uuid]?.includes(id) ? "Deny" : "Unset"; 
            opt = state;
        });
    });

    function modifValue() {
        if (!uuid) return;
        

        if (opt === "Allow") {
            if (Permissions.isDeniedById(uuid, id))
                Permissions.revokeDenialById(uuid, id);
            Permissions.grantPermissionById(uuid, id);
        } else if (opt === "Deny") {
            if (Permissions.hasPermissionById(uuid, id))
                Permissions.revokePermissionById(uuid, id);
            Permissions.denyPermissionById(uuid, id);
        } else {
            if (Permissions.hasPermissionById(uuid, id))
                Permissions.revokePermissionById(uuid, id);
            else if (Permissions.isDeniedById(uuid, id))
                Permissions.revokeDenialById(uuid, id);
        
        }
    }
</script>
<div class="permission">
    <p class="permname">{PERMISSION_NAMES[id] as PermissionString}</p>
    <select class="option" bind:value={opt} onchange={modifValue}>
        <option>Unset</option>
        <option>Allow</option>
        <option>Deny</option>
    </select>
</div>