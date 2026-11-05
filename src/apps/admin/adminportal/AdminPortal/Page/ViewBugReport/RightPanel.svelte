<script lang="ts">
  import NewTabs from "$lib/NewTabs.svelte";
  import type { BugReport } from "$types/server/bughunt";
  import Location from "./RightPanel/Location.svelte";
  import Logs from "./RightPanel/Logs.svelte";
  import Meta from "./RightPanel/Meta.svelte";

  const { report }: { report: BugReport } = $props();
</script>

<div class="rightpanel">
  <NewTabs tabs={{ Location, Logs, Meta }} props={{ report }} padded paddedTop noSides fullHeight />
</div>
