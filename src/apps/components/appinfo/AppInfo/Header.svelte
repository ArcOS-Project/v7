<script lang="ts">
  import type { IAppInfoRuntime } from "$interfaces/runtimes/IAppInfoRuntime";
  import Icon from "$lib/Icon.svelte";
  import { Daemon } from "$ts/env";
  import type { App } from "$types/apps/app";
  import { onMount } from "svelte";

  interface Props {
    target: App;
    id: string;
    process: IAppInfoRuntime;
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
    if (disabled) Daemon?.apps?.enableApp(id);
    else Daemon?.apps?.disableApp(id);
  }

  async function deleteApp() {
    const deleted = await Daemon?.appreg?.uninstallAppWithAck(target!);

    if (deleted) process.closeWindow();
  }
</script>

<div class="header">
  <div class="left">
    <Icon icon="@app::{target.id}" />
    <div class="base-info">
      <p class="name">{target?.metadata?.name || "%general.unknown%"}</p>
      <p class="author">{target?.metadata?.author || "%general.noAuthor%"}</p>
    </div>
  </div>
  <div class="right">
    <button class="disable" onclick={toggleDisabledState} class:disabled disabled={Daemon?.apps?.isVital(target!)}
      >{disabled ? "%general.enable%" : "%general.disable%"}</button
    >
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
