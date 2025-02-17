<script lang="ts">
  interface Props {
    className?: string;
    strokeWidth?: number;
    size?: number;
    max?: number;
    value?: number;
  }

  const {
    className = "",
    strokeWidth = 3,
    size = 20,
    max = 100,
    value = 50,
  }: Props = $props();

  let progressValue = $state<number>(0);
  let radius = $state<number>(0);
  let circumference = $state<number>(0);
  let dashOffset = $state<number>(0);

  $effect(() => {
    progressValue = Math.min(Math.max(value, 0), max);
    radius = (size - strokeWidth) / 2;
    circumference = 2 * Math.PI * radius;
    dashOffset = circumference * (1 - progressValue / max);
  });
</script>

<svg
  class="circular-progress {className}"
  width={size}
  height={size}
  viewBox={`0 0 ${size} ${size}`}
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    class="background"
    cx={size / 2}
    cy={size / 2}
    r={radius}
    stroke-width={strokeWidth}
  />

  <circle
    class="progress"
    cx={size / 2}
    cy={size / 2}
    r={radius}
    stroke-width={strokeWidth}
    stroke-dasharray={circumference}
    stroke-dashoffset={dashOffset}
    transform={`rotate(-90 ${size / 2} ${size / 2})`}
  />
</svg>

<style scoped>
  .background {
    fill: none;
    stroke: var(--accent-transparent);
  }

  .progress {
    fill: none;
    stroke: var(--accent-lighter);
    stroke-linecap: round;
    transition: stroke-dashoffset 0.3s ease;
  }
</style>
