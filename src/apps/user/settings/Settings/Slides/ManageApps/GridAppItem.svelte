<script lang="ts">
  import type { ISettingsRuntime } from "$interfaces/runtimes/ISettingsRuntime";
  import Icon from "$lib/Icon.svelte";
  import { Daemon } from "$ts/env";
  import type { App } from "$types/apps/app";

  let { app, process }: { app: App; process: ISettingsRuntime } = $props();
</script>

<button
  class="app grid-item"
  onclick={() => process.spawnOverlayApp("AppInfo", process.pid, app.id)}
  class:disabled={Daemon?.apps?.checkDisabled(app.id, app.noSafeMode)}
>
  <Icon icon="@app::{app.id}" />
  <h1>{app.metadata.name}</h1>
  <p class="author">{app.metadata.author} - v{app.metadata.version}</p>
</button>
