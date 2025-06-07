<script lang="ts">
  import { Logo } from "$ts/branding";
  import { Store } from "$ts/writable";
  import type { ExpandedUserInfo } from "$types/user";
  import { onMount } from "svelte";
  import type { AdminPortalRuntime } from "../../runtime";
  import type { UsersData, UsersPageFilters } from "../../types";
  import UserRow from "./Users/UserRow.svelte";

  const { process, data }: { process: AdminPortalRuntime; data: UsersData } = $props();
  const { users } = data;

  const states: UsersPageFilters[] = ["all", "online", "regular", "admins", "disapproved"];
  const sortState = Store<UsersPageFilters>("all");
  const store = Store<ExpandedUserInfo[]>([]);
  const selection = Store<string>("");
  const selected = Store<ExpandedUserInfo | undefined>(undefined);

  onMount(() => {
    sortState.subscribe((v) => {
      $store = users
        .filter((user) => {
          switch (v) {
            case "all":
              return true;
            case "regular":
              return !user.admin;
            case "admins":
              return user.admin;
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

<div class="header">
  <p>{$sortState} ({$store.length})</p>
  <div class="tabs">
    {#each states as state}
      <button onclick={() => ($sortState = state)} class:selected={$sortState === state}>{state.toUpperCase()}</button>
    {/each}
  </div>
</div>
<div class="user-list">
  <div class="user-row header">
    <img src={Logo()} alt="" />
    <div class="segment username">Username</div>
    <div class="segment email">Email</div>
    <div class="segment created">Created</div>
    <div class="segment account-number">#</div>
    <div class="segment approved">APP</div>
    <div class="segment admin">ADM</div>
  </div>

  {#each $store as user (user._id)}
    <UserRow {process} {user} {selection} />
  {/each}
</div>
<div class="id-entry">
  <div class="icon">
    <span class="lucide icon-user"></span>
  </div>
  <input type="text" placeholder="User ID" bind:value={$selection} maxlength="24" />
  <button disabled={$selection.length !== 24} onclick={() => process.switchPage("viewUser", { $selected })}>Go</button>
  <div class="actions">
    <button
      class="lucide icon-braces"
      aria-label="View user data"
      disabled={!$selected}
      onclick={() => process.spawnOverlay("userdata", $selected)}
    ></button>
  </div>
</div>
