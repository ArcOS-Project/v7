<script lang="ts">
  import { Sleep } from "$ts/sleep";
  import type { Notification } from "$types/notification";
  import { onMount } from "svelte";
  import Spinner from "../../../../../lib/Spinner.svelte";
  import type { ShellRuntime } from "../../runtime";
  import NotificationItem from "./Notifications/NotificationItem.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { userDaemon } = process;

  let loading = $state(true);
  let noDaemon = $state(false);
  let store = $state<[string, Notification][]>();
  let isEmpty = $state(false);

  onMount(() => {
    if (!userDaemon) {
      loading = false;
      noDaemon = true;

      return;
    }

    userDaemon.globalDispatch.subscribe("update-notifications", async ([notifications]) => {
      store = [...notifications];

      isEmpty = false;
      await Sleep(0);
      isEmpty = ![...notifications].filter(([_, n]) => !n.deleted).length;
    });

    store = [...userDaemon.notifications];
    isEmpty = true;
    loading = false;
  });

  function clear() {
    userDaemon?.clearNotifications();
  }
</script>

<div class="notifications">
  <h1>
    <span>Notifications</span>
    <button class="lucide icon-eraser" aria-label="Clear Notifications" disabled={loading || noDaemon || isEmpty} onclick={clear}
    ></button>
  </h1>
  <div class="content">
    {#if loading}
      <Spinner height={32} />
    {:else if noDaemon || !userDaemon}
      <p class="no-daemon">ERR_NO_DAEMON</p>
    {:else if store}
      {#if isEmpty}
        <p class="none">No notifications</p>
      {:else}
        {#each [...store] as [id, notification] (id)}
          <NotificationItem {userDaemon} {id} {notification} />
        {/each}
      {/if}
    {:else}
      error
    {/if}
  </div>
</div>
