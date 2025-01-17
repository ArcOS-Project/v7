<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import type { ShellRuntime } from "../../runtime";
  import type { Unsubscriber } from "svelte/store";
  import type { App } from "$types/app";
  import { isPopulatable } from "$ts/apps/util";
  import ListItem from "./AppList/ListItem.svelte";

  const { process }: { process: ShellRuntime } = $props();

  let unsubscribe: Unsubscriber;
  let apps = $state<App[]>([]);

  onMount(() => {
    if (!process.handler.renderer) return;

    unsubscribe = process.handler.renderer.appStore.subscribe((v) => {
      apps = [...v].map(([_, app]) => app.data);
    });
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="app-list">
  {#each apps as app}
    {#if isPopulatable(app)}
      <ListItem {app} {process} />
      <ListItem {app} {process} />
      <ListItem {app} {process} />
      <ListItem {app} {process} />
      <ListItem {app} {process} />
      <ListItem {app} {process} />
      <ListItem {app} {process} />
      <ListItem {app} {process} />
      <ListItem {app} {process} />
      <ListItem {app} {process} />
      <ListItem {app} {process} />
      <ListItem {app} {process} />
      <ListItem {app} {process} />
      <ListItem {app} {process} />
    {/if}
  {/each}
</div>
