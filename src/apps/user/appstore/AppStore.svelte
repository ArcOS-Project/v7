<script lang="ts">
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import { onMount, type Component } from "svelte";
  import Sidebar from "./AppStore/Sidebar.svelte";
  import type { AppStoreRuntime } from "./runtime";
  import { appStorePages } from "./store";

  const { process }: { process: AppStoreRuntime } = $props();
  const { currentPage, pageProps } = process;

  let Page: Component<any> = $state<any>();
  let id = $state<string>("");

  onMount(() => {
    currentPage.subscribe((v) => {
      const data = appStorePages.get(v);

      if (!data) return (id = "");

      Page = data.content;
      id = v;
    });
  });
</script>

<Sidebar {process} />
<div class="container">
  <CustomTitlebar {process} />
  <div class="page {id}">
    {#if Page}
      <Page {process} {...$pageProps} />
    {/if}
  </div>
</div>
