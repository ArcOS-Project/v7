<script lang="ts">
  import { ArcOSVersion } from "$ts/env";
  import { ChangeLogs } from "$ts/metadata/changelog";
  import { onMount } from "svelte";
  import SvelteMarkdown from "svelte-markdown";

  let source = $state<string>("");

  onMount(async () => {
    source = (await ChangeLogs.readChangelog(ArcOSVersion)) || "";
  });
</script>

<div class="md markdown-body">
  <SvelteMarkdown {source} />
</div>

<style scoped>
  div.md {
    max-height: 500px;
    overflow-y: scroll;
  }
</style>
