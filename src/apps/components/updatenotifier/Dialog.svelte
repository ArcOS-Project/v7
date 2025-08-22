<script lang="ts">
  import MarkdownRenderingComponent from "$lib/MarkdownRenderingComponent.svelte";
  import { ArcOSVersion } from "$ts/env";
  import { ChangeLogs } from "$ts/metadata/changelog";
  import { onMount } from "svelte";

  let source = $state<string>("");

  onMount(async () => {
    source = (await ChangeLogs.readChangelog(ArcOSVersion)) || "";
  });
</script>

<div class="md">
  <MarkdownRenderingComponent {source} />
</div>

<style scoped>
  div.md {
    max-height: 500px;
    overflow-y: scroll;
  }
</style>
