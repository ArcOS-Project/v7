<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import type { IMigrationService } from "$interfaces/services/IMigrationService";
  import HtmlSpinner from "$lib/HtmlSpinner.svelte";
  import Icon from "$lib/Icon.svelte";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { Logo } from "$ts/branding";
  import { Daemon } from "$ts/env";
  import type { VersioningData, VersioningNode } from "../../types";

  const migrationService = Daemon.serviceHost?.getService<IMigrationService>("MigrationSvc");
  const migrations = migrationService?.MIGRATIONS.map((m) => m.name) || [];
  const { data, process }: { data: VersioningData; process: IAdminPortalRuntime } = $props();
  const { redacted } = process;

  let versions = $state<Record<string, VersioningNode>>({});
  let loading = $state<boolean>(false);

  async function populate() {
    const { caption, stop } = await Daemon.helpers!.GlobalLoadIndicator("Just a moment...", process.pid);
    loading = true;
    versions = {};

    await Promise.all(
      data.users.map((user) => {
        new Promise<void>(async (r) => {
          versions[user._id] = {
            os: await process.admin.getRegisteredVersionFor(user.username),
            migrations: await process.admin.getMigrationIndexFor(user.username),
          };

          caption.set(`Read configuration for ${user.preferences?.account?.displayName ?? user.username} (${user.username})`);

          r();
        });
      })
    );

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
<div class="table-wrapper version-list">
  <table>
    <thead>
      <tr>
        <th class="icon-col"><Icon icon={Logo()} style="height: 24px" /></th>
        <th class="username">Author</th>
        <th class="os-version">OS version</th>
        {#each migrations as migration}
          <th class="migration variant-{migration}" title={migration}>{migration.slice(0, 6)}</th>
        {/each}
      </tr>
    </thead>
    <colgroup>
      <col width="1%" />
      <col width="20%" />
      <col width="10%" />
      {#each migrations as _}
        <col width="10%" />
      {/each}
    </colgroup>
    <tbody>
      {#each Object.entries(versions) as [userId, version] (userId)}
        {@const user = data.users.find((u) => u._id === userId)}

        {#if user?.profile}
          <tr>
            <td class="icon-col">
              <ProfilePicture
                fallback={user.profile.profilePicture}
                height={20}
                showOnline
                online={user.profile.dispatchClients > 0}
              />
            </td>
            <td class="username">
              <button class="link" onclick={() => process.switchPage("viewUser", { user })}>{user.username}</button>
            </td>
            <td class="os-version">{version.os}</td>
            {#each migrations as migration}
              <td class="migration variant-{migration}" title={migration}>{version.migrations[migration] ?? "-"}</td>
            {/each}
          </tr>
        {/if}
      {/each}
    </tbody>
  </table>
</div>
