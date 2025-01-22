<script lang="ts">
  import { ArcOSVersion } from "$ts/env";
  import { ArcBuild } from "$ts/metadata/build";
  import type { ReadableStore } from "$ts/writable";
  import dayjs from "dayjs";

  let time = $state("");

  const {
    hideLockscreen,
    loadingStatus,
    errorMessage,
  }: {
    hideLockscreen: ReadableStore<boolean>;
    loadingStatus: ReadableStore<string>;
    errorMessage: ReadableStore<string>;
  } = $props();

  $effect(() => {
    const interval = setInterval(
      () => (time = dayjs().format("MMM D, HH:mm")),
      500
    );

    return () => clearInterval(interval);
  });

  function lock() {
    $hideLockscreen = false;
  }
</script>

<div class="topbar" class:hide={$loadingStatus || $errorMessage}>
  <div class="version">v{ArcOSVersion} ({ArcBuild()})</div>
  <div class="time">{time}</div>
  <div class="actions">
    <button class="lock" aria-label="Lock" onclick={lock}>
      <span class="lucide icon-lock"></span>
    </button>
  </div>
</div>
