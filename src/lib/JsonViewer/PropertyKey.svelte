<script lang="ts">
  let { key }: { key: string } = $props();
</script>

<b class="key" class:empty={key.startsWith("__")}>{key}</b>:
