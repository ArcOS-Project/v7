<script lang="ts">
  import type { AdminPortalRuntime } from "../../runtime";
  import type { ScopesData } from "../../types";

  const { process, data }: { process: AdminPortalRuntime; data: ScopesData } = $props();
  const { admins } = data;
</script>

<div class="scope-list"></div>
