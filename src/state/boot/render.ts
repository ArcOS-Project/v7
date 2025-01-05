import { TestApp } from "../../apps/test/metadata";
import { TestAppRuntime } from "../../apps/test/runtime";
import { WaveKernel } from "../../ts/kernel";
import { ProcessHandler } from "../../ts/process/handler";

export default async function render() {
  const kernel = WaveKernel.get();
  const stack = kernel.getModule<ProcessHandler>("stack");

  stack.spawn<TestAppRuntime>(TestAppRuntime, 0, {
    data: TestApp,
    meta: TestApp,
    id: "testApp",
  });
}
