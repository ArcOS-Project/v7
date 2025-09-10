<script lang="ts">
  import HtmlSpinner from "$lib/HtmlSpinner.svelte";
  import { MessageBox } from "$ts/dialog";
  import { ArcOSVersion } from "$ts/env";
  import { PersonalizationIcon, UpdateIcon } from "$ts/images/general";
  import { ChangeLogs } from "$ts/metadata/changelog";
  import { onMount } from "svelte";
  import Dialog from "./Dialog.svelte";
  import type { UpdateNotifierRuntime } from "./runtime";

  const { process }: { process: UpdateNotifierRuntime } = $props();

  let loading = $state(true);
  let changelog = $state<string>("");

  onMount(async () => {
    changelog = (await ChangeLogs.readChangelog(ArcOSVersion)) || "";
    loading = false;
  });

  function readChangelog() {
    MessageBox(
      {
        title: `Changelog of ArcOS ${ArcOSVersion}`,
        content: Dialog,
        image: UpdateIcon,
        sound: "arcos.dialog.info",
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
      },
      process.parentPid,
      true
    );
  }
</script>

<img src={PersonalizationIcon} alt="" class="backdrop" />

<div class="header">
  <img src={UpdateIcon} alt="" />
  <h1>ArcOS has been updated</h1>
  <p>Welcome to ArcOS {ArcOSVersion}!</p>
</div>

<p>
  A new version of ArcOS has been released with more features, bug fixes and security improvements. To see exactly what changed,
  click View Changelog.
</p>

<div class="actions">
  <button class="suggested" disabled={loading || !changelog} onclick={readChangelog}>
    {#if loading}
      <HtmlSpinner height={16} />
    {:else if changelog}
      View Changelog
    {:else}
      Changelog not available yet!
    {/if}
  </button>
  <button onclick={() => process.closeWindow()}>Start using ArcOS {ArcOSVersion}</button>
</div>
