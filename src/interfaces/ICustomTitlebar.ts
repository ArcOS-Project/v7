// !tpa
export interface ICustomTitlebar {
  render(target: HTMLElement): void;
  dispose(): void;
  getTarget(): HTMLElement | undefined;
  getTitlebar(): HTMLDivElement | undefined;
}
// !endtpa