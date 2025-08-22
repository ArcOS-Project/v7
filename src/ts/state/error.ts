export class StateError extends Error {
  name = "StateError";

  constructor(message: string) {
    super(message);
  }
}
