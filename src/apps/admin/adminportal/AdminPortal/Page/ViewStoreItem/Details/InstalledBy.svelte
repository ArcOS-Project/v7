<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/admin";
  import Spinner from "$lib/Spinner.svelte";
  import { Daemon } from "$ts/daemon";
  import { Backend } from "$ts/kernel/mods/server/axios";
  import type { StoreItem } from "$types/package";
  import type { ExpandedUserInfo } from "$types/user";
  import Users from "../../Users.svelte";

  const { item, process }: { item: StoreItem; process: IAdminPortalRuntime } = $props();

  let loading = $state(false);
  let installed = $state<ExpandedUserInfo[]>([]);
  let loadingDone = $state(0);
  let loadingMax = $state(100);

  async function collect() {
    loading = true;
    const users = await process.admin.getAllUsers();

    loadingMax = users.length;
    loadingDone = 0;

    for (const user of users) {
      try {
        const response = await Backend.get(`/admin/fs/file/${user.username}/System/Config/DistribSvc/Installed.json`, {
          headers: { Authorization: `Bearer ${Daemon!.token}` },
          responseType: "json",
        });

        if (typeof response.data !== "object" || !Array.isArray(response.data)) throw "";

        if (response.data.filter((i) => i?._id === item._id)) installed.push(user);
      } catch {
        continue;
      } finally {
        loadingDone++;
      }
    }

    loading = false;
  }
</script>

<div class="installed-by container users" class:empty={!installed?.length || loading}>
  {#if loading}
    <Spinner height={32} />
    <p>{((100 / loadingMax) * loadingDone).toFixed(2)}%</p>
  {:else if installed.length}
    <div class="page-content">
      <Users {process} data={{ users: installed }} compact />
    </div>
  {:else}
    <p class="error-text">ERR_NO_INSTALLS</p>
    <button onclick={collect}>Collect</button>
  {/if}
</div>
