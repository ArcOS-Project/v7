<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import type { AppPreInstallRuntime } from "./runtime";

  const { process }: { process: AppPreInstallRuntime } = $props();
  const { metadata } = process;
</script>

{#if $metadata}
  <div class="header">
    <img src={process.getIconCached("ArcAppMimeIcon")} alt="" />
    <h1>{$metadata.name}</h1>
    <p>%header.title%</p>
  </div>
  <div class="info">
    <h1>{$metadata.description}</h1>
    <div class="rows">
      <div class="row">
        <p class="key">%info.author%</p>
        <p class="value">{$metadata.author}</p>
      </div>
      <div class="row">
        <p class="key">%info.version%</p>
        <p class="value">{$metadata.version}</p>
      </div>
    </div>
  </div>
  <div class="action">
    <button class="suggested" onclick={() => process.install()}>
      <span class="lucide icon-shield"></span>
      <span>%installPackage%</span>
    </button>
    <button onclick={() => process.closeWindow()}>%general.cancel%</button>
  </div>
{:else}
  <div class="loading">
    <Spinner height={32} />
  </div>
{/if}
