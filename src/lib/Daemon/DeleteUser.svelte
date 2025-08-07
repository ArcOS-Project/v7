<script lang="ts">
  import { onMount } from "svelte";

  let { disabled = $bindable() }: { disabled: boolean } = $props();

  let input = $state("");

  onMount(() => {
    disabled = true;
  });

  function update() {
    disabled = input != "I want to delete my account";
  }
</script>

<p>
  Are you sure you want to delete your ArcOS account? This will delete any and all user data associated with this account. These
  changes cannot be reverted!<br /><br />
  Type <code>I want to delete my account</code> to continue.
</p>
<input type="text" onkeydown={update} onkeyup={update} oninput={update} bind:value={input} />
