<script lang="ts">
  import type { IAppProcess } from "$interfaces/app";
  import AltMenuItem from "./AltMenu/AltMenuItem.svelte";

  const { process }: { process: IAppProcess } = $props();
  const { altMenu } = process;
</script>

<div class="alt-menu nodrag">
  {#each $altMenu as menu}
    <AltMenuItem {menu} {process} />
  {/each}
</div>
