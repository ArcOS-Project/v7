<script lang="ts">
  import type { IconPickerRuntime } from "../runtime";

  const { process, id, icon }: { process: IconPickerRuntime; id: string; icon: string } = $props();
  const { selected } = process;
</script>

<button class="icon" onclick={() => ($selected = id)} class:selected={id === $selected} title={id}>
  <img src={icon} alt="" />
</button>
