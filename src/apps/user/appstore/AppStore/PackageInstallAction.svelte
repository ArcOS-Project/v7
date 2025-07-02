<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import type { StoreItem, UpdateInfo } from "$types/package";
  import { onMount } from "svelte";
  import type { AppStoreRuntime } from "../runtime";
  import InstallButton from "./PackageInstallAction/InstallButton.svelte";
  import UpdateButton from "./PackageInstallAction/UpdateButton.svelte";
  import UninstallButton from "./PackageInstallAction/UninstallButton.svelte";
  import { Store } from "$ts/writable";

  const { process, pkg, compact = false }: { process: AppStoreRuntime; pkg: StoreItem; compact?: boolean } = $props();
  let loading = $state<boolean>(true);
  let installed = Store<StoreItem | undefined>();
  let update = Store<UpdateInfo | false>();
  let store = Store<StoreItem>(pkg);

  onMount(async () => {
    $installed = await process.distrib.getInstalledPackage($store._id);
    $update = await process.distrib.checkForUpdate($store._id, undefined, [$store]);
    loading = false;
  });
</script>

<div class="package-install-action" class:loading class:compact>
  {#if loading}
    <Spinner height={24} />
  {:else if $installed}
    {#if !compact}
      <button
        class="lucide icon-rocket"
        aria-label="Launch"
        title="Launch"
        onclick={() => process.userDaemon!.spawnApp($store.pkg.appId, +process.env.get("shell_pid"))}
      ></button>
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
