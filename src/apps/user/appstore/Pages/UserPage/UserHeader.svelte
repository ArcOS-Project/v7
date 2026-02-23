<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { Plural } from "$ts/util";
  import type { PartialStoreItem } from "$types/package";
  import type { PublicUserInfo } from "$types/user";
  import type { AppStoreRuntime } from "../../runtime";

  const { process, user, results }: { process: AppStoreRuntime; user: PublicUserInfo; results: PartialStoreItem[] } = $props();

  const hasOfficials = results.filter((r) => r.official).length > 0;
  const hasPackages = results.length > 0;
</script>

{#if user}
  <div class="user-header">
    <!-- TODO: add loginBackground to PublicUserInfo so that it can be used here -->
    <img src={user.profilePicture} alt="" class="banner fallback" />
    <div class="user-info">
      <ProfilePicture height={64} fallback={user.profilePicture} showOnline online={user.dispatchClients > 0} />
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
