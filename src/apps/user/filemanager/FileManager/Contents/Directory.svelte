<script lang="ts">
  import { FolderIcon } from "$ts/images/filesystem";
  import type { FileManagerRuntime } from "../../runtime";
  import type { Tab } from "../../types";

  const { process, tab }: { process: FileManagerRuntime; tab: Tab } = $props();

  $effect(() => {
    process.changeTabIcon(process.currentTabUuid(), FolderIcon);
    process.changeTabTitle(process.currentTabUuid(), "Directory");
  });
</script>

{tab}
