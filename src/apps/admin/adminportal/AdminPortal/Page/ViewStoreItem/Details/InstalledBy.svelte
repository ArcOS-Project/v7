<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import type { StoreItem } from "$types/package";
  import type { ExpandedUserInfo } from "$types/user";
  import { onMount } from "svelte";
  import Users from "../../Users.svelte";
  import Spinner from "$lib/Spinner.svelte";

  const { item, process }: { item: StoreItem; process: AdminPortalRuntime } = $props();

  let loading = $state(true);
  let installed = $state<ExpandedUserInfo[]>([]);

  onMount(async () => {
    const users = await process.admin.getAllUsers();

    console.log(users);

    for (const user of users) {
      if (user?.preferences?.userApps?.[item.pkg.appId]?.workingDirectory === item.pkg.installLocation) installed.push(user);
    }

    loading = false;
  });
</script>

<div class="installed-by container users">
  {#if loading}
    <Spinner height={32} />
  {:else if installed.length}
    <div class="page-content">
      <Users {process} data={{ users: installed }} compact />
    </div>
  {:else}
    <p class="error-text">ERR_NO_INSTALLS</p>
  {/if}
</div>
