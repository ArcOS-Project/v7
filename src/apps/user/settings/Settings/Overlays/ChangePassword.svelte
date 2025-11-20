<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import { Daemon } from "$ts/server/user/daemon";
  import type { SettingsRuntime } from "../../runtime";

  const { process }: { process: SettingsRuntime } = $props();

  let newPassword = $state("");
  let confirmNewPassword = $state("");

  async function changeIt() {
    if (newPassword !== confirmNewPassword) {
      MessageBox(
        {
          title: "Change password",
          message: "The passwords you entered don't match. Please try again.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: "WarningIcon",
          sound: "arcos.dialog.warning",
        },
        process.parentPid,
        true
      );

      return;
    }

    const result = await Daemon()?.account?.changePassword(newPassword);

    process.closeWindow();

    if (!result) {
      MessageBox(
        {
          title: "Change password",
          message:
            "Failed to change your password! Either the password is invalid or you didn't approve the elevation request. Please try again.",
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
          title: "Change password",
          message: "Your password has been changed successfully! You'll have to use this password when logging in in the future",
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
    <img src={process.getIconCached("PasswordIcon")} alt="" />
  </div>
  <div class="right">
    <h1>Change your password</h1>
    <p>Fill out the following fields to change your password. You will stay logged in everywhere if you change it.</p>
    <input type="password" placeholder="New password" bind:value={newPassword} />
    <input type="password" placeholder="Confirm new password" bind:value={confirmNewPassword} />
  </div>
</div>
<div class="bottom">
  <button onclick={() => process.closeWindow()}>Cancel</button>
  <button class="suggested" disabled={!newPassword || !confirmNewPassword} onclick={changeIt}>Confirm</button>
</div>
