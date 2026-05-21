<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import { Store } from "$ts/writable";
  import type { AuditLogQueryOptions, AuditLog } from "$types/admin";
  import type { QueryResult } from "$types/query";
  import { onMount } from "svelte";
  import type { AuditLogData } from "../../types";
  import Pagination from "../Pagination.svelte";
  import AuditLogItem from "./AuditLog/AuditLogItem.svelte";
  import Spinner from "$lib/Spinner.svelte";

  let totalItems = $state(0);
  let audits = $state<QueryResult<AuditLog>>();
  let loading = $state(false);

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
</script>

<div class="header">
  <h1>AUDIT LOG (QUERYABLE) ({totalItems})</h1>
  <select name="" id="" bind:value={$query.authorId}>
    <option value={""}>All users</option>

    {#each users as user (user._id)}
      <option value={user._id}>{user.username}</option>
    {/each}
  </select>
  <Pagination
    bind:currentChunk={$query.page!}
    {totalItems}
    totalChunks={Math.ceil(totalItems / 20) - 1}
    chunkSize={20}
    disabled={loading}
  />
</div>

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
