<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import type { OverlayRuntime } from "../../overlay";

  const { process }: { process: OverlayRuntime } = $props();

  let newUsername = $state("");

  async function changeIt() {
    const result = await process.userDaemon?.accountContext?.changeUsername(newUsername);

    process.closeWindow();

    if (!result) {
      MessageBox(
        {
          title: "Change username",
          message:
            "Failed to change username! Either the username isn't allowed, it's already in use or you didn't approve the elevation request. Please try again.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: "WarningIcon",
          sound: "arcos.dialog.warning",
        },
        process.parentPid,
        true
      );
    } else {
      MessageBox(
        {
          title: "Change username",
          message: "Your username has been updated! You might have to restart ArcOS before the changes take effect everywhere.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
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
    <img src={process.getIconCached("AccountIcon")} alt="" />
  </div>
  <div class="right">
    <h1>Change your username</h1>
    <p>Please enter the new name you'd like to use for your account:</p>
    <input type="username" placeholder="New username" bind:value={newUsername} />
  </div>
</div>
<div class="bottom">
  <button onclick={() => process.closeWindow()}>Cancel</button>
  <button class="suggested" disabled={!newUsername} onclick={changeIt}>Confirm</button>
</div>
