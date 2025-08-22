<script lang="ts">
  import Actions from "./AppInstaller/Actions.svelte";
  import Header from "./AppInstaller/Header.svelte";
  import Log from "./AppInstaller/Log.svelte";
  import type { AppInstallerRuntime } from "./runtime";

  const { process }: { process: AppInstallerRuntime } = $props();
</script>

<Header {process} />
<Log {process} />
<Actions {process} />
