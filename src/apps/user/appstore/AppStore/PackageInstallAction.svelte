<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import type { StoreItem, UpdateInfo } from "$types/package";
  import { onMount } from "svelte";
  import type { AppStoreRuntime } from "../runtime";
  import InstallButton from "./PackageInstallAction/InstallButton.svelte";
  import UpdateButton from "./PackageInstallAction/UpdateButton.svelte";
  import UninstallButton from "./PackageInstallAction/UninstallButton.svelte";

  const { process, pkg, compact = false }: { process: AppStoreRuntime; pkg: StoreItem; compact?: boolean } = $props();
  let loading = $state<boolean>(true);
  let installed = $state<StoreItem>();
  let update = $state<UpdateInfo | false>();

  onMount(async () => {
    installed = await process.distrib.getInstalledPackage(pkg._id);
    update = await process.distrib.checkForUpdate(pkg._id);
    loading = false;
  });
</script>

<div class="package-install-action" class:loading class:compact>
  {#if loading}
    <Spinner height={24} />
  {:else if installed}
    {#if !compact}
      <button
        class="lucide icon-rocket"
        aria-label="Launch"
        title="Launch"
        onclick={() => process.userDaemon!.spawnApp(pkg.pkg.appId, +process.env.get("shell_pid"))}
      ></button>
    {/if}
    {#if update}
      <UpdateButton {pkg} {process} {compact} />
    {:else}
      <UninstallButton {pkg} {process} {compact} />
    {/if}
  {:else}
    <InstallButton {pkg} {process} {compact} />
  {/if}
</div>
