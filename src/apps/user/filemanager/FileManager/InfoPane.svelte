<script lang="ts">
  import { getItemNameFromPath, getParentDirectory } from "$ts/util/fs";
  import type { ExpandedFileAssociationInfo } from "$types/assoc";
  import type { ExtendedStat, SummarizedFsModifiers } from "$types/fs";
  import { onMount } from "svelte";
  import type { FileManagerRuntime } from "../runtime";
  import type { QuotedDrive } from "../types";
  import Drive from "./InfoPane/Drive.svelte";
  import MultiFile from "./InfoPane/MultiFile.svelte";
  import SingleFile from "./InfoPane/SingleFile.svelte";

  const { process }: { process: FileManagerRuntime } = $props();
  const { path, contents, selection, drives } = process;

  let currentDrive: QuotedDrive | undefined = $state(undefined);
  let singleSelectionAssoc: ExpandedFileAssociationInfo | undefined = $state(undefined);
  let singleSelectionFilename = $state<string>();
  let singleSelectionModifiers = $state<SummarizedFsModifiers | undefined>();
  let singleSelectionThumbnail = $state<string>();
  let singleSelectionStat = $state<ExtendedStat>();
  let multipleFiles = $state<boolean>(false);
  let variant: "singleSelection" | "multiSelection" | "drive" | "" = $state("");

  onMount(() => {
    path.subscribe(update);
    contents.subscribe(update);
    selection.subscribe(update);
    drives.subscribe(update);
  });

  async function update() {
    variant = "";

    try {
      const driveId = process.fs.getDriveIdByIdentifier(process.fs.getDriveIdentifier($path));
      const isRoot = getParentDirectory($path) === $path;

      currentDrive = $drives[driveId] ?? undefined;

      if ($selection.length === 1) {
        const itemName = getItemNameFromPath($selection[0]);

        if (singleSelectionFilename !== itemName) {
          singleSelectionFilename = getItemNameFromPath($selection[0]);

          try {
            const stat = await process.fs.stat($selection[0]);

            if (stat?.isDirectory) {
              singleSelectionThumbnail = "";
              singleSelectionAssoc = {
                friendlyName: "Folder",
                icon: process.getIconCached("FolderIcon"),
                extension: "",
                handledBy: {},
              };
              singleSelectionModifiers = stat?.modifiers;
            } else {
              singleSelectionStat = stat;
              singleSelectionAssoc = process.userDaemon?.assoc?.getFileAssociation($selection[0]);
              singleSelectionModifiers = stat?.modifiers;
              singleSelectionThumbnail = await process.userDaemon?.getThumbnailFor($selection[0]);
            }
          } catch {
            singleSelectionAssoc = process.userDaemon?.assoc?.getFileAssociation($selection[0]);
          }
        }

        variant = "singleSelection";

        return;
      } else if ($selection.length > 1) {
        multipleFiles = true;
        variant = "multiSelection";

        return;
      }

      if (isRoot) variant = "drive";
      else {
        singleSelectionAssoc = {
          extension: "",
          friendlyName: "Folder",
          handledBy: {},
          icon: process.getIconCached("FolderIcon"),
        };
        singleSelectionFilename = getItemNameFromPath($path);
        singleSelectionModifiers = undefined;
        singleSelectionStat = undefined;
        singleSelectionThumbnail = undefined;
        variant = "singleSelection";
      }
    } catch {
      variant = "";
    }
  }
</script>

<div class="info-pane">
  {#if variant === "drive" && currentDrive}
    <Drive drive={currentDrive} />
  {:else if variant === "singleSelection"}
    <SingleFile
      {process}
      modifiers={singleSelectionModifiers}
      association={singleSelectionAssoc!}
      filename={singleSelectionFilename!}
      thumbnail={singleSelectionThumbnail}
      dateCreated={singleSelectionStat?.created!}
      dateModified={singleSelectionStat?.modified!}
    />
  {:else if variant === "multiSelection" && currentDrive}
    <MultiFile name={getItemNameFromPath($path)} itemCount={$selection.length} {currentDrive} {process} />
  {/if}
</div>
