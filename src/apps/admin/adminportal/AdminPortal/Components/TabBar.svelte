<script lang="ts">
  let {
    options,
    defaultTab = undefined,
    selected = $bindable<string>(defaultTab || ""),
    onChange,
  }: {
    options: string[];
    defaultTab?: string;
    selected: string;
    onChange?: () => any;
  } = $props();
</script>

<div class="tab-bar">
  {#each options as option}
    <button
      class="tab-bar-tab"
      class:selected={option === selected}
      onclick={() => {
        selected = option;
        setTimeout(() => {
          onChange?.();
        });
      }}
    >
      {option}
    </button>
  {/each}
</div>
