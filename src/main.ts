import {
  init,
  styleModule,
  propsModule,
  eventListenersModule,
  attributesModule,
} from "snabbdom";
import { view } from "./view";
import Store from "./store";
import { Action } from "./types";

const patch = init([
  propsModule,
  eventListenersModule,
  styleModule,
  attributesModule,
]);

window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector<HTMLDivElement>("#app")!;

  const store = new Store();

  function dispatch(action: Action) {
    store.update(action);
    render();
  }

  const makeView = view(dispatch);
  let vnode = patch(container, makeView(store.state));

  function render() {
    vnode = patch(vnode, makeView(store.state));
  }
});
