<script lang="ts">
  import { onMount } from "svelte";
  import type { IShellRuntime } from "$interfaces/shell";

  const { process }: { process: IShellRuntime } = $props();
  const { userPreferences, workspaceManagerOpened } = process;

  let show = $state(false);
  let index = $state(-1);
  let timeout: NodeJS.Timeout | undefined;

  onMount(() => {
    const sub = userPreferences.subscribe((v) => {
      const incomingIndex = v.workspaces.index;

      if (incomingIndex === index) return;
      if (timeout) clearTimeout(timeout);

      index = incomingIndex;

      show = true;
      timeout = setTimeout(() => {
        show = false;
      }, 1000);
    });

    return () => sub();
  });
</script>

<div
  class="workspace-indicator shell-colored"
  class:show={show || $workspaceManagerOpened}
  class:colored={$userPreferences.shell.taskbar.colored}
>
  {index + 1}
</div>
