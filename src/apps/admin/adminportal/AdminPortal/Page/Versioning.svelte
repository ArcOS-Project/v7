<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/admin";
  import type { IMigrationService } from "$interfaces/service";
  import HtmlSpinner from "$lib/HtmlSpinner.svelte";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { Logo } from "$ts/branding";
  import { Daemon } from "$ts/server/user/daemon";
  import type { VersioningData, VersioningNode } from "../../types";

  const migrationService = Daemon.serviceHost?.getService<IMigrationService>("MigrationSvc");
  const migrations = migrationService?.MIGRATIONS.map((m) => m.name) || [];
  const { data, process }: { data: VersioningData; process: IAdminPortalRuntime } = $props();
  const { redacted } = process;

  let versions = $state<Record<string, VersioningNode>>({});
  let loading = $state<boolean>(false);

  async function populate() {
    const { incrementProgress, caption, stop } = await Daemon.helpers!.GlobalLoadIndicator("Just a moment...", process.pid, {
      max: data.users.length,
      value: 0,
      useHtml: true,
    });
    loading = true;
    versions = {};

    for (const user of data.users) {
      caption.set(
        `Reading configuration for ${user.preferences?.account?.displayName ?? user.username} (${user.username})<br>ID: ${user._id}`
      );

      versions[user._id] = {
        os: await process.getRegisteredVersionFor(user.username),
        migrations: await process.getMigrationIndexFor(user.username),
      };

      incrementProgress?.(1);
      versions = versions;
    }

    stop?.();
    loading = false;
  }
</script>

<div class="header">
  <h1>VERSIONING ({Object.keys(versions).length} / {data.users.length})</h1>
  {#if loading}
    <HtmlSpinner height={20} thickness={3} />
  {/if}
  <button class="populate" onclick={populate} disabled={loading}>Populate</button>
</div>
<div class="version-list">
  <div class="row header">
    <img src={Logo()} alt="" />
    <div class="segment username">Author</div>
    <div class="segment os-version">OS version</div>
    {#each migrations as migration}
      <div class="segment migration variant-{migration}" title={migration}>{migration.slice(0, 6)}</div>
    {/each}
  </div>
  {#each Object.entries(versions) as [userId, version] (userId)}
    {@const user = data.users.find((u) => u._id === userId)}
    {#if user}
      <div class="row">
        <ProfilePicture fallback={user.profile.profilePicture} height={20} showOnline online={user.profile.dispatchClients > 0} />
        <div class="segment username" class:redacted={$redacted}>
          <button class="link" onclick={() => process.switchPage("viewUser", { user })}>{user.username}</button>
        </div>
        <div class="segment os-version">{version.os}</div>
        {#each migrations as migration}
          <div class="segment migration variant-{migration}" title={migration}>{version.migrations[migration] ?? "-"}</div>
        {/each}
      </div>
    {/if}
  {/each}
</div>
