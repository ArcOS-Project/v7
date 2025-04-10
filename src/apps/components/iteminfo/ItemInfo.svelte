<script lang="ts">
  import Actions from "./ItemInfo/Actions.svelte";
  import Drive from "./ItemInfo/Drive.svelte";
  import Header from "./ItemInfo/Header.svelte";
  import Location from "./ItemInfo/Location.svelte";
  import Meta from "./ItemInfo/Meta.svelte";
  import type { ItemInfoRuntime } from "./runtime";

  const { process }: { process: ItemInfoRuntime } = $props();
  const { info, isDrive, drive } = process;
</script>

{#if $info && !isDrive}
  <Header {info} {process} />
  <Meta {info} {process} />
  <Location {info} {process} />
  <Actions {info} {process} />
{:else if isDrive && drive}
  <Drive {process} />
{/if}
