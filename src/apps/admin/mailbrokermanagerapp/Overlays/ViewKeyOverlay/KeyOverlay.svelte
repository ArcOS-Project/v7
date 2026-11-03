<script lang="ts">
  import type { IMailbrokerViewKeyOverlayRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
  import { Plural } from "$ts/util";
  import { BTN_CANCEL_SUG, BTN_OKAY_SUG, GetConfirmation, MessageBox } from "$ts/util/dialog";
  import dayjs from "dayjs";
  import ServerKeyPills from "../../MailbrokerManager/ServerKeyPills.svelte";

  const { process }: { process: IMailbrokerViewKeyOverlayRuntime } = $props();

  let disabled = $state(process.key?.disabled ?? false);

  async function deleteKey() {
    if (!disabled) return;

    const proceed = await GetConfirmation(
      {
        title: "Delete server key?",
        message:
          "Are you absolutely sure that you want to delete this disabled server key? This cannot be reverted, and may have unforseen consequences if the key is still used by ArcOS systems.",
        image: "WarningIcon",
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );

    if (!proceed) return;

    const result = await process.admin.deleteMailbrokerKey(process.keyId);

    if (!result.success) {
      MessageBox(
        {
          title: "Failed to delete",
          message: `An error occurred while attempting to delete the server key. ${result.errorMessage ?? "Unknown failure"}`,
          buttons: [BTN_OKAY_SUG],
          image: "ErrorIcon",
          sound: "arcos.dialog.error",
        },
        process.pid,
        true
      );
      return;
    }

    process.closeWindow();
  }

  async function toggleDisabled() {
    const result = disabled
      ? await process.admin.enableMailbrokerKey(process.keyId)
      : await process.admin.disableMailbrokerKey(process.keyId);

    if (!result.success) {
      MessageBox(
        {
          title: `Failed to ${disabled ? "enable" : "disable"} mailbroker key`,
          message: `An error occurred while attempting to update the mailbroker key. ${result.errorMessage ?? "unknown failure"}`,
          buttons: [BTN_OKAY_SUG],
          image: "ErrorIcon",
          sound: "arcos.dialog.error",
        },
        process.pid,
        true
      );
      return;
    }

    disabled = !disabled;
  }

  async function copy() {
    MessageBox(
      {
        title: "Copy",
        message: "What do you want to copy to the clipboard?",
        buttons: [
          {
            caption: "Key ID",
            action: () => navigator.clipboard.writeText(process.key!._id),
          },
          {
            caption: "Value",
            action: () => navigator.clipboard.writeText(process.key!.value),
          },
          {
            caption: "Server name",
            action: () => navigator.clipboard.writeText(process.key!.serverName),
          },
          BTN_CANCEL_SUG,
        ],
        image: "MailbrokerAdminIcon",
        sound: "arcos.dialog.info",
      },
      process.pid,
      true
    );
  }
</script>

{#if process.key}
  <div class="header">
    <span class="lucide icon-key"></span>
    <div class="info">
      <h1>Key for {process.key?.serverName}</h1>
      <p class="value">{process.key?.value}</p>
      <ServerKeyPills serverKey={process.key!} {disabled} />
    </div>
  </div>

  <div class="properties">
    <div class="property created">
      <h2>Created at</h2>
      <p>{dayjs(process.key.createdAt).format("D MMMM YYYY, HH:mm:ss")}</p>
    </div>

    <div class="property update">
      <h2>Updated at</h2>
      <p>{dayjs(process.key.updatedAt).format("D MMMM YYYY, HH:mm:ss")}</p>
    </div>

    <div class="property update">
      <h2>Sent records</h2>
      <p>{process.sentRecords.length} {Plural("record", process.sentRecords.length)} sent by this server</p>
    </div>
  </div>

  <ActionBar>
    {#snippet leftContent()}
      <ActionButton onclick={copy}>Copy...</ActionButton>
    {/snippet}
    {#snippet rightContent()}
      <ActionButton onclick={toggleDisabled} disabled={!process.admin.canAccess(AdminScopes.adminMailbrokerKeysWrite)}>
        {disabled ? "Enable" : "Disable"}
      </ActionButton>
      <ActionButton onclick={deleteKey} disabled={!process.admin.canAccess(AdminScopes.adminMailbrokerKeysWrite) || !disabled}>
        Delete
      </ActionButton>
      <ActionButton suggested onclick={() => process.closeWindow()}>Close</ActionButton>
    {/snippet}
  </ActionBar>
{/if}
