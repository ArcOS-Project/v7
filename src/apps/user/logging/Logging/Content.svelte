<script lang="ts">
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import type { LoggingRuntime } from "../runtime";
  import List from "./Content/List.svelte";
  import Options from "./Content/Options.svelte";

  const { process }: { process: LoggingRuntime } = $props();
</script>

<div class="container">
  <CustomTitlebar {process} />
  <Options {process} />
  <div class="list-wrapper">
    <List {process} />
  </div>
</div>
