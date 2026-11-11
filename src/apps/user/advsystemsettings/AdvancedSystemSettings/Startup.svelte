<script lang="ts">
  import type { IAdvSysSetRuntime } from "$interfaces/runtimes/IAdvSysSetRuntime";
  import Icon from "$lib/Icon.svelte";

  const { process }: { process: IAdvSysSetRuntime } = $props();
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
<div class="table-wrapper">
  <table>
    <tbody>
      {#each Object.entries($preferencesBuffer.startup || {}) as [payload, type], i (`${payload}-${type}-${i}`)}
        <tr>
          <td class="payload"><input type="text" readonly value={payload} /></td>
          <td class="type">
            <select bind:value={$preferencesBuffer.startup![payload]}>
              <option value="app">App</option>
              <option value="file">File</option>
              <option value="folder">Folder</option>
              <option value="share">Share</option>
              <option value="disabled">(Disabled)</option>
            </select>
          </td>
          <td class="action">
            <button
              class="lucide icon-trash-2"
              title="Delete startup item"
              aria-label="Delete"
              onclick={() => deleteItem(payload)}
            ></button>
          </td>
        </tr>
      {/each}
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2" class="new">
          <input type="text" bind:value={newPayload} onblur={newOnBlur} onkeydown={newKeydown} placeholder="New item..." />
        </td>
        <td class="action">
          <button class="lucide icon-plus" title="Add startup item" disabled={!newPayload} aria-label="Add" onclick={doNew}
          ></button>
        </td>
      </tr>
    </tfoot>
  </table>
</div>
<div class="warning">
  <Icon icon="WarningIcon" />
  <p>
    Please keep in mind that all startup items run <b>outside</b> workspaces, just like the taskbar and wallpaper. This behaviour can't
    be changed.
  </p>
</div>
<hr />
<label for="">
  <input type="checkbox" bind:checked={$preferencesBuffer.enableVerboseLogin} /><span>Enable verbose login messages</span>
</label>
