interface Options {
  barWidth: string;
  barHeight: number;
  maxValue: number;
  value: number;
  indeterminate: boolean;
  className: string;
}

export class ProgressBar {
  options: Options;
  defaultOptions: Options = {
    barWidth: "100%",
    barHeight: 12,
    maxValue: 100,
    value: 0,
    indeterminate: false,
    className: "",
  };
  bar: HTMLDivElement | undefined;
  inner: HTMLDivElement | undefined;

  constructor(options = this.defaultOptions) {
    this.options = options;

    this.options.barWidth ??= this.defaultOptions.barWidth;
    this.options.barHeight ??= this.defaultOptions.barHeight;
    this.options.maxValue ??= this.defaultOptions.maxValue;
    this.options.value ??= this.defaultOptions.value;
    this.options.indeterminate ??= this.defaultOptions.indeterminate;
    this.options.className ??= this.defaultOptions.className;

    this.createBar();
  }

  createBar() {
    const { barWidth, barHeight, indeterminate, className } =
      this.options || this.defaultOptions;

    const bar = document.createElement("div");
    const inner = document.createElement("div");

    bar.className = className || "";
    bar.classList.add("progress-bar");

    if (indeterminate) bar.classList.add("indeterminate");

    bar.style.setProperty(
      "--bar-width",
      typeof barWidth === "number" ? `${barWidth}px` : barWidth
    );
    bar.style.setProperty(
      "--bar-height",
      typeof barHeight === "number" ? `${barHeight}px` : barHeight
    );

    inner.className = "inner";

    bar.append(inner);

    this.inner = inner;
    this.bar = bar;

    this.updateInner();
  }

  setIndeterminate(indeterminate: boolean) {
    if (indeterminate) this.bar?.classList.add("indeterminate");
    else this.bar?.classList.remove("indeterminate");

    this.updateInner();
  }

  setValue(value: number) {
    this.options.value = value ?? this.options.value;

    this.updateInner();
  }

  setMax(value: number) {
    this.options.maxValue = value ?? this.options.maxValue;

    this.updateInner();
  }

  updateInner() {
    this.inner?.style.setProperty(
      "--width",
      `${Math.floor((100 / this.options.maxValue) * this.options.value)}%`
    );
  }
}
