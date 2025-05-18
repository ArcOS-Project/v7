<script lang="ts">
  import { SpinnerIcon } from "$ts/images/general";
  import { BadStatusIcon, GoodStatusIcon } from "$ts/images/status";
  import { Sleep } from "$ts/sleep";
  import type { AppInstallerRuntime } from "../runtime";

  const { process }: { process: AppInstallerRuntime } = $props();
  const { status, focused, installing } = process;

  focused.subscribe(async (v) => {
    await Sleep(0);

    elements[v]?.scrollIntoView();
  });

  let elements: Record<string, HTMLDivElement> = {};
</script>

<div class="log">
  {#if !Object.entries($status).length && !$installing}
    <div class="ready-to-install">
      <span class="lucide icon-hard-drive-download"></span>
      <h1>Ready to install</h1>
      <p>Click <b>Install</b> to install this package.</p>
    </div>
  {:else}
    {#each Object.entries($status) as [uuid, item] (uuid)}
      <div class="item" bind:this={elements[uuid]}>
        <p class="type">
          {#if item.type === "file"}
            Writing file
          {:else if item.type === "mkdir"}
            Creating directory
          {:else if item.type === "registration"}
            Registering
          {:else}
            Status
          {/if}
        </p>
        <p class="content">{item.content}</p>
        <img src={item.status === "done" ? GoodStatusIcon : item.status === "failed" ? BadStatusIcon : SpinnerIcon} alt="" />
      </div>
    {/each}
  {/if}
</div>
