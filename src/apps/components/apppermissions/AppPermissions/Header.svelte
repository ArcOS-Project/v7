<script lang="ts">
    import type { AppPermissionsRuntime } from "../runtime";
    import type { App } from "$types/app";
    import { Daemon } from "$ts/server/user/daemon";
    const { target, process }: { target: App, process: AppPermissionsRuntime } = $props();
</script>

<div class="header">
    <p class="title">Manage Permissions</p>
    <p class="subsection">{target?.metadata?.name ?? "Unknown App"} by {target?.metadata?.author}</p>
</div>