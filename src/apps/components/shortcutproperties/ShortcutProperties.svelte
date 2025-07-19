<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import { UnknownFileIcon } from "$ts/images/mime";
  import type { ShortcutPropertiesRuntime } from "./runtime";

  const { process }: { process: ShortcutPropertiesRuntime } = $props();
  const { shortcutData, iconStore } = process;
</script>

{#if $shortcutData}
  <div class="header">
    <div class="icon">
      <img src={iconStore[$shortcutData.icon] || UnknownFileIcon} alt="" />
      <button class="change lucide icon-pencil" title="Change icon" aria-label="Change icon" onclick={() => process.changeIcon()}
      ></button>
    </div>
    <h1>{$shortcutData.name}</h1>
    <p>
      {#if $shortcutData.type === "app"}
        Application shortcut
      {:else if $shortcutData.type === "folder"}
        Folder shortcut
      {:else if $shortcutData.type === "file"}
        File shortcut
      {:else if $shortcutData.type === "new"}
        New shortcut
      {/if}
    </p>
  </div>
  <InfoBlock>
    <InfoRow>
      <Segment title="Name" className="name">
        <input type="text" bind:value={$shortcutData.name} />
      </Segment>
      <Segment title="Type" right className="type">
        <select name="" id="" bind:value={$shortcutData.type}>
          <option value="new" disabled>New</option>
          <option value="file">File</option>
          <option value="folder">Folder</option>
          <option value="app">Application</option>
        </select>
      </Segment>
    </InfoRow>
  </InfoBlock>

  <InfoBlock>
    <InfoRow>
      <Segment title="Points to" className="points-to">
        <input type="text" bind:value={$shortcutData.target} disabled={$shortcutData.type === "new"} />
        {#if $shortcutData.type !== "app"}
          <button
            class="lucide icon-folder-open"
            aria-label="Change"
            title="Choose a target..."
            onclick={() => process.pickTarget()}
            disabled={$shortcutData.type === "new"}
          >
          </button>
        {/if}
      </Segment>
    </InfoRow>
  </InfoBlock>

  <div class="actions">
    {#if $shortcutData.type !== "new"}
      <button class="target" onclick={() => process.goTarget()}>
        {#if $shortcutData.type === "app"}
          App Info
        {:else if $shortcutData.type === "folder"}
          Open Target
        {:else if $shortcutData.type === "file"}
          Find Target
        {/if}
      </button>
    {/if}
    <div class="right">
      <button onclick={() => process.closeWindow()}>Cancel</button>
      <button
        class="suggested"
        onclick={() => process.save()}
        disabled={!$shortcutData.icon || !$shortcutData.name || !$shortcutData.target || $shortcutData.type === "new"}
        >Save</button
      >
    </div>
  </div>
{/if}
