<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import { WarningIcon } from "$ts/images/dialog";
  import { ShareIcon } from "$ts/images/filesystem";
  import { GoodStatusIcon } from "$ts/images/status";
  import type { OverlayRuntime } from "../../overlay";

  const { process }: { process: OverlayRuntime } = $props();
  let newName = $state<string>();

  async function changeIt() {
    const result = await process.userDaemon?.shares?.renameShare(process.parentProcess.shareId, newName!);

    process.closeWindow();

    if (!result) {
      MessageBox(
        {
          title: "Rename failed",
          message:
            "ArcOS failed to change the name of your share. You might already have a share with that name. Please try something else.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: WarningIcon,
          sound: "arcos.dialog.warning",
        },
        process.parentPid,
        true,
      );
    } else {
      MessageBox(
        {
          title: "Renamed!",
          message:
            "Your share has been renamed successfully! You and the members of the share will have to restart for the changes to take effect.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: GoodStatusIcon,
          sound: "arcos.dialog.info",
        },
        process.parentPid,
        true,
      );
    }
  }
</script>

<div class="top">
  <div class="left">
    <img src={ShareIcon} alt="" />
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
