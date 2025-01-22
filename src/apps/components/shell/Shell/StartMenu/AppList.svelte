<script lang="ts">
  import { isPopulatable } from "$ts/apps/util";
  import type { App } from "$types/app";
  import type { ShellRuntime } from "../../runtime";
  import ListItem from "./AppList/ListItem.svelte";

  const { process }: { process: ShellRuntime } = $props();

  let apps = $state<App[]>([]);

  $effect(() => {
    if (!process.handler.renderer) return;

    const unsubscribe = process.handler.renderer.appStore.subscribe((v) => {
      apps = [...v].map(([_, app]) => app.data);
    });

    return () => unsubscribe();
  });
</script>

<div class="app-list">
  {#each apps as app}
    {#if isPopulatable(app)}
      <ListItem {app} {process} />
    {/if}
  {/each}
</div>
