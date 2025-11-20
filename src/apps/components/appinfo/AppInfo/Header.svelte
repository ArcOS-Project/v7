<script lang="ts">
  import type { App } from "$types/app";
  import { onMount } from "svelte";
  import type { AppInfoRuntime } from "../runtime";
  import { Daemon } from "$ts/server/user/daemon";

  interface Props {
    target: App;
    id: string;
    process: AppInfoRuntime;
  }

  const { target, id, process }: Props = $props();
  const { userPreferences } = process;

  const installed = !!process.appStore().getAppSynchronous(id);

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
    if (disabled) Daemon()?.apps?.enableApp(id);
    else Daemon()?.apps?.disableApp(id);
  }

  async function deleteApp() {
    const deleted = await Daemon()?.appreg?.uninstallAppWithAck(target!);

    if (deleted) process.closeWindow();
  }
</script>

<div class="header">
  <div class="left">
    <img src={Daemon()?.icons?.getAppIcon(target) || process.getIconCached("QuestionIcon")} alt="" />
    <div class="base-info">
      <p class="name">
        <span>{target?.metadata?.name || "Unknown"}</span>
        {#if disabled}
          <img
            src={process.getIconCached("WarningIcon")}
            alt=""
            class="disabled"
            title="{target?.metadata?.name || 'Unknown'} is disabled!"
          />
        {/if}
      </p>
      <p class="author">{target?.metadata?.author || "No author"}</p>
    </div>
  </div>
  <div class="right">
    <button class="disable" onclick={toggleDisabledState} class:disabled disabled={Daemon()?.apps?.isVital(target!)}
      >{disabled ? "Enable" : "Disable"}</button
    >
    {#if (target?.entrypoint || target?.workingDirectory) && installed}
      <button class="lucide icon-trash-2" onclick={deleteApp} title="Delete app" aria-label="Delete app"></button>
    {/if}
    <button class="lucide icon-rocket" onclick={launch} title="Launch" aria-label="Launch"></button>
  </div>
</div>
