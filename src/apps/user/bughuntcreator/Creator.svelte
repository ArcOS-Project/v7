<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import ActionSubtle from "$lib/Window/ActionBar/ActionSubtle.svelte";
  import { ArcOSVersion } from "$ts/env";
  import { ArcBuild } from "$ts/metadata/build";
  import { ArcMode } from "$ts/metadata/mode";
  import Fields from "./Creator/Fields.svelte";
  import type { BugHuntCreatorRuntime } from "./runtime";

  const { process }: { process: BugHuntCreatorRuntime } = $props();
  const { loading, title, body } = process;
</script>

<Fields {process} />
<ActionBar>
  {#snippet leftContent()}
    <ActionSubtle text="ArcOS {ArcOSVersion}-{ArcMode()}_{ArcBuild()}" />
  {/snippet}
  {#snippet rightContent()}
    <ActionButton onclick={() => process.dataPrivacy()} disabled={$loading}>Data Privacy</ActionButton>
    <ActionButton onclick={() => process.closeWindow()} disabled={$loading}>Cancel</ActionButton>
    <ActionButton suggested disabled={!$title || !$body} onclick={() => process.Send()} loading={$loading}>
      Submit Report
    </ActionButton>
  {/snippet}
</ActionBar>
