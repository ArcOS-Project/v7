<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import { Server } from "$ts/env";
  import type { BetaFeedback } from "$types/system/beta";
  import dayjs from "dayjs";

  let {
    item,
    process,
    selectedItem = $bindable(),
  }: { item: BetaFeedback; process: IAdminPortalRuntime; selectedItem: BetaFeedback | undefined } = $props();

  async function reply() {
    if (item.serverName !== Server.hostname!) return;

    process.spawnOverlayApp("MessageComposer", process.pid, {
      title: "A question about your beta feedback",
      body: `Hi, ${item.username}! I have a question about the beta feedback you sent in for ArcOS ${item.version}.`,
      recipients: [item.username],
      attachments: [],
    });
  }

  async function markAsRead() {
    await process.admin.markBetaFeedbackAsRead(item.id);
    item.read = true;
  }

  async function gotoUser() {
    const user = await process.admin.getUserByUsername(item.username);
    if (!user) return;

    await process.switchPage("viewUser", { user });
  }
</script>

<div class="item-details">
  <div class="header">
    <button class="lucide icon-arrow-left" onclick={() => (selectedItem = undefined)} title="Go back" aria-label="Go back"
    ></button>
    <h2>{item.title}</h2>
    <button class="read lucide icon-mail" onclick={reply} title="Reply" aria-label="Reply"></button>
    <button
      class="read lucide icon-check-check"
      onclick={markAsRead}
      disabled={item.read}
      title="Mark as read"
      aria-label="Mark as read"
    ></button>
  </div>
  <div class="properties">
    <div class="property">
      <p class="key">Username</p>
      <div class="value">
        {#if Server.hostname === item.serverName}
          <button class="link" onclick={gotoUser}>
            {item.username}
          </button>
        {:else}
          {item.username}
        {/if}
      </div>
    </div>
    <div class="property">
      <p class="key">User ID</p>
      <div class="value">{item.userId}</div>
    </div>
    <div class="property">
      <p class="key">Server</p>
      <div class="value">{item.serverName}</div>
    </div>
    <div class="property">
      <p class="key">Version</p>
      <div class="value">{item.version}</div>
    </div>
  </div>
  <div class="properties">
    <div class="property">
      <p class="key">Created</p>
      <div class="value">{dayjs(item.created).format("DD-MM-YYYY, HH:mm:ss")}</div>
    </div>
    <div class="property">
      <p class="key">Updated</p>
      <div class="value">{dayjs(item.updated).format("DD-MM-YYYY, HH:mm:ss")}</div>
    </div>
  </div>
  <p class="message">{item.message}</p>
</div>
