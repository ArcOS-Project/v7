<script lang="ts">
  import { WarningIcon } from "$ts/images/dialog";
  import type { AdvSysSetRuntime } from "../runtime";

  const { process }: { process: AdvSysSetRuntime } = $props();
  const { preferencesBuffer } = process;

  let newPayload = $state<string>();
  let selected = $state<string>();

  function deleteItem(what: string) {
    preferencesBuffer.update((v) => {
      delete v.startup?.[what];
      return v;
    });
  }

  function addItem(what: string, type: "app" | "file" | "folder" | "share" | "disabled") {
    preferencesBuffer.update((v) => {
      v.startup ||= {};
      v.startup[what] = type;
      return v;
    });
  }

  function doNew() {
    if (!newPayload || $preferencesBuffer.startup?.[newPayload]) return;

    addItem(newPayload, "disabled");

    newPayload = "";
  }

  function newOnBlur() {
    doNew();
  }

  function newKeydown(e: KeyboardEvent) {
    if (e.key === "Enter") doNew();
  }
</script>

<p>This list decides what runs when you log in. This includes shares you've joined or apps you want to launch automatically.</p>
<div class="list">
  {#each Object.entries($preferencesBuffer.startup || {}) as [payload, type], i (`${payload}-${type}-${i}`)}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="row" onclick={() => (selected = payload)}>
      <input type="text" disabled value={payload} />
      <select bind:value={$preferencesBuffer.startup![payload]}>
        <option value="app">App</option>
        <option value="file">File</option>
        <option value="folder">Folder</option>
        <option value="share">Share</option>
        <option value="disabled">(Disabled)</option>
      </select>
      <button class="lucide icon-trash-2" title="Delete startup item" aria-label="Delete" onclick={() => deleteItem(payload)}
      ></button>
    </div>
  {/each}
  <div class="row new">
    <input type="text" bind:value={newPayload} onblur={newOnBlur} onkeydown={newKeydown} placeholder="New item..." />
    <button class="lucide icon-plus" title="Add startup item" disabled={!newPayload} aria-label="Add" onclick={doNew}></button>
  </div>
</div>
<div class="warning">
  <img src={WarningIcon} alt="" />
  <p>
    Please keep in mind that all startup items run <b>outside</b> workspaces, just like the taskbar and wallpaper. This behaviour can't
    be changed.
  </p>
</div>
