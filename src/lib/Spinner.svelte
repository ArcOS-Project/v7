<script lang="ts">
  import { SpinnerIcon } from "$ts/images/general";

  interface Props {
    height: number;
    stopped?: boolean;
  }

  const { height, stopped = false }: Props = $props();
</script>

<img src={SpinnerIcon} alt="spinner" style="height: {height}px;" class="spinner-svg" class:hide={stopped} />

<style scoped>
  img.spinner-svg {
    transition: opacity 0.2s;
  }

  img.spinner-svg.hide {
    opacity: 0;
  }
</style>
