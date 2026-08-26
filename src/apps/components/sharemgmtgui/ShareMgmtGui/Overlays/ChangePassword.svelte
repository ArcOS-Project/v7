<script lang="ts">
  import type { IShareMgmtOverlayRuntime } from "$interfaces/runtimes/IShareMgmtGuiRuntime";
  import type { IShareManager } from "$interfaces/services/IShareManager";
  import Icon from "$lib/Icon.svelte";
  import { Daemon } from "$ts/env";
  import { BTN_OKAY_SUG, MessageBox } from "$ts/util/dialog";

  const { process }: { process: IShareMgmtOverlayRuntime } = $props();

  let newPassword = $state("");
  let confirmNewPassword = $state("");

  async function changeIt() {
    if (newPassword !== confirmNewPassword) {
      MessageBox(
        {
          title: "Change password",
          message: "The passwords you entered don't match. Please try again.",
          buttons: [BTN_OKAY_SUG],
          image: "WarningIcon",
          sound: "arcos.dialog.warning",
        },
        process.parentPid,
        true
      );

      return;
    }

    const shares = Daemon?.serviceHost?.getService<IShareManager>("ShareMgmt")!;
    const result = await shares?.changeSharePassword(process.parentProcess.shareId, newPassword);

    process.closeWindow();

    if (!result.success) {
      MessageBox(
        {
          title: "Change password",
          message: `Failed to change the password of the share. ${result.errorMessage ?? "An unknown error occurred. Please contact support."}`,
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
          title: "Change password",
          message:
            "Your password has been changed successfully! New share members will have to use this password to access the share.",
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
    <Icon icon="PasswordIcon" />
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
