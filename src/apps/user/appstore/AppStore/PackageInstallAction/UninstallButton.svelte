<script lang="ts">
  import { TrashIcon } from "$ts/images/general";
  import type { ReadableStore } from "$ts/writable";
  import { ElevationLevel } from "$types/elevation";
  import type { StoreItem, UpdateInfo } from "$types/package";
  import type { AppStoreRuntime } from "../../runtime";

  const {
    process,
    pkg,
    update,
    installed,
    compact = false,
  }: {
    process: AppStoreRuntime;
    installed: ReadableStore<StoreItem | undefined>;
    update: ReadableStore<UpdateInfo | false>;
    pkg: ReadableStore<StoreItem>;
    compact: boolean;
  } = $props();
  let working = $state<boolean>(false);
  let content = $state<string>("Uninstall");

  async function go() {
    const elevated = await process.userDaemon!.manuallyElevate({
      what: "ArcOS needs your permission to remove a package",
      title: $pkg.pkg.name,
      description: `By ${$pkg.user?.displayName || $pkg.user?.username || $pkg.pkg.author}`,
      image: TrashIcon,
      level: ElevationLevel.medium,
    });

    if (!elevated) return reset();

    working = true;
    content = "Loading";
    await process.userDaemon?.deleteApp($pkg.pkg.appId, true);
    $update = false;
    $installed = undefined;
  }

  function reset() {
    working = false;
    content = "Uninstall";
  }
</script>

<button class="uninstall" class:compact onclick={go} disabled={working}>
  <div class="content">{content}</div>
</button>
