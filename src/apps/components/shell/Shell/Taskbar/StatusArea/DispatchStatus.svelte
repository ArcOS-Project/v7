<script lang="ts">
  import type { IGlobalDispatch } from "$interfaces/services/IGlobalDispatch";
  import type { Unsubscriber } from "$types/shared/writable";
  import { onDestroy, onMount } from "svelte";

  let { service }: { service: IGlobalDispatch } = $props();
  const { ConnectionState } = service;

  let unsubscribe: Unsubscriber;
  let title = $state<string>("Global dispatch");

  onMount(() => {
    unsubscribe = ConnectionState.subscribe((v) => {
      switch (v) {
        case "connected":
          title = "Connected to global dispatch";
          break;
        case "connecting":
          title = "Connecting to global dispatch...";
          break;
        case "disconnected":
          title = "Disconnected from global dispatch!";
          break;
      }
    });
  });

  onDestroy(() => {
    unsubscribe?.();
  });
</script>

<span
  class="lucide state-{$ConnectionState}"
  class:icon-wifi-off={$ConnectionState === "disconnected"}
  class:icon-wifi-sync={$ConnectionState === "connecting"}
  class:icon-wifi={$ConnectionState === "connected"}
  class:blink={$ConnectionState === "connecting"}
  {title}
></span>
