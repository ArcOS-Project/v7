<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import type { AdminPortalRuntime } from "../../runtime";
  import type { FilesystemsData } from "../../types";
  import FilesystemRow from "./Filesystems/FilesystemRow.svelte";

  const { process, data }: { process: AdminPortalRuntime; data: FilesystemsData } = $props();
  const { users } = data;
  const { admin } = process;
</script>

<div class="fs-list">
  <div class="row header">
    <div class="segment pfp">
      <ProfilePicture height={20} />
    </div>
    <div class="segment username">Username</div>
    <div class="segment used">Used</div>
    <div class="segment available">Available</div>
    <div class="segment total">Total</div>
    <div class="segment quota">Quota</div>
    <div class="segment index">Index</div>
    <div class="segment mount">Mount</div>
  </div>
  {#each users as user (user._id)}
    <FilesystemRow {user} {admin} {process} />
  {/each}
</div>
