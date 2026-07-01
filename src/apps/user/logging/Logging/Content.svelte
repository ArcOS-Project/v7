<script lang="ts">
  import type { ILoggingRuntime } from "$interfaces/runtimes/ILoggingRuntime";
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import List from "./Content/List.svelte";
  import Options from "./Content/Options.svelte";

  const { process }: { process: ILoggingRuntime } = $props();
</script>

<div class="container">
  <CustomTitlebar {process} />
  <Options {process} />
  <div class="list-wrapper">
    <List {process} />
  </div>
</div>
