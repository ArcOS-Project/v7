<script lang="ts">
  import type { ISettingsRuntime } from "$interfaces/runtimes/ISettingsRuntime";
  import Icon from "$lib/Icon.svelte";
  import ActionIconButton from "$lib/Window/ActionBar/ActionIconButton.svelte";
  import { Daemon } from "$ts/env";
  import type { App } from "$types/apps/app";

  let { app, process }: { app: App; process: ISettingsRuntime } = $props();
</script>

<button
  class="app list-item"
  onclick={() => process.spawnOverlayApp("AppInfo", process.pid, app.id)}
  class:disabled={Daemon?.apps?.checkDisabled(app.id, app.noSafeMode)}
>
  <Icon icon="@app::{app.id}" />
  <div class="info">
    <h1>{app.metadata.name}</h1>
    <p class="author">v{app.metadata.version} &ndash; {app.metadata.author}</p>
  </div>
  <p class="type">
    {app._internalOriginalPath ? "Built-in" : "Third-party"}
  </p>
</button>
