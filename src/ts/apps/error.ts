export class AppLoadError extends Error {
  name = "AppLoadError";

  constructor(message: string) {
    super(message);
  }
}

export class AppRuntimeError extends Error {
  name = "AppRuntimeError";

  constructor(message: string) {
    super(message);
  }
}

export class AppRendererError extends Error {
  name = "AppRendererError";

  constructor(message: string) {
    super(message);
  }
}
