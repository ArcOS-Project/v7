<script lang="ts">
  import type { IShellRuntime } from "$interfaces/shell";
  import { onMount } from "svelte";
  import type { QuickSetting } from "../../types";

  const { setting, process }: { setting: QuickSetting; process: IShellRuntime } = $props();
  const { userPreferences } = process;

  let active = $state(false);

  onMount(() => {
    userPreferences.subscribe(update);
  });

  async function action() {
    await setting.action(process);
  }

  async function update() {
    active = await setting.isActive(process);
  }
</script>

<button
  class="setting lucide icon-{setting.icon} {setting.className || ''}"
  aria-label={setting.caption}
  title={setting.caption}
  onclick={action}
  class:active
></button>
