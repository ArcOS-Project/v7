<script lang="ts">
  import Icon from "$lib/Icon.svelte";
  import { Env } from "$ts/env";
  import type { DispatchClientListItem } from "$types/system/dispatch";
  import { ProcessStateIcons } from "$types/system/process";
  import type { ExpandedUserInfo } from "$types/user";
  import ProcessRows from "./ProcessRows.svelte";

  const { userId, user, clients }: { userId: string; user: ExpandedUserInfo; clients: Record<string, DispatchClientListItem> } =
    $props();
</script>

<div class="row user">
  <div class="segment name">
    <Icon icon="AccountIcon" />
    <span>{user?.profile?.displayName ?? user?.username}</span>
  </div>
</div>
<div class="indent">
  {#each Object.entries(clients) as [id, client] (id)}
    <div class="row client">
      <div class="segment name">
        <Icon icon="ArcSystemIcon" />
        <span>{Env.get("DISPATCH_SOCK_ID") === id ? "This ArcOS instance" : "ArcOS v7"} - {client.id}</span>
      </div>
    </div>
    <div class="indent">
      <ProcessRows processes={clients[id].processes} parentPid={undefined} />
    </div>
  {/each}
</div>
