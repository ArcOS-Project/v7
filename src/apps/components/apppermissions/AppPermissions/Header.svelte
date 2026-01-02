<script lang="ts">
    import type { AppPermissionsRuntime } from "../runtime";
    import type { App } from "$types/app";
    import { Daemon } from "$ts/server/user/daemon";
    const { target, process }: { target: App, process: AppPermissionsRuntime } = $props();
</script>

<div class="header">
    <img class="icon" src={Daemon?.icons?.getAppIcon(target) || process.getIconCached("QuestionIcon")} alt="" />
    <p class="title">{target?.metadata?.name ?? "Unknown App"}'s Permissions</p>
</div>