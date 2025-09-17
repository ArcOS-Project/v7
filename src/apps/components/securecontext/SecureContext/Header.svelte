<script lang="ts">
  import { ElevationLevel, type ElevationData } from "$types/elevation";
  import type { SecureContextRuntime } from "../runtime";
  import { ElevationLevelIcons } from "../store";

  const { data, process }: { data: ElevationData; process: SecureContextRuntime } = $props();
</script>

<div class="header level-{ElevationLevel[data.level]}">
  <img src={process.getIconCached(ElevationLevelIcons[data.level])} alt={ElevationLevel[data.level]} />
  <p>ArcOS Secure Context</p>
</div>
