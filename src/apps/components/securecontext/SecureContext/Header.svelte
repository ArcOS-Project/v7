<script lang="ts">
  import { ElevationLevel, type ElevationData } from "$types/elevation";
  import type { ISecureContextRuntime } from "$interfaces/runtimes/ISecureContextRuntime";
  import { ElevationLevelIcons } from "../store";

  const { data, process }: { data: ElevationData; process: ISecureContextRuntime } = $props();
</script>

<div class="header level-{ElevationLevel[data.level]}">
  <img src={process.getIconCached(ElevationLevelIcons[data.level])} alt={ElevationLevel[data.level]} />
  <p>ArcOS Secure Context</p>
</div>
