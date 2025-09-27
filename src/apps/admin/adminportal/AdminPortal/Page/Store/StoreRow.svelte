<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { StoreItemIcon } from "$ts/distrib/util";
  import { formatBytes } from "$ts/util/fs";
  import type { ReadableStore } from "$ts/writable";
  import type { StoreItem } from "$types/package";
  import type { ExpandedUserInfo } from "$types/user";
  import dayjs from "dayjs";

  const {
    process,
    item,
    user,
    selection,
  }: { process: AdminPortalRuntime; item: StoreItem; user: ExpandedUserInfo; selection: ReadableStore<string> } = $props();
  const { redacted } = process;
  const { profile } = user;
  const lastUpdated = dayjs(item.lastUpdated).format("DD MMM YYYY");
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="item-row"
  onclick={() => ($selection = item._id)}
  class:selected={$selection === item._id}
  ondblclick={() => process.switchPage("viewStoreItem", { id: item._id })}
>
  <ProfilePicture fallback={profile.profilePicture} height={20} showOnline online={profile.dispatchClients > 0} />
  <div class="segment author" class:redacted={$redacted}>
    <button class="link" onclick={() => process.switchPage("viewUser", { user })}>{user.username}</button>
  </div>
  <div class="segment name">
    <img src={StoreItemIcon(item)} alt="" />
    <span>{item.name}</span>
  </div>
  <div class="segment version">{item.pkg.version}</div>
  <div class="segment size">{formatBytes(item.size)}</div>
  <div class="segment install-count">{item.installCount}</div>
  <div class="segment last-updated">{lastUpdated}</div>
  <div class="segment verified" class:is-verified={item.verifiedVer === item.pkg.version}>
    {item.verifiedVer === item.pkg.version ? "Yes" : "No"}
  </div>
  <div class="segment official" class:is-official={item.official}>{item.official ? "Yes" : "No"}</div>
  <div class="segment deprecated" class:is-deprecated={item.deprecated}>{item.deprecated ? "Yes" : "No"}</div>
</div>
