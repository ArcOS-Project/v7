<script lang="ts">
  import { sortByKey } from "$ts/util";
  import { Store } from "$ts/writable";
  import type { AdminPortalRuntime } from "../../runtime";
  import type { TokensData } from "../../types";
  import TokenRow from "./Tokens/TokenRow.svelte";

  const { process, data }: { process: AdminPortalRuntime; data: TokensData } = $props();
  const { users } = data;
  const sortMode = Store<string>("lastUsed");
</script>

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
  {#each sortByKey( data.tokens.map( (t) => ({ ...t, user: users.filter((u) => u._id === t.userId)[0] }), ), $sortMode, true, ) as token (token._id)}
    <TokenRow {token} {process} />
  {/each}
</div>
