<script lang="ts">
  import type { IShareMgmtOverlayRuntime } from "$interfaces/runtimes/IShareMgmtGuiRuntime";
  import type { IShareManager } from "$interfaces/services/IShareManager";
  import Icon from "$lib/Icon.svelte";
  import { Daemon } from "$ts/env";
  import { BTN_OKAY_SUG, MessageBox } from "$ts/util/dialog";

  const { process }: { process: IShareMgmtOverlayRuntime } = $props();
  let newName = $state<string>();

  async function changeIt() {
    const shares = Daemon?.serviceHost?.getService<IShareManager>("ShareMgmt")!;
    const result = await shares?.renameShare(process.parentProcess.shareId, newName!);

    process.closeWindow();

    if (!result) {
      MessageBox(
        {
          title: "Rename failed",
          message:
            "ArcOS failed to change the name of your share. You might already have a share with that name. Please try something else.",
          buttons: [BTN_OKAY_SUG],
          image: "WarningIcon",
          sound: "arcos.dialog.warning",
        },
        process.parentPid,
        true
      );
    } else {
      MessageBox(
        {
          title: "Renamed!",
          message:
            "Your share has been renamed successfully! You and the members of the share will have to restart for the changes to take effect.",
          buttons: [BTN_OKAY_SUG],
          image: "GoodStatusIcon",
          sound: "arcos.dialog.info",
        },
        process.parentPid,
        true
      );
    }
  }
</script>

<div class="top">
  <div class="left">
    <Icon icon="ShareIcon" />
  </div>
  <div class="right">
    <h1>Rename share</h1>
    <p>Please enter a new name for your share:</p>
    <input type="username" placeholder="New name" bind:value={newName} />
  </div>
</div>
<div class="bottom">
  <button onclick={() => process.closeWindow()}>Cancel</button>
  <button class="suggested" disabled={!newName} onclick={changeIt}>Confirm</button>
</div>
