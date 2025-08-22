<script lang="ts">
  import { QuestionIcon, WarningIcon } from "$ts/images/dialog";
  import type { App } from "$types/app";
  import { onMount } from "svelte";
  import type { AppInfoRuntime } from "../runtime";

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

  async function deleteApp() {
    const deleted = await process.userDaemon?.uninstallAppWithAck(target!);

    if (deleted) process.closeWindow();
  }
</script>

<div class="header">
  <div class="left">
    <img src={process.userDaemon?.getAppIcon(target) || QuestionIcon} alt="" />
    <div class="base-info">
      <p class="name">
        <span>{target?.metadata?.name || "Unknown"}</span>
        {#if disabled}
          <img src={WarningIcon} alt="" class="disabled" title="{target?.metadata?.name || 'Unknown'} is disabled!" />
        {/if}
      </p>
      <p class="author">{target?.metadata?.author || "No author"}</p>
    </div>
  </div>
  <div class="right">
    <button class="disable" onclick={toggleDisabledState} class:disabled disabled={process.userDaemon?.isVital(target!)}
      >{disabled ? "Enable" : "Disable"}</button
    >
    {#if (target?.entrypoint || target?.workingDirectory) && $userPreferences.userApps[target?.id]}
      <button class="lucide icon-trash-2" onclick={deleteApp} title="Delete app" aria-label="Delete app"></button>
    {/if}
    <button class="lucide icon-rocket" onclick={launch} title="Launch" aria-label="Launch"></button>
  </div>
</div>
