<script lang="ts">
  import type { IIconService } from "$interfaces/services/IIconService";
  import { BlankIcon } from "$ts/images/general";

  let {
    icon,
    fallback = icon,
    className = "",
    title = "",
    service,
    style = "",
  }: {
    icon: string;
    fallback?: string;
    className?: string;
    title?: string;
    service: IIconService;
    style?: string;
  } = $props();

  let _resolved = $derived.by<string>(() => service.getIconCached(icon) || service.getIconCached(fallback) || fallback);
</script>

<img src={_resolved == icon ? BlankIcon : _resolved} class={className} {title} alt={title} {style} />
