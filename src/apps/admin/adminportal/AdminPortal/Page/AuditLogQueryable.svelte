<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import { Store } from "$ts/writable";
  import { type AuditLogQueryOptions, type AuditLog, AuditSeverity } from "$types/server/admin";
  import type { QueryResult } from "$types/server/query";
  import { onMount } from "svelte";
  import type { AuditLogData } from "../../types";
  import Pagination from "../Pagination.svelte";
  import AuditLogItem from "./AuditLog/AuditLogItem.svelte";
  import Spinner from "$lib/Spinner.svelte";

  let totalItems = $state(0);
  let audits = $state<QueryResult<AuditLog>>();
  let loading = $state(false);
  let showFilters = $state<boolean>(true);
  let searchQuery = $state<string>();

  const query = Store<AuditLogQueryOptions>({
    page: 0,
    take: 20,
  });

  const { data, process }: { data: AuditLogData; process: IAdminPortalRuntime } = $props();
  const { users } = data;

  async function refresh() {
    loading = true;
    audits = (await process.admin.queryAuditLog($query)).result!;
    totalItems = audits.totalCount;
    loading = false;
  }

  onMount(async () => {
    await refresh();

    query.subscribe(() => refresh());
  });

  let searchTimeout: NodeJS.Timeout;

  function searchKeydown() {
    if (loading) return;
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      $query.data = searchQuery;
    }, 1000);
  }
</script>

<div class="header">
  <h1>AUDIT LOG (QUERYABLE) ({totalItems})</h1>
  <!-- svelte-ignore a11y_consider_explicit_label -->
  <button
    class="lucide icon-filter"
    class:suggested={showFilters}
    onclick={() => (showFilters = !showFilters)}
    title={showFilters ? "Hide filters" : "Show filters"}
  ></button>
  <Pagination
    bind:currentChunk={$query.page!}
    {totalItems}
    totalChunks={Math.ceil(totalItems / 20) - 1}
    chunkSize={20}
    disabled={loading}
  />
</div>

{#if showFilters}
  <div class="header filter-bar">
    <div class="from-to">
      <select name="" id="" bind:value={$query.authorId} disabled={loading}>
        <option value={""}>All authors</option>

        {#each users as user (user._id)}
          <option value={user._id}>{user.username}</option>
        {/each}
      </select>
      <span class="lucide icon-arrow-right"></span>
      <select name="" id="" bind:value={$query.targetUserId} disabled={loading}>
        <option value={""}>All targets</option>

        {#each users as user (user._id)}
          <option value={user._id}>{user.username}</option>
        {/each}
      </select>
    </div>

    <input
      type="text"
      class="search"
      bind:value={searchQuery}
      onkeydown={searchKeydown}
      placeholder="Search data..."
      readonly={loading}
    />

    <select name="" id="" bind:value={$query.severity} disabled={loading} class="severity">
      <option value={""}>All levels</option>
      <option value={AuditSeverity.normal}>Normal</option>
      <option value={AuditSeverity.medium}>Medium</option>
      <option value={AuditSeverity.high}>High</option>
      <option value={AuditSeverity.critical}>Critical</option>
      <option value={AuditSeverity.deadly}>Deadly</option>
    </select>
  </div>
{/if}

<div class="audit-list">
  {#if loading}
    <div class="center-flex">
      <Spinner height={32} />
    </div>
  {:else}
    {#each audits?.items || [] as audit (audit._id)}
      <AuditLogItem {audit} {users} />
    {/each}
  {/if}
</div>
