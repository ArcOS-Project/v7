<script lang="ts">
  import { DefaultMimeIcon } from "$ts/images/mime";
  import Options from "./OpenWith/Options.svelte";
  import type { OpenWithRuntime } from "./runtime";

  const { process }: { process: OpenWithRuntime } = $props();
  const { filename, showAll, available, all, path, selectedId, userDaemon } =
    process;

  let icon = $state<string>("");

  $effect(() => {
    icon = userDaemon!.getMimeIconByFilename($path) || DefaultMimeIcon;
  });
</script>

<div class="top">
  <div class="header">
    <h1>Select an app to open {$filename}</h1>
    <p class="location">
      <img src={icon} alt="" /><span>{$path}</span>
    </p>
  </div>
  <div
    class="options"
    class:empty={$available && !$available.length && !$showAll}
  >
    {#if $showAll}
      <Options apps={$all} {process} />
    {:else}
      <Options apps={$available} {process} />
    {/if}
    {#if $available && !$available.length && !$showAll}
      <div class="empty">
        <p>Couldn't find any compatible applications!</p>
        <button class="link" onclick={() => ($showAll = true)}>
          Show all
        </button>
      </div>
    {/if}
  </div>
</div>
<div class="bottom">
  <div class="mode">
    <button onclick={() => ($showAll = true)} class:suggested={$showAll}>
      All
    </button>
    <button onclick={() => ($showAll = false)} class:suggested={!$showAll}>
      Compatible
    </button>
  </div>
  <button onclick={() => process.closeWindow()}>Cancel</button>
  <button
    class="suggested"
    disabled={!$selectedId}
    onclick={() => process.go()}
  >
    Open
  </button>
</div>
