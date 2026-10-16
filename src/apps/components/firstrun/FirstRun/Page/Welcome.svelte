<script lang="ts">
  import Icon from "$lib/Icon.svelte";
  import { WaveIcon } from "$ts/images/general";
</script>

<Icon icon="WaveIcon" fallback={WaveIcon} />
<h1>%welcome._name%</h1>
<p>%welcome.subtitle%</p>
