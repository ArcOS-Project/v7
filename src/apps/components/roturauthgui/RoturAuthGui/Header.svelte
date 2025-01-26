<script lang="ts">
  import { RoturIcon } from "$ts/images/general";
  import type { ReadableStore } from "$ts/writable";

  const { isRegistering }: { isRegistering: ReadableStore<boolean> } = $props();
</script>

<div class="header">
  <img src={RoturIcon} alt="" />
  <h1>{$isRegistering ? "Sign up for Rotur" : "Log in to Rotur"}</h1>
</div>
