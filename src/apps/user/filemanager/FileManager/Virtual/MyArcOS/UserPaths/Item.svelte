<script lang="ts">
  import type { FileManagerRuntime } from "$apps/user/filemanager/runtime";
  import { UserPathCaptions, UserPathIcons } from "$ts/user/store";

  const { process, path, id }: { process: FileManagerRuntime; path: string; id: string } = $props();

  let split = path.split("/").filter((p) => !!p.length);
</script>

<button class="item" onclick={() => process.navigate(path)}>
  <span class="lucide icon-{UserPathIcons[id]}"></span>
  <span>{UserPathCaptions[id]}</span>
  <span class="path">
    {#each split as part, i}
      {#if i > 0}
        <span class="lucide icon-chevron-right"></span>
        <span>{part}</span>
      {:else}
        <span class="pill">
          <span class="lucide icon-hard-drive"></span>
          <span>{part}</span>
        </span>
      {/if}
    {/each}
  </span>
</button>
