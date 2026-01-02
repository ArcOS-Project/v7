<script lang="ts">
    import { AppPermissionsRuntime } from "../runtime";
    const { app, process }: { app: string, process: AppPermissionsRuntime } = $props();
    import { onMount } from "svelte";
    let allowed:Array<string> = $state([]);
    let denied:Array<string> = $state([]);
    import { PERMISSION_NAMES } from "$ts/permissions/store";
    let uuid:string = $state("");
    import { Permissions } from "$ts/permissions";
    const { Configuration } = Permissions!;

    onMount(() => {
        Configuration.subscribe((permissions) => {
            const reg = permissions?.registration ?? {};
            uuid = Object.keys(reg).find(key => reg[key] === app) ?? "";
            allowed = permissions?.allowed?.[uuid] ?? [];
            denied = permissions?.denied?.[uuid] ?? [];
        });
    });

    function hasKey(obj: object, key: PropertyKey ): key is keyof typeof PERMISSION_NAMES {
        return key in obj;
    }

    async function revokePermission(allowed:boolean, permission:string, uuid:string) {
        let p = Configuration.get();
        let o;
        if (allowed) {
            o = p.allowed[uuid];
        } else {
            o = p.denied[uuid];
        }
        const i = o.indexOf(permission);
        if (i !== -1) {
            o.splice(i, 1);
        }
        if (allowed) {
            p.allowed[uuid] = o;
        } else {
            p.denied[uuid] = o;
        }
        Configuration.set(p);
    }

    async function denyPermission(permission:string, uuid:string) {
        let p = Configuration.get();
        let o;
        o = p.allowed[uuid];
        const i = o.indexOf(permission);
        if (i !== -1) {
            o.splice(i, 1);
        }
        p.allowed[uuid] = o;

        o = p.denied[uuid] ?? [];

        if (!o.includes(permission)) 
            o.push(permission);

        p.denied[uuid] = o;

        Configuration.set(p);
    }

    async function allowPermission(permission:string, uuid:string) {
        let p = Configuration.get();
        let o;
        o = p.denied[uuid];
        const i = o.indexOf(permission);
        if (i !== -1) {
            o.splice(i, 1);
        }
        p.denied[uuid] = o;

        o = p.allowed[uuid] ?? [];

        if (!o.includes(permission)) 
            o.push(permission);

        p.allowed[uuid] = o;

        Configuration.set(p);
    }

    
</script>

    <p class="sectiontitle">Allowed permissions</p>
    <div class="permissionslist">
        {#each allowed as p}
            <div class="permission">
                <p class="permname">{hasKey(PERMISSION_NAMES, p) ? PERMISSION_NAMES[p] : "Unknown Permission"}</p>
                <div class="options">
                    <button class="revoke" onclick={() => revokePermission(true, p, uuid)}>Revoke</button>
                    <button class="deny" onclick={() => denyPermission(p, uuid)}>Deny</button>
                </div>
            </div>
        {/each}
        {#if (allowed.length === 0)}
            <p class="graytext">This app doesn't have any allowed permissions</p>
        {/if}
    </div>
    <p class="sectiontitle">Denied permissions</p>
    <div class="permissionslist">
        {#each denied as p}
            <div class="permission">
                <p class="permname">{hasKey(PERMISSION_NAMES, p) ? PERMISSION_NAMES[p] : "Unknown Permission"}</p>
                <div class="options">
                    <button class="revoke" onclick={() => revokePermission(false, p, uuid)}>Revoke</button>
                    <button class="allow" onclick={() => allowPermission(p, uuid)}>Allow</button>
                </div>
            </div>
        {/each}
        {#if (denied.length === 0)}
            <p class="graytext">This app doesn't have any denied permissions</p>
        {/if}
    </div>
