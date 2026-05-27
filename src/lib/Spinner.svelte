<script lang="ts">
  import { SpinnerIcon } from "$ts/images/general";
  import Icon from "./Icon.svelte";

  interface Props {
    height: number;
    stopped?: boolean;
  }

  const { height, stopped = false }: Props = $props();
</script>

<Icon icon="SpinnerIcon" style="height: {height}px;" className="spinner-svg {stopped ? 'hide' : ''}" fallback={SpinnerIcon} />
