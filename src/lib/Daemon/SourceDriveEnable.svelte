<script lang="ts">
  import { Store } from "$ts/writable";
  import { onMount } from "svelte";

  let { disabled = $bindable() }: { disabled: boolean } = $props();
  const accepts = Store<boolean>(false);

  onMount(() => {
    accepts.subscribe((v) => {
      disabled = !v;
    });
  });
</script>

<p>
  By accessing the source code of ArcOS v7, you agree to the terms and conditions outlined in the GPLv3 license bundled with the
  operating system. The LICENSE file illustrates the rights of both you, the user, and us, the authors. Click <b>View License</b> to
  read through the license before proceeding.
</p>
<label for="">
  <input type="checkbox" bind:checked={$accepts} />
  <span>I have read, and accept, the GPLv3 license.</span>
</label>

<style scoped>
  label {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }

  input {
    margin-top: 0 !important;
  }
</style>
