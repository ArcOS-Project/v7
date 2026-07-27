<script lang="ts">
  import CodeEditor from "$lib/CodeEditor.svelte";
  import type { SqeletonQueryTab } from "../QueryTab";

  export let tab: SqeletonQueryTab;

  const { fileContent, loading } = tab;
</script>

<CodeEditor language="sql" value={fileContent} readonly={$loading} />
