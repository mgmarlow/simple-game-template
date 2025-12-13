import { h } from "snabbdom";
import { Dispatch } from "./types";
import { State } from "./store";

export const view = (dispatch: Dispatch) => (state: State) => {
  return h("div", [
    h("p", `count: ${state.count}`),
    h("button", { on: { click: () => dispatch({ type: "inc" }) } }, "+"),
    h("button", { on: { click: () => dispatch({ type: "dec" }) } }, "-"),
  ]);
};
