// Implementation of PHPs htmlspecialchars() function in DOM JS
export function htmlspecialchars(text: string) {
  const el = document.createElement("div");

  el.innerText = text;

  return el.innerHTML;
}

export function detectJavaScript(htmlString: string) {
  // Regular expressions to detect disallowed elements and attributes
  const disallowedTagsRegex =
    /<(script|meta|title|link|iframe|noscript|embed|object|base|head|html|body)\b[^>]*>/i;
  const disallowedAttributesRegex =
    /\b(on\w+|lang|charset|http-equiv|content|scheme|target|rel|base)=["'][^"']*["']/i;
  const javascriptURLRegex = /href=["']javascript:[^"']*["']/i;

  // Test the string against each regex
  return (
    disallowedTagsRegex.test(htmlString) ||
    disallowedAttributesRegex.test(htmlString) ||
    javascriptURLRegex.test(htmlString)
  );
}
