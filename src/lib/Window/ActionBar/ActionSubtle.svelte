<script lang="ts">
  const { text, mono = false, className = "" }: { text: string; mono?: boolean; className?: string } = $props();
</script>

<p class={`action-bar-subtle ${className}`.trim()} class:mono title={text}>{text}</p>
