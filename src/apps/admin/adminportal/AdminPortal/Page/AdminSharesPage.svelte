<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import { Env, Fs } from "$ts/env";
  import { formatBytes } from "$ts/util/fs";
  import { Store } from "$ts/writable";
  import type { SharedDriveType } from "$types/server/shares";
  import { onMount } from "svelte";
  import type { SharesData, SharesPageFilters } from "../../types";

  const { process, data }: { process: IAdminPortalRuntime; data: SharesData } = $props();
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
      if (Fs.drives[$selection]) await Fs.umountDrive($selection, true);
      else {
        const drive = await process.shares.mountShareById($selection);
        if (drive) await process.spawnApp("fileManager", +Env.get("shell_pid"), `${drive.uuid}:/`);
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

<div class="table-wrapper share-list">
  <table>
    <thead>
      <tr>
        <th class="icon-col">
          <span class="lucide icon-hard-drive"></span>
        </th>
        <th>Share name</th>
        <th>Owner name</th>
        <th>Members</th>
        <th>Size</th>
        <th>Locked</th>
      </tr>
    </thead>
    <colgroup>
      <col width="1%" />
      <col width="39%" />
      <col width="30%" />
      <col width="10%" />
      <col width="10%" />
      <col width="1%" />
    </colgroup>
    <tbody>
      {#each $store as share (share._id)}
        <tr
          class="row"
          onclick={() => ($selection = share._id)}
          ondblclick={() => process.switchPage("viewShare", { share })}
          class:selected={$selection === share._id}
        >
          <td class="icon-col">
            <span class="lucide icon-hard-drive"></span>
          </td>
          <td>{share.shareName}</td>
          <td>{share.ownerName || User(share.userId)?.username}</td>
          <td>{share.accessors.length}</td>
          <td>{formatBytes(share.maxSize)}</td>
          <td class={share.locked ? "clr-red" : "clr-green"}>{share.locked ? "Yes" : "No"}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<div class="id-entry">
  <div class="icon">
    <span class="lucide icon-hard-drive"></span>
  </div>
  <input type="text" placeholder="Share ID" bind:value={$selection} maxlength="24" />
  <button disabled={$selection.length !== 24} onclick={() => process.switchPage("viewShare", { share: $selected })}>Go</button>
  <div class="actions">
    <button class="mount" disabled={!$selected} onclick={mountShare}>{Fs.drives[$selection] ? "Unmount" : "Mount"}</button>
  </div>
</div>
