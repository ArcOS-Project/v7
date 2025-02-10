<script lang="ts">
  import type { ShellRuntime } from "../runtime";

  const { process }: { process: ShellRuntime } = $props();
  const { userPreferences } = process;

  let show = $state(false);
  let index = $state(-1);
  let timeout: NodeJS.Timeout | undefined;

  $effect(() => {
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
  class:show
  class:colored={$userPreferences.shell.taskbar.colored}
>
  {index + 1}
</div>
