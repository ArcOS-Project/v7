<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import { Store } from "$ts/writable";
  import type { StoreItem, UpdateInfo } from "$types/package";
  import { onMount } from "svelte";
  import type { AppStoreRuntime } from "../runtime";
  import InstallButton from "./PackageInstallAction/InstallButton.svelte";
  import UninstallButton from "./PackageInstallAction/UninstallButton.svelte";
  import UpdateButton from "./PackageInstallAction/UpdateButton.svelte";

  const { process, pkg, compact = false }: { process: AppStoreRuntime; pkg: StoreItem; compact?: boolean } = $props();
  let loading = $state<boolean>(true);
  let installed = Store<StoreItem | undefined>();
  let update = Store<UpdateInfo | false>();
  let store = Store<StoreItem>(pkg);

  onMount(async () => {
    $installed = await process.distrib.getInstalledStoreItem($store._id);
    $update = await process.distrib.checkForStoreItemUpdate($store._id, undefined, [$store]);
    loading = false;
  });
</script>

<div class="package-install-action" class:loading class:compact>
  {#if loading}
    <Spinner height={24} />
  {:else if $installed}
    {#if !compact}
      {#if pkg.userId === process.userDaemon?.userInfo._id}
        <button
          class="lucide icon-cog"
          aria-label="Manage"
          title="Manage"
          onclick={() => process.switchPage("manageStoreItem", { id: pkg._id })}
        ></button>
      {:else}
        <button
          class="lucide icon-rocket"
          aria-label="Launch"
          title="Launch"
          onclick={() => process.userDaemon!.spawn?.spawnApp($store.pkg.appId, +process.env.get("shell_pid"))}
        ></button>
      {/if}
    {/if}
    {#if $update}
      <UpdateButton pkg={store} {process} {compact} {update} />
    {:else}
      <UninstallButton pkg={store} {process} {compact} {update} {installed} />
    {/if}
  {:else}
    <InstallButton pkg={store} {process} {compact} {installed} />
  {/if}
</div>
