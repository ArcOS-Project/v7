<script lang="ts">
  import type { IMailbrokerSendOverlayRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import { BTN_OKAY_SUG, MessageBox } from "$ts/util/dialog";
  import type { ExpandedUserInfo } from "$types/user";
  import { MailbrokerSendOverlay } from "./types";

  const { process }: { process: IMailbrokerSendOverlayRuntime } = $props();

  let selectedUser = $state<ExpandedUserInfo | undefined>();
  let properties = $state<Record<string, string>>({});

  async function send() {
    if (!selectedUser) return;

    const props: Record<string, string> = {
      ...properties,
      userId: selectedUser?._id ?? "",
      username: selectedUser?.username ?? "Stranger",
    };

    const result = await process.admin.sendMailTemplateById(process.templateId, selectedUser._id, props);

    if (!result.success) {
      MessageBox(
        {
          title: "Failed to send template",
          message: `An error occurred while sending the mailbroker template. ${result.errorMessage ?? "Unknown failure"}`,
          buttons: [BTN_OKAY_SUG],
          image: "ErrorIcon",
          sound: "arcos.dialog.error",
        },
        process.pid,
        true
      );

      return;
    }

    MessageBox(
      {
        title: "Template sent",
        message: `An email was sent to the recipient using the template. The email was sent to <b>${result.result?.to.email ?? "<unknown>"}</b>`,
        buttons: [BTN_OKAY_SUG],
        image: "GoodStatusIcon",
        sound: "arcos.dialog.info",
      },
      process.parentPid,
      true
    );

    process.closeWindow();
  }
</script>

<div class="user-selector">
  <span class="lucide icon-user"></span>
  <select name="" id="" bind:value={selectedUser}>
    <option value={undefined}>No user</option>
    {#each process.users as user (user._id)}
      <option value={user}>Send to {user.username} ({user.email})</option>
    {/each}
  </select>
</div>

<div class="properties">
  {#each process.properties as property (property.name)}
    <div class="property">
      <h2>{property.name}</h2>
      <div class="value">
        {#if property.isUser}
          {#if property.variant === MailbrokerSendOverlay.PropertyVariant.UserId}
            <span class="lucide icon-user-round"></span>
            <input type="text" value={selectedUser?._id} readonly placeholder="User ID" />
          {:else if property.variant === MailbrokerSendOverlay.PropertyVariant.Username}
            <span class="lucide icon-id-card"></span>
            <input type="text" value={selectedUser?.username} readonly placeholder="Username" />
          {/if}
        {:else if property.variant === MailbrokerSendOverlay.PropertyVariant.Url}
          <span class="lucide icon-earth"></span>
          <input type="url" bind:value={properties[property.name]} placeholder="URL" />
        {:else}
          <span class="lucide icon-zap"></span>
          <input type="text" bind:value={properties[property.name]} placeholder="Value" />
        {/if}
      </div>
    </div>
  {/each}
</div>

<ActionBar>
  {#snippet rightContent()}
    <ActionButton onclick={() => process.closeWindow()}>Cancel</ActionButton>
    <ActionButton suggested onclick={send} disabled={!selectedUser}>Send</ActionButton>
  {/snippet}
</ActionBar>
