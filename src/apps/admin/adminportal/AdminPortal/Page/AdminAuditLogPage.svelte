<script lang="ts">
  import type { AuditLogData } from "../../types";
  import Pagination from "../Pagination.svelte";
  import AuditLogItem from "./AuditLog/AuditLogItem.svelte";

  const { data }: { data: AuditLogData } = $props();
  const { audits, users } = data;

  const total = audits.flat().length;
  let currentChunk = $state(0);
</script>

<div class="header">
  <h1>AUDIT LOG ({total})</h1>
  <Pagination bind:currentChunk totalItems={total} totalChunks={audits.length - 1} chunkSize={20} />
</div>

<div class="audit-list">
  {#if audits[currentChunk]}
    {#each audits[currentChunk] as audit (audit._id)}
      <AuditLogItem {audit} {users} />
    {/each}
  {/if}
</div>
