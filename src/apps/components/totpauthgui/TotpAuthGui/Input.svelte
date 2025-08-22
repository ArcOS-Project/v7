<script>
  import { onMount } from "svelte";

  export let length;
  let els = [];
  let values = [];
  export let code = "";

  $: {
    (() => {
      if (values.length != length || values.includes(null)) return (code = "");
      code = 0;
      values.forEach((value, index) => {
        code += value * 10 ** (length - index - 1);
      });
      code = code.toString().padStart(length, "0");
    })();
  }

  onMount(() => {
    els[0]?.focus();
  });

  function handleMoveAndBackspace(e) {
    let targetIndex = +e.target.getAttribute("index");

    switch (e.key) {
      case "ArrowRight": //ArrowRight
        e.preventDefault();
        els[min(length - 1, targetIndex + 1)]?.focus();
        break;
      case "ArrowLeft": //ArrowLeft
        e.preventDefault();
        els[max(0, targetIndex - 1)]?.focus();
        break;
      case "Backspace": //Backspace
        e.preventDefault();

        // if curent cell is empty we want to backspace the previous cell
        if (!values[targetIndex] && values[targetIndex] != 0) {
          els[max(0, targetIndex - 1)]?.focus();
          values[targetIndex - 1] = null;
        } else {
          values[targetIndex] = null;
        }
        break;
    }
  }

  function handleKey(e) {
    if (Number.isNaN(+e.key)) return;
    values[e.target.getAttribute("index")] = +e.key;
    els[min(length - 1, +e.target.getAttribute("index") + 1)]?.focus();
  }

  function handlePaste(e) {
    if (Number.isNaN(+e.clipboardData.getData("text"))) return;
    waterfall({ target: e.target, arr: e.clipboardData.getData("text") });
  }

  function waterfall(data) {
    let [first, ...rest] = data.arr;
    values[data.target.getAttribute("index")] = +first;
    els[min(length - 1, +data.target.getAttribute("index") + 1)]?.focus();
    if (data.target.getAttribute("index") == length - 1 || rest.length === 0) return;
    waterfall({ target: els[+data.target.getAttribute("index") + 1], arr: rest });
  }

  function range(length) {
    let arr = [];

    for (let i = 0; i < length; i++) {
      arr.push(i);
    }

    return arr;
  }

  function min(a, b) {
    if (a < b) return a;
    return b;
  }

  function max(a, b) {
    if (a > b) return a;
    return b;
  }

  function getTotalLength(idx, arr) {
    return arr.slice(0, idx).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }
</script>

<div class="inputs">
  {#if Array.isArray(length)}
    {#each length as part, idx}
      {#each range(part) as index}
        <input
          id={index == 0 ? "first-input" : ""}
          type="number"
          on:keydown={handleMoveAndBackspace}
          on:keypress|preventDefault={handleKey}
          on:paste|preventDefault={handlePaste}
          bind:this={els[index + getTotalLength(idx, length)]}
          bind:value={values[index + getTotalLength(idx, length)]}
          index={index + getTotalLength(idx, length)}
        />
      {/each}
    {/each}
  {:else}
    {#each range(length) as index}
      <input
        id={index == 0 ? "first-input" : ""}
        type="number"
        on:keydown={handleMoveAndBackspace}
        on:keypress|preventDefault={handleKey}
        on:paste|preventDefault={handlePaste}
        bind:this={els[index]}
        bind:value={values[index]}
        {index}
      />
    {/each}
  {/if}
</div>
