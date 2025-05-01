<script lang="ts">
  import type { AdminPortalRuntime } from "../../runtime";
  import type { ViewUserData } from "../../types";

  const { process, data }: { process: AdminPortalRuntime; data: ViewUserData } = $props();
  const { user } = data;
</script>

{user.username}
