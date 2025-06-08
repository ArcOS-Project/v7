<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import type { AdminPortalRuntime } from "../runtime";
  import { AdminPortalPageStore } from "../store";
  import type { AdminPortalPage } from "../types";

  const { process, pageData }: { process: AdminPortalRuntime; pageData: AdminPortalPage } = $props();
</script>

<div class="status-bar">
  <div class="crumbs">
    <p>{process.app.data.metadata.name}</p>
    <span class="lucide icon-chevron-right"></span>
    {#if pageData.parent}
      <p>{AdminPortalPageStore.get(pageData.parent)?.parent || "Unknown"}</p>
      <span class="lucide icon-chevron-right"></span>
    {/if}
    <p>{pageData.name}</p>
  </div>
  <ProfilePicture height={16} userDaemon={process.userDaemon!} />
</div>
