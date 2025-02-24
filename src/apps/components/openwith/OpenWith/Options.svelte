<script lang="ts">
  import type { AppStorage } from "$types/app";
  import type { OpenWithRuntime } from "../runtime";
  import Option from "./Options/Option.svelte";

  const { process, apps }: { process: OpenWithRuntime; apps: AppStorage } =
    $props();
</script>

{#each apps as app}
  <Option {app} {process} />
{/each}
