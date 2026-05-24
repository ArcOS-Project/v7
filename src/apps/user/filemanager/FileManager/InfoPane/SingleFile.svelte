<script lang="ts">
  import type { IFileManagerRuntime } from "$interfaces/runtimes/IFileManagerRuntime";
  import Icon from "$lib/Icon.svelte";
  import UserLink from "$lib/UserLink.svelte";
  import type { ExpandedFileAssociationInfo } from "$types/assoc";
  import type { SummarizedFsModifiers } from "$types/fs";
  import dayjs from "dayjs";

  const {
    modifiers,
    association,
    filename,
    thumbnail,
    dateCreated,
    dateModified,
    process,
  }: {
    modifiers: SummarizedFsModifiers | undefined;
    association: ExpandedFileAssociationInfo;
    dateCreated: number;
    dateModified: number;
    filename: string;
    thumbnail?: string;
    process: IFileManagerRuntime;
  } = $props();
</script>

<div class="single-file">
  <div class="header">
    <Icon icon={thumbnail || association?.icon} />
    <h1>{filename}</h1>
    <p>{association?.friendlyName}</p>
  </div>

  {#if dateCreated && dateModified}
    <div class="timestamps">
      <h1>Date created</h1>
      <p>{dayjs(dateCreated).format("D MMMM YYYY, HH:mm")}</p>
    </div>
    <div class="timestamps">
      <h1>Date modified</h1>
      <p>{dayjs(dateModified).format("D MMMM YYYY, HH:mm")}</p>
    </div>
  {/if}
  <div class="modifiers">
    {#if modifiers?.createdBy?.user}
      <div class="modifier">
        <h1>Created By</h1>
        <UserLink user={modifiers?.createdBy?.user} />
      </div>
    {/if}
    {#if modifiers?.lastWrite?.user}
      <div class="modifier">
        <h1>Last Modified By</h1>
        <UserLink user={modifiers?.lastWrite?.user} />
      </div>
    {/if}
  </div>
</div>
