import { mount } from "svelte";
import BootComponent from "./Boot.svelte";

export default async function render() {
  const bootScreen = document.querySelector("#bootScreen");

  mount(BootComponent, {
    target: bootScreen!,
  });
}
