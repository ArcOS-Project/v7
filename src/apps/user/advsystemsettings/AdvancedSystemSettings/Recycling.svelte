<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import { TrashIcon } from "$ts/images/general";
  import { TrashCanService } from "$ts/server/user/trash";
  import { Plural } from "$ts/util";
  import { onMount } from "svelte";
  import type { AdvSysSetRuntime } from "../runtime";

  const { process }: { process: AdvSysSetRuntime } = $props();
  const { preferencesBuffer } = process;

  const trash = process.userDaemon?.serviceHost?.getService<TrashCanService>("TrashSvc");
  let size = $state(Object.entries(trash?.IndexBuffer() || {}).length);

  onMount(() => {
    if (typeof $preferencesBuffer.globalSettings.disableTrashCan !== "boolean")
      $preferencesBuffer.globalSettings.disableTrashCan = false;
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
              size = 0;
            },
            suggested: true,
          },
        ],
        image: TrashIcon,
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );
  }
</script>

<p>
  ArcOS has a recycle bin which holds files or folders that you've deleted from your drive. This page manages the settings related
  to recycling.
</p>

<section class="enable">
  <p>When I try to delete a file or folder:</p>
  <div class="section-content">
    <label>
      <input type="radio" bind:group={$preferencesBuffer.globalSettings.disableTrashCan} id="enable" value={false} /> Move it to the
      recycle bin
    </label>
    <label>
      <input type="radio" bind:group={$preferencesBuffer.globalSettings.disableTrashCan} id="disable" value={true} /> Delete it permanently
    </label>
  </div>
</section>

<section class="statistics">
  <p>Statistics about the recycle bin:</p>
  <div class="section-content">
    <ul>
      <li>The recycling service is <b>{trash ? "running" : "not running"}</b> on PID {trash?.pid || "(none)"}</li>
      <li>You have {size} {Plural("item", size)} in your recycle bin</li>
    </ul>
  </div>
</section>

<section class="actions">
  <button onclick={emptyBin}>Empty...</button>
  <button onclick={() => process.spawnApp("fileManager", +process.env.get("shell_pid"), "::recycle_bin")}>Open bin</button>
</section>
