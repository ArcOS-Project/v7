<script lang="ts">
  import { ElevationLevel, type ElevationData } from "$types/elevation";
  import { ElevationLevelIcons } from "../store";

  const { data }: { data: ElevationData } = $props();
</script>

<div class="header level-{ElevationLevel[data.level]}">
  <img src={ElevationLevelIcons[data.level]} alt={ElevationLevel[data.level]} />
  <p>ArcOS Secure Context</p>
</div>
