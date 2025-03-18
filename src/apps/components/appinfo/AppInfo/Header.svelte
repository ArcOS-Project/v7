<script lang="ts">
  import { WarningIcon } from "$ts/images/dialog";
  import type { App } from "$types/app";
  import { onMount } from "svelte";
  import type { AppInfoRuntime } from "../runtime";
  import { maybeIconId } from "$ts/images";

  interface Props {
    target: App;
    id: string;
    process: AppInfoRuntime;
  }

  const { target, id, process }: Props = $props();
  const { userPreferences } = process;

  let disabled = $state(false);

  onMount(() => {
    const sub = userPreferences.subscribe((v) => {
      disabled = v.disabledApps.includes(id);
    });

    () => sub();
  });

  function launch() {
    process.spawnApp(id);
  }

  function toggleDisabledState() {
    if (disabled) process.userDaemon?.enableApp(id);
    else process.userDaemon?.disableApp(id);
  }
</script>

<div class="header">
  <div class="left">
    <img src={maybeIconId(target.metadata.icon)} alt="" />
    <div class="base-info">
      <p class="name">
        <span>{target.metadata.name}</span>
        {#if disabled}
          <img src={WarningIcon} alt="" class="disabled" title="{target.metadata.name} is disabled!" />
        {/if}
      </p>
      <p class="author">{target.metadata.author}</p>
    </div>
  </div>
  <div class="right">
    <button class="disable" onclick={toggleDisabledState} class:disabled>{disabled ? "Enable" : "Disable"}</button>
    <button class="lucide icon-rocket" onclick={launch} aria-label="Launch"></button>
  </div>
</div>
