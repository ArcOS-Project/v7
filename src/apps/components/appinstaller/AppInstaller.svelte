<script lang="ts">
  import type { IAppInstallerRuntime } from "$interfaces/runtimes/IAppInstallerRuntime";
  import Actions from "./AppInstaller/Actions.svelte";
  import Header from "./AppInstaller/Header.svelte";
  import Log from "./AppInstaller/Log.svelte";

  const { process }: { process: IAppInstallerRuntime } = $props();
</script>

<Header {process} />
<Log {process} />
<Actions {process} />
