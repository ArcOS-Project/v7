<script lang="ts">
  import type { IconEditorRuntime } from "../runtime";
  import { IconGroupIcons } from "../store";

  const { process }: { process: IconEditorRuntime } = $props();
  const { iconGroups, selectedGroup } = process;
</script>

<div class="sidebar">
  <section>
    <h1>Icon Editor</h1>
    <button onclick={() => ($selectedGroup = "")} class:selected={!$selectedGroup}>
      <span class="lucide icon-square-dashed-mouse-pointer"></span>
      <span>All icons</span>
    </button>
    {#each Object.keys($iconGroups) as group}
      <button onclick={() => ($selectedGroup = group)} class:selected={$selectedGroup === group}>
        <span class="lucide icon-{IconGroupIcons[group]}"></span>
        <span>{group}</span>
      </button>
    {/each}
  </section>
  <section>
    <h1>Import or Export</h1>
    <button onclick={() => process.importIconSet()}>
      <span class="lucide icon-file-up"></span>
      <span>Import</span>
    </button>
    <button onclick={() => process.exportIconSet()}>
      <span class="lucide icon-file-down"></span>
      <span>Export</span>
    </button>
  </section>
</div>
