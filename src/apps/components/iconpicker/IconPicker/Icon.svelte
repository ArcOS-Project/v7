<script lang="ts">
  import type { IIconPickerRuntime } from "$interfaces/runtimes/IIconPickerRuntime";
<<<<<<< HEAD
  import Icon from "$lib/Icon.svelte";
=======
>>>>>>> development

  const { process, id, icon }: { process: IIconPickerRuntime; id: string; icon: string } = $props();
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
  <Icon {icon} />
</button>
