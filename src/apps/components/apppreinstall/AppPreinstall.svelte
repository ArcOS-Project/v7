<script lang="ts">
  import type { IAppPreInstallRuntime } from "$interfaces/runtimes/IAppPreinstallRuntime";
  import Spinner from "$lib/Spinner.svelte";

  const { process }: { process: IAppPreInstallRuntime } = $props();
  const { metadata } = process;
</script>

{#if $metadata}
  <div class="header">
    <img src={process.getIconCached("ArcAppMimeIcon")} alt="" />
    <h1>{$metadata.name}</h1>
    <p>Do you want to install this package?</p>
  </div>
  <div class="info">
    <h1>{$metadata.description}</h1>
    <div class="rows">
      <div class="row">
        <p class="key">Author</p>
        <p class="value">{$metadata.author}</p>
      </div>
      <div class="row">
        <p class="key">Version</p>
        <p class="value">{$metadata.version}</p>
      </div>
    </div>
  </div>
  <div class="action">
    <button class="suggested" onclick={() => process.install()}>
      <span class="lucide icon-shield"></span>
      <span>Install package</span>
    </button>
    <button onclick={() => process.closeWindow()}>Cancel</button>
  </div>
{:else}
  <div class="loading">
    <Spinner height={32} />
  </div>
{/if}
