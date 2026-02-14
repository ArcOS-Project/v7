<script lang="ts">
  let { value = $bindable(), caption }: { value?: string; caption: string } = $props();

  let colorPicker = $state<HTMLInputElement>();
</script>

<div class="color-modifier">
  <p class="name">{caption}</p>
  <div class="dot-wrapper">
    <input type="color" bind:value bind:this={colorPicker} />
    <button class="dot" aria-label="Color" style="--color: {value};" onclick={() => colorPicker?.click()}></button>
  </div>
  <input type="text" bind:value maxlength="7" placeholder="#000000" />
</div>
