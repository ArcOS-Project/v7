<script lang="ts">
  import { onMount } from "svelte";
  import type { ShellRuntime } from "../../runtime";
  import Spinner from "../../../../../lib/Spinner.svelte";
  import type { Notification } from "$types/notification";
  import NotificationItem from "./Notifications/NotificationItem.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { userDaemon } = process;

  let loading = $state(true);
  let noDaemon = $state(false);
  let store = $state<[string, Notification][]>();

  onMount(() => {
    if (!userDaemon) {
      loading = false;
      noDaemon = true;

      return;
    }

    userDaemon.globalDispatch.subscribe(
      "update-notifications",
      ([notifications]) => {
        store = [...notifications];

        console.log(notifications);
      }
    );
    store = [...userDaemon.notifications];
    loading = false;
  });

  function clear() {
    userDaemon?.clearNotifications();
  }
</script>

<div class="notifications">
  <h1>
    <span>Notifications</span>
    <button
      class="lucide icon-eraser"
      aria-label="Clear Notifications"
      disabled={loading || noDaemon}
      onclick={clear}
    ></button>
  </h1>
  <div class="content">
    {#if loading}
      <Spinner height={32} />
    {:else if noDaemon || !userDaemon}
      <p class="no-daemon">ERR_NO_DAEMON</p>
    {:else if store}
      {#each [...store] as [id, notification]}
        <NotificationItem {userDaemon} {id} {notification} />
      {/each}
      {#if !store.length}
        <p class="none">No notifications</p>
      {/if}
    {:else}
      error
    {/if}
  </div>
</div>
