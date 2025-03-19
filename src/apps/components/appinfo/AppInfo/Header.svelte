<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import { maybeIconId } from "$ts/images";
  import { WarningIcon } from "$ts/images/dialog";
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

  function deleteApp() {
    MessageBox(
      {
        title: "Uninstall app?",
        message: `You're about to uninstall "${target.metadata.name}" by ${target.metadata.author}. Do you want to just uninstall it, or do you want to delete its files also?`,
        image: WarningIcon,
        sound: "arcos.dialog.warning",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Delete",
            action: () => {
              process.userDaemon?.deleteApp(target.id, true);
              process.closeWindow();
            },
          },
          {
            caption: "Just uninstall",
            action: () => {
              process.userDaemon?.deleteApp(target.id, false);
              process.closeWindow();
            },
            suggested: true,
          },
        ],
      },
      process.pid,
      true,
    );
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
    {#if (target.entrypoint || target.workingDirectory) && $userPreferences.userApps[target.id]}
      <button class="lucide icon-trash-2" onclick={deleteApp} aria-label="Delete app"></button>
    {/if}
    <button class="lucide icon-rocket" onclick={launch} aria-label="Launch"></button>
  </div>
</div>
