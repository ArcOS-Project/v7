<script lang="ts">
  import IntroScreen from "./Qlorb/IntroScreen.svelte";
  import Main from "./Qlorb/Main.svelte";
  import Start from "./Qlorb/Start.svelte";
  import type { QlorbRuntime } from "./runtime";

  const { process }: { process: QlorbRuntime } = $props();
</script>

<IntroScreen {process} />
<Start {process} />
<Main {process} />
