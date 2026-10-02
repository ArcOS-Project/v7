export class HtmlUtil {
  public static GetStateLoader() {
    return this.GetElement<HTMLDivElement>("#stateLoader", "StateLoader");
  }

  public static GetAppRenderer() {
    return this.GetElement<HTMLDivElement>("#appRenderer", "AppRenderer");
  }

  public static GetKernelLog() {
    return this.GetElement<HTMLDivElement>("#kernelLog", "KernelLog");
  }

  public static GetMain() {
    return this.GetElement<HTMLDivElement>("body > main#main", "Main");
  }

  private static GetElement<T extends HTMLElement = HTMLDivElement>(selectors: string, qualifiedName: string): T {
    const element = document.querySelector<T>(selectors);
    if (!element) throw new Error(`${this.GetElement.name}::${qualifiedName} failed`);

    return element;
  }
}
