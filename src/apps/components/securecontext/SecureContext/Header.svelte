<script lang="ts">
  import Icon from "$lib/Icon.svelte";
  import { ElevationLevel, type ElevationData } from "$types/elevation";
  import { ElevationLevelIcons } from "../store";

  const { data }: { data: ElevationData } = $props();
</script>

<div class="header level-{ElevationLevel[data.level]}">
  <Icon icon={ElevationLevelIcons[data.level]} title={ElevationLevel[data.level]} />
  <p>ArcOS Secure Context</p>
</div>
