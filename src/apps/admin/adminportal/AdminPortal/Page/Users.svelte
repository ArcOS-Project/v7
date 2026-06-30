<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import DataTable from "$lib/Tables/DataTable.svelte";
  import DataTableBooleanColumn from "$lib/Tables/DataTableBooleanColumn.svelte";
  import DataTableColumn from "$lib/Tables/DataTableColumn.svelte";
  import DataTablePictureColumn from "$lib/Tables/DataTablePictureColumn.svelte";
  import EmptyContent from "$lib/Tables/EmptyContent.svelte";
  import ActionIconButton from "$lib/Window/ActionBar/ActionIconButton.svelte";
  import { Store } from "$ts/writable";
  import type { ExpandedUserInfo } from "$types/user";
  import dayjs from "dayjs";
  import { onMount } from "svelte";
  import { AdminUsersTableDataSource } from "../../tables/users";
  import type { UsersData } from "../../types";
  import TabBar from "../Components/TabBar.svelte";

  const { process, data, compact = false }: { process: IAdminPortalRuntime; data: UsersData; compact?: boolean } = $props();
  const { users } = data;
  const { redacted } = process;

  const states = ["all", "online", "regular", "admins", "disapproved", "sys"] as const;
  const sortState = Store<UsersPageFilters>("all");
  const store = Store<ExpandedUserInfo[]>([]);
  const selection = Store<string>("");
  const selected = Store<ExpandedUserInfo | undefined>(undefined);

  let refresh = $state<() => any>();

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

  let count = $state(0);
  let selectedTab = $state("");
</script>

<div class="header">
  <h1>Users ({count})</h1>
  <TabBar options={["All", "Approved", "Administrator", "System"]} bind:selected={selectedTab} onChange={() => refresh?.()}></TabBar>
</div>

<DataTable
  source={AdminUsersTableDataSource(process)}
  proc={process}
  query={{
    admin: selectedTab === "Administrator" ? "true" : undefined,
    isSystem: selectedTab === "System" ? "true" : undefined,
    approved: selectedTab === "Approved" ? "true" : undefined,
  }}
  bind:count
  eachKey="_id"
  bind:refresh
>
  {#snippet Empty()}
    <EmptyContent icon="users" title="No users" message="There are no users on this server" />
  {/snippet}
  {#snippet RowTemplate(item)}
    <DataTablePictureColumn userId={item._id} />
    <DataTableColumn>
      <span class:redacted={$redacted}>{item.username}</span>
    </DataTableColumn>
    <DataTableColumn>
      <span class:redacted={$redacted}>{item.email}</span>
    </DataTableColumn>
    <DataTableColumn>{dayjs(item.createdAt).format("DD-MM-YYYY, HH:mm:ss")}</DataTableColumn>
    <DataTableBooleanColumn value={item.approved} friendly></DataTableBooleanColumn>
    <DataTableBooleanColumn value={item.admin} friendly></DataTableBooleanColumn>
    <DataTableBooleanColumn value={item.isSystem} friendly></DataTableBooleanColumn>
  {/snippet}
  {#snippet RowActions(item)}
    <ActionIconButton icon="pencil" />
  {/snippet}
</DataTable>

<!-- 
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
<div class="user-list" class:compact>
  <div class="user-row header">
    <Icon icon={Logo()} />
    <div class="segment username">Username</div>
    {#if !compact}
      <div class="segment email">Email</div>
    {/if}
    <div class="segment created">Created</div>
    <div class="segment approved">APP</div>
    <div class="segment admin">ADM</div>
    <div class="segment system">SYS</div>
  </div>

  {#each $store as user (user._id)}
    <UserRow {process} {user} {selection} {compact} />
  {/each}
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
      onclick={() => process.spawnOverlay("userdata", $selected)}
    ></button>
  </div>
</div> -->
