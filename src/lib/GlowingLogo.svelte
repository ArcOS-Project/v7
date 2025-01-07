<script lang="ts">
  import { Logo } from "$ts/branding";
  import { ArcMode } from "$ts/metadata/mode";

  const { className = "" }: { className?: string } = $props();
</script>

<img src={Logo()} alt={ArcMode()} class={className} />

<style scoped>
  img {
    background-image: url("../assets/branding/glow.png");
    background-size: cover;
    background-position: center;
  }
</style>
