<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import type { ReadableStore } from "$types/writable";
  import type { StoreItem, UpdateInfo } from "$types/package";
  import { onMount } from "svelte";
  import type { AppStoreRuntime } from "../../runtime";

  const {
    process,
    pkg,
    compact = false,
    update,
  }: {
    process: AppStoreRuntime;
    update: ReadableStore<UpdateInfo | false>;
    pkg: ReadableStore<StoreItem>;
    compact: boolean;
  } = $props();
  let working = $state<boolean>(false);
  let progMax = $state<number>(100);
  let progDone = $state<number>(0);
  let content = $state<string>("Update");

  async function go() {
    working = true;
    content = "Loading";
    const installer = await process.updatePackage($pkg, (prog) => {
      progMax = prog.max;
      progDone = prog.value;
      content = `${((100 / prog.max) * prog.value).toFixed(0)}%`;
    });

    if (installer === 0) {
      reset();
      return;
    }

    if (!installer) {
      MessageBox(
        {
          title: "Failed to update item",
          message:
            "ArcOS failed to download the package of this store item. The distribution service might already be installing or updating a package. Please try again later.",
          buttons: [
            {
              caption: "Okay",
              suggested: true,
              action: () => {
                reset();
              },
            },
          ],
          image: "WarningIcon",
          sound: "arcos.dialog.warning",
        },
        process.pid,
        true
      );

      return;
    }

    installer.TOTAL_COUNT.subscribe((v) => {
      progMax = v;
      content = `${((100 / progMax) * progDone).toFixed(0)}%`;
    });
    installer.COUNT.subscribe((v) => {
      progDone = v;
      content = `${((100 / progMax) * progDone).toFixed(0)}%`;
    });

    await installer.__go();

    content = "Done";
    $update = false;
  }

  onMount(() => {
    const existing = process.getRunningOperation($pkg);

    if (existing) {
      working = true;
      content = "Loading";
      existing.TOTAL_COUNT.subscribe((v) => {
        progMax = v;
        content = `${((100 / progMax) * progDone).toFixed(0)}%`;
      });
      existing.COUNT.subscribe((v) => {
        progDone = v;
        content = `${((100 / progMax) * progDone).toFixed(0)}%`;
      });
      existing.completed.subscribe((v) => {
        if (v) {
          content = "Done";
          $update = false;
        }
      });
    }
  });

  function reset() {
    working = false;
    content = "Update";
    progMax = 100;
    progDone = 0;
  }
</script>

<button class="update" class:compact class:working class:suggested={!working} onclick={go} disabled={working}>
  <div class="progress">
    <div class="inner" style="--w: {(100 / progMax) * progDone}%;"></div>
  </div>
  <div class="content">{working && compact ? "..." : content}</div>
</button>
