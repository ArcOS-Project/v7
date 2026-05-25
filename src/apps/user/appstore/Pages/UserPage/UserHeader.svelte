<script lang="ts">
  import type { IUserConnector } from "$interfaces/modules/server/IUserConnector";
  import type { IAppStoreRuntime } from "$interfaces/runtimes/IAppStoreRuntime";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { Daemon } from "$ts/env";
  import { Plural } from "$ts/util";
  import type { PartialStoreItem } from "$types/package";
  import type { PublicUserInfo } from "$types/user";

  const {
    process,
    user,
    results,
    userId,
  }: { process: IAppStoreRuntime; user: PublicUserInfo; results: PartialStoreItem[]; userId: string } = $props();

  const hasOfficials = results.filter((r) => r.official).length > 0;
  const hasPackages = results.length > 0;

</script>

{#if user}
  <div class="user-header">
    <!-- TODO: add loginBackground to PublicUserInfo so that it can be used here -->
    <img src={Daemon.GetConnector<IUserConnector>("UserConnector").LoginBgUrl(userId)} alt="" class="banner" />
    <div class="user-info">
      <ProfilePicture height={64} userId={userId} showOnline online={user.dispatchClients > 0} />
      <div class="info">
        <h1>{user.displayName || user.username}</h1>
        <p>{results.length} {Plural("package", results.length)}</p>
        <div class="pills">
          {#if user.admin}
            <div class="pill admin">
              <span class="lucide icon-shield-user"></span>
              <span>Admin</span>
            </div>
          {/if}
          {#if hasOfficials}
            <div class="pill certified">
              <span class="lucide icon-badge-check"></span>
              <span>Certified</span>
            </div>
          {/if}
          {#if hasPackages}
            <div class="pill developer">
              <span class="lucide icon-code-xml"></span>
              <span>Developer</span>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}
