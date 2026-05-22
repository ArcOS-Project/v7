<script lang="ts">
  import type { IQlorbRuntime } from "$interfaces/runtimes/IQlorbRuntime";
  import IntroScreen from "./Qlorb/IntroScreen.svelte";
  import Main from "./Qlorb/Main.svelte";
  import Start from "./Qlorb/Start.svelte";

  const { process }: { process: IQlorbRuntime } = $props();
</script>

<IntroScreen {process} />
<Start {process} />
<Main {process} />
