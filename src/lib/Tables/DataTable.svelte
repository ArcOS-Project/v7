<script lang="ts" generics="T extends object, R extends Record<string, any>">
  import { Daemon } from "$ts/env";
  import { Store } from "$ts/writable";
  import type { ContextMenuItem } from "$types/apps/app";
  import type { HeaderItem, ITableDataSource } from "$types/shared/tables";
  import { onMount, type Snippet } from "svelte";
  import EmptyContent from "./EmptyContent.svelte";
  import DataTableHeaderColumn from "./DataTableHeaderColumn.svelte";
  import Spinner from "$lib/Spinner.svelte";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import type { IAppProcess } from "$interfaces/IAppProcess";

  export let proc: IAppProcess;
  export let source: typeof ITableDataSource<T, R>;
  export let query: R | undefined;
  export let impliedData: T[] | undefined = undefined;
  export let RowTemplate: Snippet<[T]>;
  export let RowActions: Snippet<[T]> | undefined = undefined;
  export let Empty: Snippet;
  export let count: number | undefined;
  export let loading: boolean = false;
  export let simple: boolean = false;
  export let rowContextMenu: (item: T) => ContextMenuItem[] = () => [];
  export let eachKey: keyof T;
  export let selection: T[keyof T] | undefined = undefined;

  const { preferences } = Daemon;

  const data = Store(impliedData ?? []);
  const src = new source(query ?? {}, simple);
  let reversed = false;
  let error = false;
  let sortedColumn = src.Header.find((h) => h.sortDefault && h.sortable)?.caption ?? "";

  export async function refresh() {
    if (impliedData != undefined) return ($data = impliedData);

    error = false;
    loading = true;
    if (query) src.Config = query;
    const result = await src.FetchData();
    loading = false;

    if (!result.success) {
      error = true;
      // await BlockingOkay('Fout', result.Detailed('Er is iets misgegaan met het ophalen van de gevraagde informatie.'), 'triangle-alert');
      return;
    }

    $data = result.result!;
    count = $data?.length ?? 0;

    if (sortedColumn) sortBy(src.Header.find((c) => c.caption === sortedColumn)!);
  }

  async function sortBy(column: HeaderItem<T>) {
    if (!column?.sortable) return;

    sortedColumn = column.caption;
    $data = column.sort!($data, reversed);

    if (src.SortModePreference) {
      const preference = $preferences.sortModes?.[src.SortModePreference];
      if (preference?.column === sortedColumn && preference.reversed === reversed) return;

      $preferences.sortModes![src.SortModePreference] = {
        reversed,
        column: sortedColumn,
      };
    }
  }

  $: {
    if (impliedData != undefined) $data = impliedData;
  }

  onMount(async () => {
    const preference = src.SortModePreference ? $preferences.sortModes?.[src.SortModePreference] : undefined;
    if (preference) {
      reversed = preference.reversed;
      sortedColumn = preference.column;
    }

    await refresh();
  });

  function handleSelection(item: T) {
    if (!src.canSelect) return;

    selection = item[eachKey];
  }
</script>

<div class="data-table-wrapper" class:loading>
  {#if loading}
    <Spinner height={32} />
  {:else if !$data?.length && !error}
    {@render Empty?.()}
  {:else if error}
    <EmptyContent
      icon="triangle-alert"
      title="Tabel kon niet worden geladen"
      message="Er is een fout opgetreden tijdens het ophalen van de gevraagde gegevens."
    ></EmptyContent>
  {:else}
    <table class="data-table">
      <thead>
        <tr class="data-table-header-row">
          {#each src.Header as headerItem}
            {#if !(src.simple && headerItem.complex)}
              <DataTableHeaderColumn item={headerItem} bind:reversed {sortBy} bind:sortedColumn />
            {/if}
          {/each}
        </tr>
      </thead>
      <colgroup>
        {#each src.Header as headerItem}
          <col width={headerItem.columnPercentage ? `${headerItem.columnPercentage}%` : undefined} />
        {/each}
      </colgroup>
      <tbody>
        {#each $data as item (item[eachKey])}
          <tr
            class="data-table-row"
            use:contextMenu={[rowContextMenu(item), proc]}
            onclick={() => handleSelection(item)}
            ondblclick={() => src.OnRowSubmit?.(item)}
            class:selected={src.canSelect && selection === item[eachKey]}
          >
            {@render RowTemplate(item)}
            {#if RowActions}
              <td class="data-table-column actions" tabindex="-1">
                <div class="actions-content" tabindex="-1">
                  {@render RowActions(item)}
                </div>
              </td>
            {/if}
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</div>
