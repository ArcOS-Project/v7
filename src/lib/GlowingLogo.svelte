<script lang="ts">
  import { Logo } from "$ts/branding";
  import { ArcMode } from "$ts/metadata/mode";

  const { className = "", src = Logo() }: { className?: string; src?: string } = $props();
</script>

<img {src} alt={ArcMode()} class={className} />

<style scoped>
  img {
    background-image: url("../assets/branding/glow.png");
    background-size: cover;
    background-position: center;
  }
</style>
