<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import type { ReadableStore } from "$ts/writable";
  import type { ExpandedUserInfo } from "$types/user";
  import dayjs from "dayjs";

  const { process, user, selection }: { process: AdminPortalRuntime; user: ExpandedUserInfo; selection: ReadableStore<string> } =
    $props();
  const { redacted } = process;
  const { profile } = user;
  const created = dayjs(user.createdAt).format("DD MMM YYYY");
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="user-row"
  onclick={() => ($selection = user._id)}
  class:selected={$selection === user._id}
  ondblclick={() => process.switchPage("viewUser", { user })}
>
  <ProfilePicture fallback={profile.profilePicture} height={20} showOnline online={profile.dispatchClients > 0} />
  <div class="segment username" class:redacted={$redacted}>{profile.username}</div>
  <div class="segment email" class:redacted={$redacted}>{user.email}</div>
  <div class="segment created">{created}</div>
  <div class="segment account-number">{user.accountNumber}</div>
  <div class="segment approved" class:is-approved={user.approved}>{user.approved ? "Yes" : "No"}</div>
  <div class="segment admin" class:is-admin={user.admin}>{user.admin ? "Yes" : "No"}</div>
</div>
