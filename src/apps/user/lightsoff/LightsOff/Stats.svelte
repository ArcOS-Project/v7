<script lang="ts">
  import type { App } from "$types/app";
  import type { LightsOffRuntime } from "../runtime";

  const { app, process }: { app: App; process: LightsOffRuntime } = $props();
  const { LEVEL, Clicks, userPreferences } = process;

  function reset() {
    $userPreferences.appPreferences[app.id] = {};

    process.loadData();
  }
</script>

<div class="statistics">
  <button class="reset-game" onclick={reset} disabled={$LEVEL == 0 && $Clicks == 0}> Start Over </button>
  <div class="right">
    <div class="stat">Level {$LEVEL + 1}</div>
    <div class="stat">{$Clicks} Click{$Clicks == 1 ? "" : "s"}</div>
  </div>
</div>

<style scoped>
  div.statistics {
    border-bottom: var(--accent) 1px solid;
    margin-bottom: 10px;
    padding: 20px;
    display: flex;
    align-items: center;
  }

  button {
    margin: 0;
    height: 30px;
    padding: 0 15px !important;
  }

  div.statistics div.right {
    background-color: var(--button-glass-bg);
    height: 30px;
    margin-left: auto;
    display: flex;
    gap: 10px;
    border: var(--button-glass-bg) 1px solid;
    padding: 0 10px;
    border-radius: var(--button-border-rad);
  }

  div.statistics div.right div.stat {
    line-height: 28px;
  }
  div.statistics div.right div.stat + div.stat {
    border-left: var(--button-glass-bg) 1px solid;
    padding-left: 10px;
  }
</style>
