<script lang="ts">
  import type { AppComponentProps } from "$types/app";
  import Header from "./RoturAuthGui/Header.svelte";
  import Login from "./RoturAuthGui/Login.svelte";
  import Register from "./RoturAuthGui/Register.svelte";
  import type { RoturAuthGuiProcess } from "./runtime";

  const { process }: AppComponentProps<RoturAuthGuiProcess> = $props();
  const { isRegistering } = process;
</script>

<Header {isRegistering} />
<div class="container">
  {#if $isRegistering}
    <Register {process} />
  {:else}
    <Login {process} />
  {/if}
</div>
