<script lang="ts">
  import { Daemon } from "$ts/daemon";
  import type { App } from "$types/app";
  import type { AppPermissionsRuntime } from "../runtime";

  const { target, process }: { target: App; process: AppPermissionsRuntime } = $props();
</script>

<div class="header">
  <h1>Manage Permissions</h1>
  <p>
    <img src={Daemon.icons?.getAppIcon(target)} alt="" />
    <span>{target?.metadata?.name ?? "Unknown App"} by {target?.metadata?.author}</span>
  </p>
</div>
