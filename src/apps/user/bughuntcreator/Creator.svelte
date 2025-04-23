<script lang="ts">
  import { ArcOSVersion } from "$ts/env";
  import { ArcBuild } from "$ts/metadata/build";
  import { ArcMode } from "$ts/metadata/mode";
  import Fields from "./Creator/Fields.svelte";
  import type { BugHuntCreatorRuntime } from "./runtime";

  const { process }: { process: BugHuntCreatorRuntime } = $props();
  const { loading, title, body } = process;
</script>

<Fields {process} />
<div class="actions">
  <p class="version">
    ArcOS {ArcOSVersion}-{ArcMode()}_{ArcBuild()}
  </p>
  <button onclick={() => process.dataPrivacy()} disabled={$loading}>Data Privacy</button>
  <button onclick={() => process.closeWindow()} disabled={$loading}>Cancel</button>
  <button class="suggested" disabled={$loading || !$title || !$body} onclick={() => process.Send()}>Submit Report</button>
</div>
