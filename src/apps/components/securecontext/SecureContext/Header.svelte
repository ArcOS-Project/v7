<script lang="ts">
  import Icon from "$lib/Icon.svelte";
  import { ElevationLevel, type ElevationData } from "$types/elevation";
<<<<<<< HEAD
  import { ElevationLevelIcons } from "../store";

  const { data }: { data: ElevationData } = $props();
=======
  import type { ISecureContextRuntime } from "$interfaces/runtimes/ISecureContextRuntime";
  import { ElevationLevelIcons } from "../store";

  const { data, process }: { data: ElevationData; process: ISecureContextRuntime } = $props();
>>>>>>> development
</script>

<div class="header level-{ElevationLevel[data.level]}">
  <Icon icon={ElevationLevelIcons[data.level]} title={ElevationLevel[data.level]} />
  <p>ArcOS Secure Context</p>
</div>
