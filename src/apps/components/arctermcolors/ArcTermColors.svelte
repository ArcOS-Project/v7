<script lang="ts">
  let mode = $state<"presets" | "custom">();
</script>

<h1>ArcTerm Colors</h1>

<div class="mode-selector">
  <button class="mode" onclick={() => (mode = "presets")} class:active={() => mode === "presets"}>Presets</button>
  <button class="mode" onclick={() => (mode = "custom")} class:active={() => mode === "custom"}>Custom...</button>

  <div class="current-theme">
    <div class="color-red"></div>
    <div class="color-green"></div>
    <div class="color-yellow"></div>
    <div class="color-blue"></div>
    <div class="color-cyan"></div>
    <div class="color-magenta"></div>
    <div class="color-fg"></div>
    <div class="color-bright-black"></div>
  </div>  
</div>

<div class="content {mode}">
</div>
