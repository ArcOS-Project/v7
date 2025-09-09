<script lang="ts">
  import { sliceIntoChunks, sortByKey } from "$ts/util";
  import { Store } from "$ts/writable";
  import type { ExpandedToken } from "$types/admin";
  import { onMount } from "svelte";
  import type { AdminPortalRuntime } from "../../runtime";
  import type { TokensData } from "../../types";
  import Pagination from "../Pagination.svelte";
  import TokenRow from "./Tokens/TokenRow.svelte";

  const { process, data }: { process: AdminPortalRuntime; data: TokensData } = $props();
  const { users, tokens } = data;
  const sortMode = Store<string>("lastUsed");
  const total = tokens.flat().length;
  let chunks = $state<ExpandedToken[][]>([]);

  onMount(() => {
    sortMode.subscribe((v) => {
      chunks = sliceIntoChunks(sortByKey(tokens, v, true), 50);
    });
  });

  let currentChunk = $state(0);
</script>

<div class="header">
  <h1>TOKENS ({tokens.length})</h1>
  <Pagination bind:currentChunk chunkSize={50} totalChunks={chunks.length - 1} totalItems={total} />
</div>
<div class="token-list">
  <div class="row header">
    <div class="segment icon">
      <span class="lucide icon-key"></span>
    </div>
    <div class="segment author">Username</div>
    <div class="segment browser">Browser</div>
    <div class="segment os">OS</div>
    <div class="segment last-used"><button class="sort-mode" onclick={() => ($sortMode = "lastUsed")}>Last used</button></div>
    <div class="segment times-used"><button class="sort-mode" onclick={() => ($sortMode = "timesUsed")}>Times used</button></div>
    <div class="segment actions">Actions</div>
  </div>

  {#if chunks[currentChunk]}
    {#each sortByKey( chunks[currentChunk].map( (t) => ({ ...t, user: users.filter((u) => u._id === t.userId)[0] }) ), $sortMode, true ) as token (token._id)}
      <TokenRow {token} {process} />
    {/each}
  {/if}
</div>
