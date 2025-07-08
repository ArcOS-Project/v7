<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import { WarningIcon } from "$ts/images/dialog";
  import type { ReadableStore } from "$ts/writable";
  import type { StoreItem } from "$types/package";
  import { onMount } from "svelte";
  import type { AppStoreRuntime } from "../../runtime";

  const {
    process,
    pkg,
    installed,
    compact = false,
  }: {
    process: AppStoreRuntime;
    installed: ReadableStore<StoreItem | undefined>;
    pkg: ReadableStore<StoreItem>;
    compact: boolean;
  } = $props();
  let working = $state<boolean>(false);
  let progMax = $state<number>(100);
  let progDone = $state<number>(0);
  let content = $state<string>("Install");

  async function go() {
    working = true;
    content = "Loading";

    const installer = await process.installPackage($pkg, (prog) => {
      progMax = prog.max;
      progDone = prog.value;
      content = `${((100 / prog.max) * prog.value).toFixed(0)}%`;
    });

    if (installer === false) {
      MessageBox(
        {
          title: "Failed to install item",
          message: "ArcOS failed to download the package of this store item. Please try again later.",
          buttons: [
            {
              caption: "Okay",
              suggested: true,
              action: () => {
                reset();
              },
            },
          ],
          image: WarningIcon,
          sound: "arcos.dialog.warning",
        },
        process.pid,
        true,
      );

      return;
    }

    if (typeof installer !== "object") {
      reset();
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

    await installer.go();

    content = "Done";
    $installed = $pkg;
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
          $installed = $pkg;
        }
      });
    }
  });

  function reset() {
    working = false;
    content = "Install";
    progMax = 100;
    progDone = 0;
  }
</script>

<button class="install" class:compact class:working class:suggested={!working} onclick={go} disabled={working}>
  <div class="progress">
    <div class="inner" style="--w: {(100 / progMax) * progDone}%;"></div>
  </div>
  <div class="content">{working && compact ? "..." : content}</div>
</button>
