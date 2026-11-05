<script lang="ts">
  import JsonViewer from "$lib/JsonViewer.svelte";

  let { key, value }: { key: string; value: any } = $props();
  let open = $state<boolean>(false);
  let isClass = $derived(value?.constructor?.name && value.constructor.name !== "Object");
</script>

<details bind:open>
  <summary>
    <b class="key">{key}</b>:
    <span class="complex-datatype">
      {isClass ? `class ${value?.constructor?.name}` : "Object"}
      {"{...}"}
    </span>
  </summary>

  {#if open}
    <JsonViewer data={value} withProto={isClass} />
  {/if}
</details>
