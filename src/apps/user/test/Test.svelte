<script lang="ts">
  import CodeEditor from "$lib/CodeEditor.svelte";
  import { Store } from "$ts/writable";
  import type { TestAppRuntime } from "./runtime";

  const { process }: { process: TestAppRuntime } = $props();

  let code = Store<string>();
</script>

<CodeEditor language="css" value={code} />
