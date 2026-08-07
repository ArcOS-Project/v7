<script lang="ts">
  import Icon from "$lib/Icon.svelte";
  import { GoodStatusIcon } from "$ts/images/status";
</script>

<Icon icon="GoodStatusIcon" fallback={GoodStatusIcon} />
<h1>%finish.title%</h1>
<p>%finish.subtitle%</p>
