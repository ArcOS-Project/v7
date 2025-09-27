<script lang="ts">
  import type { AcceleratorOverviewRuntime } from "./runtime";

  const { process }: { process: AcceleratorOverviewRuntime } = $props();
  const { store, apps } = process;
</script>

{#if $store && $apps}
  <div class="header" data-prefix="apps.AcceleratorOverview.header">
    <h1>%title%</h1>
    <p>%subtitle%</p>
  </div>
  <div class="shortcuts">
    {#each $store as [name, shortcuts]}
      <div class="app">
        <h1 class="name">{name}</h1>
        <div class="app-shortcuts">
          {#each shortcuts as [keys, description]}
            <div class="shortcut">
              <div class="keys">
                {#each keys as key}
                  {#if key !== "+"}
                    <div class="key key-{key}">{key}</div>
                  {:else}
                    <span class="plus">+</span>
                  {/if}
                {/each}
              </div>
              <div class="description">{description}</div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
{/if}
