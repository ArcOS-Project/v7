<script lang="ts">
  import { WarningIcon } from "$ts/images/dialog";
  import type { App, ThirdPartyApp } from "$types/app";
  import type { AppInfoRuntime } from "../runtime";

  interface Props {
    target: App | ThirdPartyApp;
    id: string;
    process: AppInfoRuntime;
  }

  const { target, id, process }: Props = $props();

  function launch() {
    process.spawnApp(id);
  }
</script>

<div class="header">
  <div class="left">
    <img src={target.metadata.icon} alt="" />
    <div class="base-info">
      <p class="name">
        <span>{target.metadata.name}</span>
        <!-- {#if disabled}
          <img
            src={WarningIcon}
            alt=""
            class="disabled"
            title="{target.metadata.name} is disabled!"
          />
        {/if} -->
      </p>
      <p class="author">{target.metadata.author}</p>
    </div>
  </div>
  <div class="right">
    <button class="disable"> Disable </button>
    <button class="lucide icon-rocket" onclick={launch} aria-label="Launch"
    ></button>
  </div>
</div>
