<script lang="ts">
  import type { FileManagerRuntime } from "$apps/user/filemanager/runtime";
  import { Daemon } from "$ts/daemon";
  import { RecentFilesService } from "$ts/servicehost/services/RecentFilesSvc";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import RecentFile from "./RecentFiles/RecentFile.svelte";

  const { process }: { process: FileManagerRuntime } = $props();
  const { userPreferences } = process;
  const service = Daemon.serviceHost?.getService<RecentFilesService>("RecentFilesSvc");
  const Configuration = service?.Configuration;

  let selected = $state<string>("");
</script>

{#if Configuration}
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
            action: () => service.Configuration.set([]),
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
        {#if !$Configuration?.length}
          <p class="empty">The files you open will appear in this list.</p>
        {:else}
          {#each $Configuration as path (path)}
            <RecentFile {path} {service} {process} bind:selected />
          {/each}
        {/if}
      </div>
    {/if}
  </section>
{/if}
