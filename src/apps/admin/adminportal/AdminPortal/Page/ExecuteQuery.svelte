<script lang="ts">
  import { FileManagerRuntime } from "$apps/user/filemanager/runtime";
  import { Fs } from "$ts/env";
  import { tryJsonParse, tryJsonStringify } from "$ts/json";
  import { Daemon } from "$ts/server/user/daemon";
  import { textToBlob } from "$ts/util/convert";
  import { getParentDirectory } from "$ts/util/fs";
  import { Store } from "$ts/writable";
  import { onMount } from "svelte";
  import type { AdminPortalRuntime } from "../../runtime";
  import type { QueryData } from "../../types";
  import Spinner from "$lib/Spinner.svelte";
  import { contextMenu } from "$ts/context/actions.svelte";
  import { AdminScopes } from "$ts/server/admin/store";
  import { MessageBox } from "$ts/dialog";

  const { process, data }: { process: AdminPortalRuntime; data: QueryData } = $props();
  const { users } = data;

  // R<S, [fn, scope[]]>
  const designations: Record<SourceKeys, [() => Promise<any[]> | any[], string[]]> = {
    "": [() => [], []],
    users: [() => users, [AdminScopes.adminUsersList]],
    totp: [async () => await process.admin.getAllTotp(), [AdminScopes.adminTotpGet]],
    tokens: [async () => await process.admin.getAllTokens(), [AdminScopes.adminTokensGet]],
    reports: [async () => await process.admin.getAllBugReports(), [AdminScopes.adminBugHuntList]],
    shares: [async () => await process.admin.getAllShares(), [AdminScopes.adminShareList]],
    indexes: [async () => await process.admin.getAllIndexingNodes(), [AdminScopes.adminIndexGet]],
    activities: [async () => await process.admin.getAllActivity(), [AdminScopes.adminActivitiesList]],
  };

  const sources = ["", "users", "tokens", "totp", "reports", "shares", "indexes", "activities"] as const;
  const comparisonTypes = [
    "",
    "is equal to",
    "is not equal to",
    "includes",
    "does not include",
    "is defined",
    "is not defined",
    "is boolean",
    "is greater than",
    "is greater than or equal to",
    "is less than",
    "is less than or equal to",
  ] as const;

  //#region DO NOT TOUCH

  type SourceKeys = (typeof sources)[number];
  type ComparisonTypes = (typeof comparisonTypes)[number];

  interface SelectFromExpression {
    columnName?: string;
    comparisonType?: ComparisonTypes;
    comparisonValue?: string | boolean;
  }

  let result = $state<any[]>();
  let source = $state<any[]>();
  let loading = $state<boolean>(false);
  let truncated = $state<boolean>(false);
  const selectFrom = Store<SourceKeys>("");
  let expressions = $state<Record<SourceKeys, SelectFromExpression[]>>(
    Object.fromEntries(sources.map((s) => [s, [] as SelectFromExpression[]])) as Record<SourceKeys, SelectFromExpression[]>
  );

  let columns = $state<string[]>([]);

  onMount(() => {
    selectFrom.subscribe(async (v) => {
      if (!process.admin.canAccess(...designations[v][1])) {
        await MessageBox(
          {
            title: "Inaccessible",
            message:
              "The datasource you've selected isn't available on your account. You're missing scopes to access this datasource, so the result will always be empty.",
            buttons: [{ caption: "Okay", action: () => {} }],
            sound: "arcos.dialog.warning",
            image: "WarningIcon",
          },
          process.pid,
          true
        );
      }
      result = [];
      loading = true;
      source = await designations[v][0]();
      columns = findMostColumns(source);
      loading = false;
    });
  });

  async function execute() {
    console.log(designations, $selectFrom);

    truncated = false;

    let queryResult = source!.filter((item) => {
      for (const { comparisonType, comparisonValue, columnName } of expressions[$selectFrom]) {
        if (columnName === undefined || comparisonType === undefined || comparisonValue === undefined) continue;

        const valueStr = tryJsonStringify(item[columnName], 2);
        const value = item[columnName];
        let result = true;

        console.log($selectFrom, comparisonType, comparisonValue, columnName);

        switch (comparisonType) {
          case "is equal to":
            result = value == tryJsonParse(comparisonValue);
            break;
          case "is not equal to":
            result = value != tryJsonParse(comparisonValue);
            break;
          case "includes":
            if (Array.isArray(value)) {
              result = value.includes(comparisonValue);
            } else {
              result = valueStr.toLowerCase().includes(comparisonValue?.toString().toLowerCase());
            }
            break;
          case "does not include":
            if (Array.isArray(value)) {
              result = !value.includes(comparisonValue);
            } else {
              result = !valueStr.toLowerCase().includes(comparisonValue?.toString().toLowerCase());
            }
            break;
          case "is defined":
            result = value !== null && value !== undefined;
            break;
          case "is not defined":
            result = value === null || value === undefined;
            break;
          case "is boolean":
            result = !!value === Boolean(comparisonValue);
            break;
          case "is less than":
            result = Number.isNaN(+value) || Number.isNaN(+comparisonValue) ? false : comparisonValue > value;
            break;
          case "is less than or equal to":
            result = Number.isNaN(+value) || Number.isNaN(+comparisonValue) ? false : comparisonValue >= value;
            break;
          case "is greater than":
            result = Number.isNaN(+value) || Number.isNaN(+comparisonValue) ? false : comparisonValue < value;
            break;
          case "is greater than or equal to":
            result = Number.isNaN(+value) || Number.isNaN(+comparisonValue) ? false : comparisonValue <= value;
            break;
        }

        if (!result) return false;
      }

      return true;
    });

    if (queryResult.length > 1000) {
      truncated = true;
      queryResult.length = 1000;
    }

    result = queryResult;
  }

  function duplicateExpression(i: number) {
    if (!expressions[$selectFrom][i]) return;

    expressions[$selectFrom].push({ ...JSON.parse(JSON.stringify(expressions[$selectFrom][i])) });
    expressions = expressions;
  }

  function deleteExpression(i: number) {
    if (!expressions[$selectFrom][i]) return;

    expressions[$selectFrom].splice(i, 1);
    expressions = expressions;
  }

  function addExpression() {
    expressions[$selectFrom].push({
      columnName: undefined,
      comparisonType: undefined,
      comparisonValue: undefined,
    });

    expressions = expressions;
  }

  function findMostColumns(items: any[]) {
    const columns = items.map((i) => Object.keys(i)) as string[][];
    const lengths = columns.map((i) => i.length);

    let maxLength = 0;
    let highestIndex = -1;

    for (let i = 0; i < lengths.length; i++) {
      const length = lengths[i];
      if (length > maxLength) {
        maxLength = length;
        highestIndex = i;
      }
    }

    return columns[highestIndex];
  }

  async function exportResults() {
    const [path] = await Daemon.files!.LoadSaveDialog({
      title: "Choose where to save the results",
      icon: process.app.data.metadata.icon,
      startDir: "A:/",
      isSave: true,
      extensions: [".json"],
      saveName: `query-export-${Date.now()}`,
    });

    if (!path) return;

    await Fs.writeFile(path, textToBlob(JSON.stringify(result, null, 2)), undefined, false);

    const proc = await Daemon.spawn?.spawnApp<FileManagerRuntime>("fileManager", process.parentPid, getParentDirectory(path));

    proc?.selection.set([path]);
  }

  //#endregion DO NOT TOUCH
</script>

<div class="selector">
  <p class="from">Select from</p>

  <select bind:value={$selectFrom}>
    {#each sources as source (source)}
      <option value={source} disabled={!source} selected={!source}>{source || "Source..."}</option>
    {/each}
  </select>

  <div class="actions">
    <button onclick={addExpression} disabled={!$selectFrom}>
      <span class="lucide icon-plus"></span>
      <span>Add expression</span>
    </button>
    <button onclick={execute} disabled={!$selectFrom || !expressions[$selectFrom]?.length}>
      <span class="lucide icon-play"></span>
      <span>Execute...</span>
    </button>
  </div>
</div>
{#if $selectFrom}
  <div class="expressions">
    {#each expressions[$selectFrom] as { comparisonType, comparisonValue, columnName }, i}
      <div class="row">
        <p class="where">Where</p>

        <div class="fields">
          <select class="column-name" bind:value={expressions[$selectFrom][i].columnName}>
            <option value="" disabled selected></option>
            {#each columns as key (key)}
              <option value={key}>{key}</option>
            {/each}
          </select>

          {#if columnName}
            <select class="comparison-type" bind:value={expressions[$selectFrom][i].comparisonType}>
              {#each comparisonTypes as value}
                <option {value} disabled={!value} selected={!value}>{value}</option>
              {/each}
            </select>
          {/if}

          {#if comparisonType}
            <!-- It's a user we're looking for -->
            {#if columnName === "userId" || columnName === "authorId" || columnName === "repliesTo" || columnName === "recipient" || (columnName === "_id" && $selectFrom === "users")}
              <select bind:value={expressions[$selectFrom][i].comparisonValue} placeholder="Select user...">
                <option value="" disabled selected></option>
                {#each users as user (user._id)}
                  <option value={user._id}>{user.username} ({user._id})</option>
                {/each}
              </select>
            {:else if comparisonType.includes("defined")}
              <span></span>
            {:else if comparisonType === "is boolean"}
              <label for="">
                <input type="checkbox" bind:checked={expressions[$selectFrom][i].comparisonValue as boolean} />
                <span>{comparisonValue}</span>
              </label>
            {:else}
              <input class="comparison-value" bind:value={expressions[$selectFrom][i].comparisonValue} placeholder="Value..." />
            {/if}
            <span class="json-representation">{JSON.stringify(tryJsonParse(comparisonValue))}</span>
          {/if}
        </div>

        {#if expressions[$selectFrom][i].columnName == undefined || expressions[$selectFrom][i].comparisonType == undefined || expressions[$selectFrom][i].comparisonValue == undefined}
          <img src={process.getIconCached("WarningIcon")} alt="" title="This expression is incomplete" />
        {/if}

        <div class="actions">
          <button class="lucide icon-copy" title="Duplicate" aria-label="Duplicate" onclick={() => duplicateExpression(i)}
          ></button>
          <button class="lucide icon-trash-2" title="Delete" aria-label="Delete" onclick={() => deleteExpression(i)}></button>
        </div>
      </div>
    {/each}
  </div>
{/if}

{#if result?.length}
  {@const columns = findMostColumns(result)}
  <div class="results">
    <div class="action-bar">
      <p class="count">{result?.length} results</p>
      {#if truncated}
        <div class="truncated">
          <img src={process.getIconCached("ErrorIcon")} alt="" />
          <span>Result truncated because it is too large (&gt;1000)</span>
        </div>
      {/if}
      <button onclick={exportResults}>Export</button>
      <button onclick={() => (result = [])}>Clear</button>
    </div>
    <div class="table-wrapper">
      <table class="result-table">
        <thead>
          <tr>
            {#each columns as key}
              <th title={key}>
                {key}
              </th>
            {/each}
          </tr>
        </thead>

        <tbody>
          {#each result as item (item?._id || item?.id || JSON.stringify(item))}
            <tr>
              {#each columns as key}
                {@const value = item[key]}
                {@const valueStr = tryJsonStringify(value, 2)}

                <td
                  class={key}
                  title={key}
                  use:contextMenu={[
                    [
                      {
                        caption: "Copy value",
                        action: () => navigator.clipboard.writeText(valueStr),
                        icon: "copy",
                      },
                    ],
                    process,
                  ]}
                >
                  {#if typeof value === "object"}
                    {#if Array.isArray(value)}
                      Array[{value.length}]
                    {:else}
                      Object
                    {/if}
                  {:else if key === "userId" || key === "authorId" || key === "repliesTo" || key === "recipient" || (key === "_id" && $selectFrom === "users")}
                    <button class="link" onclick={() => process.viewUserById(value)} title={value}>
                      {users.find((u) => u._id === value)?.username || value}
                    </button>
                  {:else}
                    {valueStr}
                  {/if}
                </td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
{/if}
{#if loading}
  <div class="loading-overlay" class:show={loading}>
    <Spinner height={32} />
    <p>Collecting information</p>
  </div>
{/if}
