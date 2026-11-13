<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import Icon from "$lib/Icon.svelte";
  import { StoreItemIcon } from "$ts/util/distrib";
  import { formatBytes } from "$ts/util/fs";
  import type { ReadableStore } from "$types/shared/writable";
  import type { StoreItem } from "$types/tpa/package";
  import type { ExpandedUserInfo } from "$types/user";
  import dayjs from "dayjs";
  import UsernameDisplay from "../../UsernameDisplay.svelte";

  const {
    process,
    item,
    user,
    selection,
  }: { process: IAdminPortalRuntime; item: StoreItem; user: ExpandedUserInfo; selection: ReadableStore<string> } = $props();
  const { redacted } = process;
  const { profile } = user;
  const lastUpdated = dayjs(item.lastUpdated).format("DD MMM YYYY");
</script>

<tr
  class="item-row"
  onclick={() => ($selection = item._id)}
  class:selected={$selection === item._id}
  ondblclick={() => process.switchPage("viewStoreItem", { id: item._id })}
>
  <td>
    <UsernameDisplay {user} {process} />
  </td>
  <td>
    <div class="item-name">
      <Icon icon={StoreItemIcon(item)} />
      <span>{item.name}</span>
    </div>
  </td>
  <td>
    {item.pkg.version}
  </td>
  <td>
    {formatBytes(item.size)}
  </td>
  <td>
    {item.installCount}
  </td>
  <td>{lastUpdated}</td>
  <td>
    {item.verifiedVer === item.pkg.version ? "Yes" : "No"}
  </td>
  <td class={item.official ? "clr-green" : ""}>
    {item.official ? "Yes" : "No"}
  </td>
  <td class={item.official ? "clr-orange" : ""}>
    {item.deprecated ? "Yes" : "No"}
  </td>
</tr>