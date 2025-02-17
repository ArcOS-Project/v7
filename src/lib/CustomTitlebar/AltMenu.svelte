<script lang="ts">
  import type { AppProcess } from "$ts/apps/process";
  import AltMenuItem from "./AltMenu/AltMenuItem.svelte";

  const { process }: { process: AppProcess } = $props();
  const { altMenu } = process;
</script>

<div class="alt-menu">
  {#each $altMenu as menu}
    <AltMenuItem {menu} {process} />
  {/each}
</div>
