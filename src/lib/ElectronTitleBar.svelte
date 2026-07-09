<script lang="ts">
  import { IsElectron } from "$ts/electron";
  import { ReleaseLogo } from "$ts/images/branding";

  function maximize() {
    if (IsElectron()) electron?.maximizeWindow();
  }

  function minimize() {
    if (IsElectron()) electron?.minimizeWindow();
  }

  function close() {
    if (IsElectron()) electron?.closeWindow();
  }
</script>

<div id="electron-titlebar">
  <div class="window-title">
    <img src={ReleaseLogo} alt="ArcOS logo" />
    <span>{document.title}</span>
  </div>
  <div class="controls">
    <button class="minimize icon-chevron-down" aria-label="minimize" onclick={minimize}></button>
    <button class="maximize icon-chevron-up" aria-label="maximize" onclick={maximize}></button>
    <button class="close icon-x" aria-label="close" onclick={close}></button>
  </div>
</div>
