<script lang="ts">
  import { Sleep } from "$ts/sleep";
  import type { AppInstallerRuntime } from "../runtime";

  const { process }: { process: AppInstallerRuntime } = $props();
  const { status, focused, installing } = process.progress!;

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
      <h1>%readyToInstall.title%</h1>
      <p>%readyToInstall.message%</p>
    </div>
  {:else}
    {#each Object.entries($status) as [uuid, item] (uuid)}
      <div class="item" bind:this={elements[uuid]}>
        <p class="type">
          {#if item.type === "file"}
            %logType.file%
          {:else if item.type === "mkdir"}
            %logType.mkdir%
          {:else if item.type === "registration"}
            %logType.registration%
          {:else}
            %logType.generic%
          {/if}
        </p>
        <p class="content">{item.content}</p>
        <img
          src={process.getIconCached(
            item.status === "done" ? "GoodStatusIcon" : item.status === "failed" ? "BadStatusIcon" : "SpinnerIcon"
          )}
          alt=""
        />
      </div>
    {/each}
  {/if}
</div>
