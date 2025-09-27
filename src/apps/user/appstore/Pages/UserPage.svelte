<script lang="ts">
  import type { StoreItem } from "$types/package";
  import type { PublicUserInfo } from "$types/user";
  import PackageGrid from "../AppStore/PackageGrid.svelte";
  import type { AppStoreRuntime } from "../runtime";
  import UserHeader from "./UserPage/UserHeader.svelte";

  const { results, process, user }: { results: StoreItem[]; process: AppStoreRuntime; user?: PublicUserInfo } = $props();
</script>

{#if user && results?.length}
  <UserHeader {process} {user} {results} />
  {#if results?.length}
    <PackageGrid {process} items={results} name="" />
    <p class="end">Looks like you've reached the end.</p>
  {:else}
    <p class="end">This user has no packages.</p>
  {/if}
{:else}
  <div class="empty">
    <span class="lucide icon-circle-slash"></span>
    <h1>User not found!</h1>
    <p>Sorry! You've clicked on a broken link, that user doesn't exist.</p>
  </div>
{/if}
