export function join(...args: string[]) {
  let parts: string[] = [];

  for (var i = 0, l = args.length; i < l; i++) {
    parts = parts.concat(args[i].split("/"));
  }

  const newParts = [];

  for (i = 0, l = parts.length; i < l; i++) {
    const part = parts[i];

    if (!part || part === ".") continue;
    if (part === "..") newParts.pop();
    else newParts.push(part);
  }

  if (parts[0] === "") newParts.unshift("");

  return newParts.join("/") || (newParts.length ? "/" : ".");
}

export function dirname(path: string) {
  return join(path, "..");
}
