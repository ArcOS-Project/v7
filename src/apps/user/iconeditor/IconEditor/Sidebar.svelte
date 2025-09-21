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
</div>
