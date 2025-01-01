// Implementation of PHPs htmlspecialchars() function in DOM JS
export function htmlspecialchars(text: string) {
  const el = document.createElement("div");

  el.innerText = text;

  return el.innerHTML;
}
