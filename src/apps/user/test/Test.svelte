<script lang="ts">
  function crash() {
    throw new Error("bruh");
  }

  function crashOS() {
    (window as any) = undefined;
  }
</script>

<button onclick={crash}>Crash app</button>
<button onclick={crashOS}>Crash OS</button>
