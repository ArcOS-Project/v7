<script lang="ts">
  import { BadStatusIcon } from "$ts/images/status";
  import type { FsProgressFailRuntime } from "./runtime";

  const { process }: { process: FsProgressFailRuntime } = $props();
  const { title, icon, errors } = process;
</script>

<div class="header">
  <img src={icon} alt="" />
  <h1>{title}</h1>
  <p>This file operation encountered an error.</p>
</div>
<div class="errors">
  {#each errors as error}
    <div class="error">
      <img src={BadStatusIcon} alt="" />
      <span>{error}</span>
    </div>
  {/each}
</div>
<button class="suggested" onclick={() => process.closeWindow()}>Okay</button>
