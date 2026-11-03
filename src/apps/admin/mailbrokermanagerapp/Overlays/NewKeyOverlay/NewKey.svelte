<script lang="ts">
  import type { IMailbrokerNewKeyOverlayRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import Icon from "$lib/Icon.svelte";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import { BTN_OKAY_SUG, MessageBox } from "$ts/util/dialog";

  let { process }: { process: IMailbrokerNewKeyOverlayRuntime } = $props();
  let serverName = $state("");

  async function create() {
    const result = await process.admin.createMailbrokerKey(serverName);

    if (!result.success) {
      MessageBox(
        {
          title: "Failed to create server key",
          message: `An error occurred while attempting to create the mailbroker key for ${serverName}. ${result.errorMessage ?? "Unknown failure"}`,
          image: "ErrorIcon",
          sound: "arcos.dialog.warning",
          buttons: [BTN_OKAY_SUG],
        },
        process.parentPid, // the overlay is too small, so use parent
        true
      );

      return;
    }

    await process.closeWindow();
    await process.parent.spawnOverlay("KeyOverlay", result.result!._id);
  }
</script>

<div class="top">
  <Icon icon="MailbrokerAdminIcon"></Icon>
  <div class="right">
    <h1>New server key</h1>
    <p>Enter the name of the server for which you want to create the server key:</p>
    <input type="text" bind:value={serverName} placeholder="*.arcapi.nl" />
  </div>
</div>

<ActionBar>
  {#snippet rightContent()}
    <ActionButton onclick={() => process.closeWindow()}>Cancel</ActionButton>
    <ActionButton suggested disabled={!serverName} onclick={create}>Create</ActionButton>
  {/snippet}
</ActionBar>
