<script lang="ts">
  interface Props {
    icon: string;
    password?: boolean;
    placeholder: string;
    value?: string;
    disabled?: boolean;
  }

  let {
    icon,
    password = false,
    disabled = false,
    placeholder,
    value = $bindable(),
  }: Props = $props();
</script>

<div class="field">
  <div class="lucide icon-{icon}"></div>
  <input
    type={password ? "password" : "text"}
    {placeholder}
    bind:value
    {disabled}
  />
</div>
