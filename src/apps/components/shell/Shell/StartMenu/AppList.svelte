<script lang="ts">
  import { isPopulatable } from "$ts/apps/util";
  import type { AppStorage } from "$types/app";
  import type { ShellRuntime } from "../../runtime";
  import ListItem from "./AppList/ListItem.svelte";

  const { process }: { process: ShellRuntime } = $props();

  let apps = $state<AppStorage>([]);

  $effect(() => {
    if (!process.handler.renderer) return;

    const unsubscribe = process.userDaemon?.appStore?.buffer.subscribe((v) => {
      apps = v;
    });

    return () => unsubscribe && unsubscribe();
  });
</script>

<div class="app-list">
  {#each apps as app}
    {#if isPopulatable(app) && !process.userDaemon?.checkDisabled(app.id)}
      <ListItem {app} {process} />
    {/if}
  {/each}
</div>
