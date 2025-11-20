<script lang="ts">
  import { formatBytes } from "$ts/util/fs";
  import { Store } from "$ts/writable";
  import type { SharedDriveType } from "$types/shares";
  import { onMount } from "svelte";
  import type { AdminPortalRuntime } from "../../runtime";
  import type { SharesData, SharesPageFilters } from "../../types";
  import { Env, Fs } from "$ts/env";

  const { process, data }: { process: AdminPortalRuntime; data: SharesData } = $props();
  const { redacted } = process;
  const { shares, users } = data;

  const states: SharesPageFilters[] = ["all", "resized", "locked"];
  const sortState = Store<SharesPageFilters>("all");
  const store = Store<SharedDriveType[]>([]);
  const selection = Store<string>("");
  const selected = Store<SharedDriveType | undefined>(undefined);

  onMount(() => {
    sortState.subscribe((v) => {
      $store = shares
        .filter((share) => {
          switch (v) {
            case "all":
              return true;
            case "resized":
              return share.maxSize !== 1024 ** 2 * 512;
            case "locked":
              return share.locked;
          }
        })
        .reverse();
    });

    selection.subscribe((v) => ($selected = shares.filter((u) => u._id === v)[0]));
  });

  async function mountShare() {
    try {
      if (Fs().drives[$selection]) await Fs().umountDrive($selection, true);
      else {
        const drive = await process.shares.mountShareById($selection);
        if (drive) await process.spawnApp("fileManager", +Env().get("shell_pid"), `${drive.uuid}:/`);
      }

      process.switchPage("shares", {}, true);
    } catch {}
  }

  function User(id: string) {
    return users.filter((u) => u._id === id)[0];
  }
</script>

<div class="header">
  <p>{$sortState} ({$store.length})</p>
  <div class="tabs">
    {#each states as state}
      <button onclick={() => ($sortState = state)} class:selected={$sortState === state}>{state.toUpperCase()}</button>
    {/each}
  </div>
</div>
<div class="share-list">
  <div class="row header">
    <div class="segment icon">
      <span class="lucide icon-hard-drive"></span>
    </div>
    <div class="segment name">Share name</div>
    <div class="segment owner">Owner name</div>
    <div class="segment members">Members</div>
    <div class="segment size">Size</div>
    <div class="segment locked">LCK</div>
  </div>

  {#each $store as share (share._id)}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="row"
      onclick={() => ($selection = share._id)}
      ondblclick={() => process.switchPage("viewShare", { share })}
      class:selected={$selection === share._id}
    >
      <div class="segment icon">
        <span class="lucide icon-hard-drive"></span>
      </div>
      <div class="segment name">{share.shareName}</div>
      <div class="segment owner">{share.ownerName || User(share.userId)?.username}</div>
      <div class="segment members">{share.accessors.length}</div>
      <div class="segment size">{formatBytes(share.maxSize)}</div>
      <div class="segment locked">{share.locked ? "Yes" : "No"}</div>
    </div>
  {/each}
</div>

<div class="id-entry">
  <div class="icon">
    <span class="lucide icon-hard-drive"></span>
  </div>
  <input type="text" placeholder="Share ID" bind:value={$selection} maxlength="24" />
  <button disabled={$selection.length !== 24} onclick={() => process.switchPage("viewShare", { share: $selected })}>Go</button>
  <div class="actions">
    <button class="mount" disabled={!$selected} onclick={mountShare}>{Fs().drives[$selection] ? "Unmount" : "Mount"}</button
    >
  </div>
</div>
