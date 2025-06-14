<script lang="ts">
  import type { AdminPortalRuntime } from "../../runtime";
  import type { ScopesData } from "../../types";
  import ScopeRow from "./Scopes/ScopeRow.svelte";

  const { process, data }: { process: AdminPortalRuntime; data: ScopesData } = $props();
  const { admins } = data;
</script>

<div class="scope-list">
  {#each admins as admin (admin._id)}
    <ScopeRow {admin} {process} />
  {/each}
</div>
