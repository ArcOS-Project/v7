<script lang="ts">
  import { onMount } from "svelte";
  import type { ShellRuntime } from "../runtime";
  import type { Notification } from "$types/notification";
  import type { ErrorButton } from "$types/notification";

  const { process }: { process: ShellRuntime } = $props();
  const { actionCenterOpened } = process;

  let timeout: NodeJS.Timeout | undefined;
  let data: Notification | undefined = $state();
  let show = $state(false);

  onMount(() => {
    process.globalDispatch.subscribe("send-notification", ([incoming]) => {
      if ($actionCenterOpened) return;

      data = incoming;
      show = true;

      if (timeout) clearTimeout(timeout);

      if (incoming.timeout)
        timeout = setTimeout(() => {
          show = false;
        }, 3000);
    });
  });

  actionCenterOpened.subscribe((v) => {
    if (v) dismiss();
  });

  function dismiss() {
    show = false;
  }

  function trigger(button: ErrorButton) {
    dismiss();
    button.action();
  }
</script>

<div class="push-notification" class:show>
  {#if data}
    {#if data.image}
      <div class="left">
        <img src={data.image} alt="" class="icon" />
      </div>
    {/if}
    <div class="content">
      <h1 class="header">
        <span title={data.title}>{data.title}</span>
        <button
          class="lucide icon-arrow-right"
          onclick={dismiss}
          aria-label="Delete"
        ></button>
      </h1>
      <p class="message">{@html data.message}</p>
      {#if data.buttons}
        <div class="buttons">
          {#each data.buttons as button}
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
