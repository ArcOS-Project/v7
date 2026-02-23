<script lang="ts">
  import type { AddServerRuntime } from "./runtime";

  const { process }: { process: AddServerRuntime } = $props();

  let hostname = $state<string>("");
  let authCode = $state<string>("");
  let port = $state<number>(443);
</script>

<div class="header">
  <h1>Add Server</h1>
  <p>Where do you want to go today?</p>
</div>

<div class="input">
  <p class="caption">Server hostname</p>
  <input type="text" bind:value={hostname} />
</div>

<div class="input">
  <p class="caption">Authentication code</p>
  <input type="text" bind:value={authCode} />
</div>

<div class="input port">
  <div class="left">
    <p class="caption">Port</p>
    <div class="options">
      <button class:selected={port === 443} onclick={() => (port = 443)} class="link">HTTPS</button>
      <div class="sep">/</div>
      <button class:selected={port === 2025} onclick={() => (port = 2025)} class="link">Local</button>
      <div class="sep">/</div>
      <button class:selected={port !== 443 && port !== 2025} onclick={() => (port = 80)} class="link">Custom</button>
    </div>
  </div>
  <div class="right">
    <input type="number" bind:value={port} disabled={port === 443 || port === 2025} min={100} max={65535} />
  </div>
</div>

<div class="actions">
  <button
    class="test"
    disabled={!hostname || port <= 100 || port > 65535}
    onclick={() => process.testServer(hostname, port, authCode)}>Test</button
  >
  <button class="cancel" onclick={() => process.closeWindow()}>Cancel</button>
  <button
    class="suggested"
    disabled={!hostname || port <= 100 || port > 65535}
    onclick={() => process.addServer(hostname, port, authCode)}>Add</button
  >
</div>
