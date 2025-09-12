<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import { ShareManager } from "$ts/kernel/mods/fs/shares";
  import { WarningIcon } from "$ts/images/dialog";
  import { PasswordIcon } from "$ts/images/general";
  import { GoodStatusIcon } from "$ts/images/status";
  import type { OverlayRuntime } from "../../overlay";

  const { process }: { process: OverlayRuntime } = $props();

  let newPassword = $state("");
  let confirmNewPassword = $state("");

  async function changeIt() {
    if (newPassword !== confirmNewPassword) {
      MessageBox(
        {
          title: "Change password",
          message: "The passwords you entered don't match. Please try again.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: WarningIcon,
          sound: "arcos.dialog.warning",
        },
        process.parentPid,
        true
      );

      return;
    }

    const shares = process.userDaemon?.serviceHost?.getService<ShareManager>("ShareMgmt")!;
    const result = shares?.changeSharePassword(process.parentProcess.shareId, newPassword);

    process.closeWindow();

    if (!result) {
      MessageBox(
        {
          title: "Change password",
          message: "Failed to change your password! Something might have gone wrong on our end. Please try again later.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: WarningIcon,
          sound: "arcos.dialog.warning",
        },
        process.parentPid,
        true
      );
    } else {
      MessageBox(
        {
          title: "Change password",
          message:
            "Your password has been changed successfully! New share members will have to use this password to access the share.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: GoodStatusIcon,
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
    <img src={PasswordIcon} alt="" />
  </div>
  <div class="right">
    <h1>Change share password</h1>
    <p>Fill out the following fields to change your share's password.</p>
    <input type="password" placeholder="New password" bind:value={newPassword} />
    <input type="password" placeholder="Confirm new password" bind:value={confirmNewPassword} />
  </div>
</div>
<div class="bottom">
  <button onclick={() => process.closeWindow()}>Cancel</button>
  <button class="suggested" disabled={!newPassword || !confirmNewPassword} onclick={changeIt}>Confirm</button>
</div>
