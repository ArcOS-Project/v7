<script lang="ts">
  import { derived, get } from "svelte/store";
  import type { ShellRuntime } from "../../runtime";

  const { process }: { process: ShellRuntime } = $props();
  const { workspaceManagerOpened, userPreferences } = process;

  let workspaceIndex = derived(userPreferences, (v) => v.workspaces.index);

  function toggle() {
    $workspaceManagerOpened = !$workspaceManagerOpened;
  }

  function scroll(e: WheelEvent) {
    const down = e.deltaY > 0;
    const current = get(workspaceIndex);
    const desktops = userPreferences().workspaces.desktops;

    if (!down && current >= desktops.length - 1) return;
    else if (down && 0 >= current) return;

    userPreferences.update((v) => {
      if (!down) v.workspaces.index += 1;
      else v.workspaces.index -= 1;

      return v;
    });
  }
</script>

<button
  class="workspace-manager-button"
  class:active={$workspaceManagerOpened}
  onclick={toggle}
  onwheel={scroll}
  aria-label="Workspace Manager"
  title="Workspaces..."
>
  <span class="lucide icon-gallery-horizontal"></span>
</button>
