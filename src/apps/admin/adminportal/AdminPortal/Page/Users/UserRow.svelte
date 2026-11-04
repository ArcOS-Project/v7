<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import type { ReadableStore } from "$types/shared/writable";
  import type { ExpandedUserInfo } from "$types/user";
  import dayjs from "dayjs";
  import UsernameDisplay from "../../UsernameDisplay.svelte";

  const {
    process,
    user,
    selection,
    compact = false,
  }: { process: IAdminPortalRuntime; user: ExpandedUserInfo; selection: ReadableStore<string>; compact?: boolean } = $props();
  const { redacted } = process;
  const { profile } = user;
  const created = dayjs(user.createdAt).format("DD MMM YYYY");
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<tr
  class="user-row"
  onclick={() => ($selection = user._id)}
  class:selected={$selection === user._id}
  ondblclick={() => process.switchPage("viewUser", { user })}
>
  <td>
    <UsernameDisplay {user} {process} />
  </td>

  {#if !compact}
    <td class:redacted={$redacted}>{user.email}</td>
  {/if}
  <td>{created}</td>
  <td class:clr-green={user.approved}>{user.approved ? "Yes" : "No"}</td>
  <td class:clr-orange={user.admin}>{user.admin ? "Yes" : "No"}</td>
  <td class:clr-blue={user.isSystem}>{user.isSystem ? "Yes" : "No"}</td>
</tr>
