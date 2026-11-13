<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import { Store } from "$ts/writable";
  import type { ExpandedUserInfo } from "$types/user";
  import { onMount } from "svelte";
  import type { UsersData } from "../../types";
  import UserRow from "./Users/UserRow.svelte";
  import { Daemon } from "$ts/env";

  const { process, data, compact = false }: { process: IAdminPortalRuntime; data: UsersData; compact?: boolean } = $props();
  const { users } = data;

  const states = ["all", "online", "regular", "admins", "disapproved", "sys"] as const;
  const sortState = Store<UsersPageFilters>("all");
  const store = Store<ExpandedUserInfo[]>([]);
  const selection = Store<string>("");
  const selected = Store<ExpandedUserInfo | undefined>(undefined);

  type UsersPageFilters = (typeof states)[number];

  onMount(() => {
    sortState.subscribe((v) => {
      $store = users
        .filter((user) => {
          switch (v) {
            case "all":
              return true;
            case "regular":
              return !user.admin && !user.isSystem;
            case "admins":
              return user.admin && !user.isSystem;
            case "sys":
              return user.isSystem;
            case "online":
              return user.profile.dispatchClients > 0;
            case "disapproved":
              return !user.approved;
          }
        })
        .reverse();
    });

    selection.subscribe((v) => ($selected = users.filter((u) => u._id === v)[0]));
  });
</script>

{#if !compact}
  <div class="header">
    <p>{$sortState} ({$store.length})</p>
    <div class="tabs">
      {#each states as state}
        <button onclick={() => ($sortState = state)} class:selected={$sortState === state}>{state.toUpperCase()}</button>
      {/each}
    </div>
  </div>
{/if}
<div class="table-wrapper user-list" class:compact>
  <table>
    <thead>
      <tr>
        <th>Username</th>
        {#if !compact}
          <th>Email</th>
        {/if}
        <th>Created</th>
        <th>Approved</th>
        <th>Admin</th>
        <th>System</th>
      </tr>
    </thead>
    <colgroup>
      <col width="30%" />
      {#if !compact}
        <col width="30%" />
      {/if}
      <col width="20%" />
      <col width="1%" />
      <col width="1%" />
      <col width="1%" />
    </colgroup>
    <tbody>
      {#each $store as user (user._id)}
        <UserRow {process} {user} {selection} {compact} />
      {/each}
    </tbody>
  </table>
</div>
<div class="id-entry">
  <div class="icon">
    <span class="lucide icon-user"></span>
  </div>
  <input type="text" placeholder="User ID" bind:value={$selection} maxlength="24" />
  <button disabled={$selection.length !== 24} onclick={() => process.switchPage("viewUser", { user: $selected })}>Go</button>
  <div class="actions">
    <button
      class="lucide icon-braces"
      aria-label="View user data"
      disabled={!$selected}
      title="View user data"
      onclick={() =>
        Daemon.helpers?.ViewGenericObject(
          $selected!,
          {
            windowTitle: `View user data for ${$selected!.username}`,
            windowIcon: "AccountIcon",
            dataName: $selected!.username,
          },
          process.pid
        )}
    ></button>
  </div>
</div>
