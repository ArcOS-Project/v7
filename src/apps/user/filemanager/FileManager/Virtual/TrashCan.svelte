<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import { TrashCanService } from "$ts/server/user/trash";
  import { Plural } from "$ts/util";
  import type { TrashIndexNode } from "$types/trash";
  import { onMount } from "svelte";
  import type { FileManagerRuntime } from "../../runtime";
  import DeletedItem from "./TrashCan/DeletedItem.svelte";
  import { Daemon } from "$ts/server/user/daemon";

  const { process }: { process: FileManagerRuntime } = $props();
  const { selection } = process;
  const trash = Daemon?.serviceHost?.getService<TrashCanService>("TrashSvc");

  let items = $state<[string, TrashIndexNode][]>([]);

  onMount(() => {
    $selection = [];

    trash?.IndexBuffer.subscribe((v) => {
      items = Object.entries(trash?.getIndex() || {}).sort(([__, { timestamp: x }], [_, { timestamp: y }]) => {
        return x < y ? -1 : x > y ? 0 : 1;
      });
    });
  });

  async function emptyBin() {
    MessageBox(
      {
        title: "Empty recycle bin?",
        message: "Are you sure you want to empty the recycle bin? This cannot be undone.",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Empty",
            action: () => {
              trash?.emptyBin();
            },
            suggested: true,
          },
        ],
        image: "TrashIcon",
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );
  }

  async function restoreSelected() {
    if ($selection.length === 1) {
      trash?.restoreTrashItem($selection[0]);
      return;
    }
    const progress = await Daemon?.files?.FileProgress(
      {
        caption: "Restoring items",
        subtitle: "From Recycle bin",
        icon: "TrashIcon",
        type: "quantity",
        max: $selection.length,
      },
      process.pid
    );

    progress?.show();

    for (const uuid of $selection) {
      await trash?.restoreTrashItem(uuid);
      progress?.mutDone(+1);
    }

    progress?.stop();
  }

  async function deleteSelected() {
    if ($selection.length === 1) {
      const proceed = await Daemon?.helpers?.Confirm(
        "Delete item?",
        "Are you sure you want to permanently delete this item from the Recycle Bin? This cannot be undone.",
        "Cancel",
        "Delete",
        "TrashIcon",
        process.pid
      );

      if (!proceed) return;

      trash?.permanentlyDelete($selection[0]);
      return;
    }
    const proceed = await Daemon?.helpers?.Confirm(
      "Delete items?",
      "Are you sure you want to permanently delete these items from the Recycle Bin? This cannot be undone.",
      "Cancel",
      "Delete",
      "TrashIcon",
      process.pid
    );

    if (!proceed) return;

    const progress = await Daemon?.files?.FileProgress(
      {
        caption: "Deleting items",
        subtitle: "From Recycle Bin",
        icon: "TrashIcon",
        type: "quantity",
        max: $selection.length,
      },
      process.pid
    );

    progress?.show();

    for (const uuid of $selection) {
      await trash?.permanentlyDelete(uuid);
      progress?.mutDone(+1);
    }

    progress?.stop();
  }
</script>

{#if !trash}
  <div class="no-trash-service">
    <span class="lucide icon-trash-2"></span>
    <p>The recycle bin service isn't running.</p>
  </div>
{:else}
  <div class="directory-viewer" role="directory">
    <button class="item header-row">
      <div class="segment name">Name</div>
      <div class="segment type"></div>
      <div class="segment modified">Recycled</div>
    </button>

    {#if items.length}
      {#each items as [uuid, item] (uuid)}
        <DeletedItem {item} {process} {uuid} />
      {/each}
    {:else}
      <p class="empty">There's nothing in the bin</p>
    {/if}
  </div>
  <div class="bottom">
    <div class="stat">{items.length} recycled {Plural("item", items.length)}</div>
    <div class="trash-actions">
      <button disabled={!items.length} class:suggested={items.length} onclick={emptyBin}>Empty trash</button>
      <div class="sep"></div>
      <button
        class="lucide icon-iteration-cw"
        aria-label="Restore item(s)"
        title="Restore item(s)"
        disabled={!$selection.length}
        onclick={restoreSelected}
      ></button>
      <button
        class="lucide icon-trash-2"
        aria-label="Delete item(s)"
        title="Delete item(s)"
        disabled={!$selection.length}
        onclick={deleteSelected}
      ></button>
    </div>
  </div>
{/if}
