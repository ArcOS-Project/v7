<script lang="ts">
  import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
  import { WeatherHelper } from "$ts/helpers/weather";
  import { Sleep } from "$ts/sleep";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import type { WeatherInformation } from "$types/external/weather";
  import { onMount } from "svelte";

  const { process }: { process: IShellRuntime } = $props();
  const { userPreferences } = process;

  let data = $state<WeatherInformation>();
  let loading = $state<boolean>(true);
  let city = $derived($userPreferences.weatherSettings.name?.split(", ")[0]);

  onMount(() => {
    refresh();

    process.dispatch.subscribe("refresh-weather", () => refresh());
  });

  async function refresh() {
    loading = true;
    data = await WeatherHelper.getWeather();
    loading = false;
  }

  async function changeLocation() {
    await process.spawnApp("systemSettings", process.pid, "shell", "shell_weatherLocation");
  }
</script>

{#if $userPreferences.weatherSettings.displayMode !== "disabled"}
  <div
    class="weather-applet"
    style={data && data.gradient ? `--gradient-start: ${data.gradient.start}; --gradient-end: ${data.gradient.end};` : ""}
    class:loading
    class:errored={$userPreferences.weatherSettings.name === "unset" || !data}
    class:night={data && data.isNight}
    use:contextMenu={[
      [
        {
          caption: "Refresh",
          action: () => refresh(),
          icon: "rotate-cw",
        },
        {
          caption: "Change location...",
          icon: "map-pin",
          action: () => changeLocation(),
        },
      ],
      process,
    ]}
  >
    {#if $userPreferences.weatherSettings.name === "unset"}
      <p>Set-up weather</p>
      <button
        class="retry lucide icon-settings-2"
        title="Set weather location"
        aria-label="Set weather location"
        onclick={() => changeLocation()}
      ></button>
    {:else if data}
      {#if data.icon && data.iconColor}
        <span class="condition-icon lucide icon-{data.icon}" style="--color: {data.iconColor};"></span>
      {/if}
      {#if $userPreferences.weatherSettings.displayMode !== "onlyTemperature"}
        <div class="info">
          <h1>
            {data.temperature.toFixed(1)} °C
          </h1>
          <p>
            <button class="lucide icon-refresh-cw" title="Refresh" aria-label="Refresh" onclick={() => refresh()}></button>
            {#if $userPreferences.weatherSettings.displayMode === "withCity" && city}
              <span>
                {city}
              </span>
            {:else if $userPreferences.weatherSettings.displayMode === "withCondition" && data.condition}
              <span>
                {data.condition}
              </span>
            {/if}
          </p>
        </div>
      {:else}
        <h1 class="single">
          <span>{data.temperature.toFixed(1)} °C</span>
          <button class="lucide icon-refresh-cw" title="Refresh" aria-label="Refresh" onclick={() => refresh()}></button>
        </h1>
      {/if}
    {:else}
      <p>Failed to get weather info</p>
      <button class="retry lucide icon-refresh-cw" title="Retry" aria-label="Retry" onclick={() => refresh()}></button>
    {/if}
  </div>
{/if}
