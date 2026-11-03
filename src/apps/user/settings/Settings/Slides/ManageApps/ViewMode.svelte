<script lang="ts">
  let { view = $bindable() }: { view: string } = $props();
</script>

<div class="view-mode">
  <button
    class="lucide icon-grid-3x3"
    aria-label="Grid view"
    class:suggested={view === "grid"}
    onclick={() => (view = "grid")}
    title="Grid view"
  ></button>
  <button
    class="lucide icon-list"
    title="List view"
    aria-label="List view"
    class:suggested={view === "list"}
    onclick={() => (view = "list")}
  ></button>
</div>
