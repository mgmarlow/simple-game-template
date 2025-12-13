import { Action } from "./types";

export interface State {
  count: number;
}

class Store {
  state: State = { count: 0 };

  update(action: Action) {
    switch (action.type) {
      case "inc":
        this.state.count++;
        break;
      case "dec":
        this.state.count--;
        break;
    }
  }
}

export default Store;
