<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import Spinner from "$lib/Spinner.svelte";
  import { Daemon } from "$ts/env";
  import { Backend } from "$ts/kernel/mods/server/axios";
  import type { StoreItem } from "$types/tpa/package";
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

    const promises = users.map(
      (user) =>
        new Promise<void>(async (resolve) => {
          try {
            const response = await process.admin.adminClient.get(
              `/fs/file/${user.username}/System/Config/DistribSvc/Installed.json`
            );

            console.log(response.data);
            
            if (
              typeof response.data !== "object" ||
              !Array.isArray(response.data) ||
              !response.data.find((i) => i?._id === item._id)
            ) {
              throw "";
            }

            installed.push(user);
          } catch {
            return;
          } finally {
            loadingDone++;
            resolve();
          }
        })
    );

    await Promise.all(promises);

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
