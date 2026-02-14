<script lang="ts">
  import type { WeatherInformation } from "$apps/components/shell/types";
  import type { IShellRuntime } from "$interfaces/shell";
  import Spinner from "$lib/Spinner.svelte";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import { Sleep } from "$ts/sleep";
  import { onMount } from "svelte";

  const { process }: { process: IShellRuntime } = $props();
  const { userPreferences } = process;

  let data = $state<WeatherInformation>();
  let loading = $state<boolean>(true);

  onMount(() => {
    refresh();

    process.dispatch.subscribe("refresh-weather", () => refresh());
  });

  async function refresh(fromContext = false) {
    if (fromContext) {
      await Sleep(1);

      process.actionCenterOpened.set(true);
    }
    loading = true;
    data = await process.getWeather();
    loading = false;
  }

  async function changeLocation() {
    await process.spawnApp("systemSettings", process.pid, "shell", "shell_weatherLocation");
  }
</script>

<div
  class="card weather partly-sunny"
  style={data && data.gradient ? `--gradient-start: ${data.gradient.start}; --gradient-end: ${data.gradient.end};` : ""}
  class:loading
  class:errored={$userPreferences.shell.actionCenter.weatherLocation.name === "unset" || !data}
  class:night={data && data.isNight}
  use:contextMenu={[
    [
      {
        caption: "Refresh",
        action: () => {
          refresh(true);
        },
        icon: "rotate-cw",
      },
      {
        caption: "Change location...",
        icon: "map-pin",
        action: () => {
          changeLocation();
        },
      },
    ],
    process,
  ]}
>
  {#if $userPreferences.shell.actionCenter.weatherLocation.name === "unset"}
    <p>Set-up weather</p>
    <button
      class="retry lucide icon-settings-2"
      title="Set weather location"
      aria-label="Set weather location"
      onclick={() => changeLocation()}
    ></button>
  {:else if !loading}
    {#if data}
      {#if data.icon && data.iconColor}
        <span class="condition-icon lucide icon-{data.icon}" style="--color: {data.iconColor};"></span>
      {/if}
      <h1>
        {data.temperature.toFixed(1)} °C
      </h1>
      <p>
        <button class="lucide icon-refresh-cw" title="Refresh" aria-label="Refresh" onclick={() => refresh()}></button>
        {#if data.condition}
          <span>
            {data.condition}
          </span>
        {/if}
      </p>
    {:else}
      <p>Failed to get weather info</p>
      <button class="retry lucide icon-refresh-cw" title="Retry" aria-label="Retry" onclick={() => refresh()}></button>
    {/if}
  {:else}
    <Spinner height={32} />
  {/if}
</div>
