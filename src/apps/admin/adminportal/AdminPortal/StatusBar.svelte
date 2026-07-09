<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { formatBytes } from "$ts/util/fs";
  import type { AdminPortalPage } from "../types";

  const { process, pageData }: { process: IAdminPortalRuntime; pageData: AdminPortalPage } = $props();
  const { redacted, propSize } = process;
</script>

<div class="status-bar">
  <div class="crumbs">
    <p>{process.app.data.metadata.name}</p>
    <span class="lucide icon-chevron-right"></span>
    {#if pageData.parent}
      {#each process.compileCrumbs(pageData.parent) as parentName}
        <p>{parentName || "Unknown"}</p>
        <span class="lucide icon-chevron-right"></span>
      {/each}
    {/if}

    <p>{pageData.name}</p>
  </div>
  <div class="prop-size">
    {#if $propSize < 0}
      Loading...{:else}
      {formatBytes($propSize)}
    {/if}
  </div>
  <button
    class="lock lucide"
    class:icon-lock={$redacted}
    class:icon-lock-open={!$redacted}
    onclick={() => ($redacted = !$redacted)}
    aria-label="Toggle redacting"
  ></button>
  <div class="sep"></div>
  <ProfilePicture height={20} />
  <span>{process.username}</span>
</div>
