<script lang="ts">
  import { SacrudaVersion } from "$ts/env";
  import { ChangeLogs } from "$ts/metadata/changelog";
  import { onMount } from "svelte";
  import SvelteMarkdown from "svelte-markdown";

  let source = $state<string>("");

  onMount(async () => {
    source = (await ChangeLogs.readChangelog(SacrudaVersion)) || "";
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
