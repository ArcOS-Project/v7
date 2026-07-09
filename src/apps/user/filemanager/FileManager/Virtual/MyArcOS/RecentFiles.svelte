<script lang="ts">
  import type { IFileManagerRuntime } from "$interfaces/runtimes/IFileManagerRuntime";
  import type { IRecentFilesService } from "$interfaces/services/IRecentFilesService";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import RecentFile from "./RecentFiles/RecentFile.svelte";

  const { process, service }: { process: IFileManagerRuntime; service: IRecentFilesService } = $props();
  const { userPreferences } = process;
  const { Recents } = service;

  let selected = $state<string>("");
</script>

<section class="recent-files">
  <button
    class="expander"
    onclick={() =>
      ($userPreferences.appPreferences.fileManager.myExpandRecents =
        !$userPreferences.appPreferences.fileManager.myExpandRecents)}
    class:expanded={$userPreferences.appPreferences.fileManager.myExpandRecents}
    use:contextMenu={[
      [
        {
          caption: "Clear recents",
          icon: "x",
          action: () => service.Recents.set([]),
        },
      ],
      process,
    ]}
  >
    <span>Recent files</span>
    <span class="lucide icon-chevron-down"></span>
  </button>
  {#if $userPreferences.appPreferences.fileManager.myExpandRecents}
    <div class="content">
      {#if !$Recents?.length}
        <p class="empty">The files you open will appear in this list.</p>
      {:else}
        {#each $Recents as path (path)}
          <RecentFile {path} {service} {process} bind:selected />
        {/each}
      {/if}
    </div>
  {/if}
</section>
