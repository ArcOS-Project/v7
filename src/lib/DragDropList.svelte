<script lang="ts">
  import { type Snippet } from "svelte";
  import { flip } from "svelte/animate";
  import { writable } from "svelte/store";
  import { fade } from "svelte/transition";

  type Item = { id: number; text: string };
  const { items, slot }: { items: Item[]; slot: Snippet<[Item]> } = $props();

  const store = writable<Item[]>(items);
  let draggedItem: Item | null = null;

  function handleDragStart(item: Item) {
    draggedItem = item;
  }

  function handleDragOver(event: DragEvent) {
    event.preventDefault();
  }

  function handleDrop(targetItem: Item) {
    if (!draggedItem || draggedItem.id === targetItem.id) return;

    store.update((currentItems) => {
      const updatedItems = currentItems.filter((i) => i.id !== draggedItem!.id);
      const targetIndex = updatedItems.findIndex((i) => i.id === targetItem.id);
      updatedItems.splice(targetIndex, 0, draggedItem!);
      return updatedItems;
    });
  }
</script>

<ul class="list">
  {#each $store as item (item.id)}
    <li
      class="item"
      draggable="true"
      ondragstart={() => handleDragStart(item)}
      ondragover={handleDragOver}
      ondrop={() => handleDrop(item)}
      transition:fade
      animate:flip
    >
      {@render slot(item)}
    </li>
  {/each}
</ul>

<style>
  .list {
    list-style: none;
    padding: 0;
  }
  .item {
    padding: 10px;
    margin-bottom: 5px;
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    cursor: grab;
    transition: transform 0.2s ease;
  }
  .item:active {
    cursor: grabbing;
  }
</style>
