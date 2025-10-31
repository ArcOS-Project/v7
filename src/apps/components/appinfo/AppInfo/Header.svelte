<script lang="ts">
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
    <img src={process.userDaemon?.getAppIcon(target) || process.getIconCached("QuestionIcon")} alt="" />
    <div class="base-info">
      <p class="name">
        <span>{target?.metadata?.name || "%general.unknown%"}</span>
        {#if disabled}
          <img
            src={process.getIconCached("WarningIcon")}
            alt=""
            class="disabled"
            title="%apps.AppInfo.header.isDisabled({target?.metadata?.name || 'Unknown'})%"
          />
        {/if}
      </p>
      <p class="author">{target?.metadata?.author || "%general.noAuthor%"}</p>
    </div>
  </div>
  <div class="right">
    <button class="disable" onclick={toggleDisabledState} class:disabled disabled={process.userDaemon?.isVital(target!)}>
      {disabled ? "%general.enable%" : "%general.disable%"}
    </button>
    {#if (target?.entrypoint || target?.workingDirectory) && installed}
      <button
        class="lucide icon-trash-2"
        onclick={deleteApp}
        title="%apps.AppInfo.header.deleteApp%"
        aria-label="%apps.AppInfo.header.deleteApp%"
      ></button>
    {/if}
    <button
      class="lucide icon-rocket"
      onclick={launch}
      title="%apps.AppInfo.header.launch%"
      aria-label="%apps.AppInfo.header.launch%"
    ></button>
  </div>
</div>
