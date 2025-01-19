<script lang="ts">
  import type { UserDaemon } from "$ts/server/user/daemon";
  import { Sleep } from "$ts/sleep";
  import type { ErrorButton, Notification } from "$types/notification";
  import { onMount } from "svelte";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import updateLocale from "dayjs/plugin/updateLocale";
  import { RelativeTimeMod } from "$ts/dayjs";

  const {
    userDaemon,
    id,
    notification,
  }: {
    userDaemon: UserDaemon;
    id: string;
    notification: Notification;
  } = $props();

  let deleted = $state(false);
  let hideContent = $state(false);
  let collapsed = $state(false);
  let shortTime = $state("");
  let time = $state("");

  dayjs.extend(relativeTime);
  dayjs.extend(updateLocale);
  dayjs.updateLocale("en", RelativeTimeMod);

  onMount(() => {
    userDaemon.globalDispatch.subscribe(
      "delete-notification",
      async ([deletedId]) => {
        if (id === deletedId) {
          deleted = true;

          await Sleep(350);

          hideContent = true;
        }
      }
    );

    setInterval(() => {
      const dj = dayjs(notification.timestamp || null);
      time = dj.fromNow();
      shortTime = dj.format("HH:mm");
    }, 500);
  });

  function deleteThis() {
    userDaemon.deleteNotification(id);
  }

  function toggleCollapse() {
    collapsed = !collapsed;
  }

  async function trigger(button: ErrorButton) {
    if (deleted) return;

    await button.action();

    deleteThis();
  }
</script>

{#if notification}
  <div
    class="notification"
    class:deleted
    class:collapsed
    class:no-image={!notification.image}
  >
    {#if !hideContent}
      {#if notification.image}
        <div class="left">
          <img src={notification.image} alt="" class="icon" />
        </div>
      {/if}
      <div class="content">
        <h1 class="header">
          <span title={notification.title}>{notification.title}</span>
          <span class="timestamp" title={collapsed ? shortTime : time}>
            {collapsed ? shortTime : time}
          </span>

          <button
            class="lucide icon-trash-2"
            onclick={deleteThis}
            class:collapsed
            aria-label="Delete"
          ></button>
          <button
            class="collapse icon-chevron-{collapsed ? 'down' : 'up'}"
            class:collapsed
            onclick={toggleCollapse}
            aria-label={collapsed ? "Expand" : "Collapse"}
          ></button>
        </h1>
        <p class="message">{@html notification.message}</p>
        {#if notification.buttons}
          <div class="buttons">
            {#each notification.buttons as button}
              <button
                onclick={() => trigger(button)}
                class:suggested={button.suggested}
              >
                {button.caption}
              </button>
            {/each}
          </div>
        {/if}
      </div>
    {/if}
  </div>
{/if}
