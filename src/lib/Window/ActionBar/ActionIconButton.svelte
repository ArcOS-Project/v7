<script lang="ts">
  const {
    onclick,
    icon,
    className = "",
    suggested = false,
    disabled = false,
    title = "",
  }: {
    onclick?: (e: MouseEvent) => void;
    icon: string;
    className?: string;
    suggested?: boolean;
    disabled?: boolean;
    title?: string;
  } = $props();
</script>

<button class={`action-bar-icon-button lucide icon-${icon} ${className}`.trim()} aria-label={title} {title} {disabled} class:suggested {onclick}
></button>
