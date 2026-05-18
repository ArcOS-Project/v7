<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/admin";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { ProfilePictures } from "$ts/images/pfp";
  import type { ScopesData } from "../../types";
  import ScopeRow from "./Scopes/ScopeRow.svelte";

  const { process, data }: { process: IAdminPortalRuntime; data: ScopesData } = $props();
  const { admins } = data;
</script>

<div class="scope-list">
  <div class="row header">
    <div class="segment pfp">
      <ProfilePicture height={20} fallback={ProfilePictures.def} />
    </div>
    <div class="segment username">Username</div>
    <div class="segment pages">Pages</div>
    <div class="segment count">Count</div>
    <div class="segment god">God?</div>
  </div>
  {#each admins as admin (admin._id)}
    <ScopeRow {admin} {process} />
  {/each}
</div>
