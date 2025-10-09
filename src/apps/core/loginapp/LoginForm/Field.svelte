<script lang="ts">
  interface Props {
    icon: string;
    password?: boolean;
    placeholder: string;
    value?: string;
    disabled?: boolean;
    onsubmit?: () => void;
  }

  let { icon, password = false, disabled = false, placeholder, value = $bindable(), onsubmit = () => {} }: Props = $props();

  function keydown(e: KeyboardEvent) {
    if (e.key === "Enter") onsubmit();
  }
</script>

<div class="field">
  <div class="lucide icon-{icon}"></div>
  <input type={password ? "password" : "text"} {placeholder} bind:value {disabled} spellcheck={false} onkeydown={keydown} />
</div>
