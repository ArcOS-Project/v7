<script lang="ts">
  import type { IIconService } from "$interfaces/services/IIconService";
  import { BlankIcon } from "$ts/images/general";
  import WithService from "./Icon/WithService.svelte";
  import ServiceGate from "./ServiceGate.svelte";

  let {
    icon,
    fallback = icon,
    className = "",
    title = "",
    style = "",
  }: { icon: string; fallback?: string; className?: string; title?: string; style?: string } = $props();
</script>

<ServiceGate id="IconService">
  {#snippet ifActive(service: IIconService)}
    <WithService {service} {icon} {className} {title} {style} />
  {/snippet}
  {#snippet ifInactive()}
    {#if fallback?.includes("http") || fallback?.includes("/")}
      <img
        src={icon?.includes("/") ? icon : fallback}
        class="iconsvc-inactive fallbacked {className}"
        {title}
        alt={title}
        {style}
      />
    {:else}
      <img
        src={icon?.includes("/") ? icon : BlankIcon}
        class="iconsvc-inactive no-fallback {className}"
        {title}
        alt={title}
        {style}
      />
    {/if}
  {/snippet}
</ServiceGate>
