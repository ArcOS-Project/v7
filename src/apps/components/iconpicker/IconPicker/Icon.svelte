<script lang="ts">
  import type { IconPickerRuntime } from "../runtime";

  const { process, id, icon }: { process: IconPickerRuntime; id: string; icon: string } = $props();
  const { selected } = process;

  let elm: HTMLButtonElement;
  $effect(() => {
    if ($selected === id)
      elm.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  });
</script>

<button bind:this={elm} class="icon" onclick={() => ($selected = id)} class:selected={id === $selected} title={id}>
  <img src={icon} alt="" />
</button>
