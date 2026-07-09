<script lang="ts">
  import type { IItemInfoRuntime } from "$interfaces/runtimes/IItemInfoRuntime";
  import Actions from "./ItemInfo/Actions.svelte";
  import Header from "./ItemInfo/Header.svelte";
  import Location from "./ItemInfo/Location.svelte";
  import Meta from "./ItemInfo/Meta.svelte";

  const { process }: { process: IItemInfoRuntime } = $props();
  const { info } = process;
</script>

{#if $info}
  <Header {info} {process} />
  <Meta {info} />
  <Location {info} />
  <Actions {info} {process} />
{/if}
