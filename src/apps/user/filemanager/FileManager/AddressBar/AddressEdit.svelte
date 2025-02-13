<script lang="ts">
  import { Store } from "$ts/writable";
  import type { FileManagerRuntime } from "../../runtime";

  const { process }: { process: FileManagerRuntime } = $props();
  const { currentTabUuid, tabs } = process;
  const value = Store<string>();

  function onkeydown(e: KeyboardEvent) {
    if (!$value) return;

    if (e.key === "Enter") {
      process.navigate($value);
    }
  }
</script>

<input
  type="text"
  bind:value={$value}
  placeholder={$tabs[$currentTabUuid].location}
  {onkeydown}
/>
