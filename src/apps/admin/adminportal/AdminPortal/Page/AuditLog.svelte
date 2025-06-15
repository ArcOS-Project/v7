<script lang="ts">
  import type { AuditLogData } from "../../types";
  import AuditLogItem from "./AuditLog/AuditLogItem.svelte";

  const { data }: { data: AuditLogData } = $props();
  const { audits, users } = data;
</script>

{#each audits as audit (audit._id)}
  <AuditLogItem {audit} {users} />
{/each}
