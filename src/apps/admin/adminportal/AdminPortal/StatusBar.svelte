<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { Daemon } from "$ts/server/user/daemon";
  import { formatBytes } from "$ts/util/fs";
  import type { AdminPortalRuntime } from "../runtime";
  import { AdminPortalPageStore } from "../store";
  import type { AdminPortalPage } from "../types";

  const { process, pageData }: { process: AdminPortalRuntime; pageData: AdminPortalPage } = $props();
  const { redacted, propSize } = process;
</script>

<div class="status-bar">
  <div class="crumbs">
    <p>{process.app.data.metadata.name}</p>
    <span class="lucide icon-chevron-right"></span>
    {#if pageData.parent}
      <p>{AdminPortalPageStore.get(pageData.parent)?.name || "Unknown"}</p>
      <span class="lucide icon-chevron-right"></span>
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
