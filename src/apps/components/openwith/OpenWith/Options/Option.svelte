<script lang="ts">
  import { AppOrigins } from "$ts/apps/store";
  import type { App, ThirdPartyApp } from "$types/app";
  import type { OpenWithRuntime } from "../../runtime";

  const {
    process,
    app,
  }: {
    process: OpenWithRuntime;
    app: (App | ThirdPartyApp) & { originId?: string };
  } = $props();
  const { selectedId } = process;
</script>

<button
  onclick={() => ($selectedId = app.id)}
  ondblclick={() => process.go(app.id)}
  class:active={$selectedId === app.id}
>
  <img src={app.metadata.icon} alt="" />
  <div>
    <h1>{app.metadata.name}</h1>
    <p>{AppOrigins[app.originId || ""] || "Unknown"} - {app.metadata.author}</p>
  </div>
</button>
