<script lang="ts">
  import type { MediaPlayerRuntime } from "../runtime";
  import Forward from "./Controls/Forward.svelte";
  import Next from "./Controls/Next.svelte";
  import PlayPause from "./Controls/PlayPause.svelte";
  import Previous from "./Controls/Previous.svelte";
  import Rewind from "./Controls/Rewind.svelte";
  import Stop from "./Controls/Stop.svelte";
  import Time from "./Controls/Time.svelte";

  const { process }: { process: MediaPlayerRuntime } = $props();
</script>

<div class="controls">
  <Previous {process} />
  <Rewind {process} />
  <PlayPause {process} />
  <Forward {process} />
  <Next {process} />
  <Stop {process} />
  <Time {process} />
</div>
