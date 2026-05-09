<script lang="ts">
  import type { IMasterOptionsRuntime } from "$interfaces/runtimes/IMasterOptionsRuntime";
  import type { MasterOption } from "../types";

  const { process, option }: { process: IMasterOptionsRuntime; option: MasterOption } = $props();
  const { loading } = process;

  async function exec() {
    $loading = true;
    await option.action(process);
    process.closeWindow();
  }
</script>

<button class="master-option" title={option.caption} onclick={exec} disabled={$loading}>
  <img src={process.getIconCached(option.image)} alt="" />
  <span>{option.caption}</span>
</button>
