export type Action = { type: "inc" } | { type: "dec" };

export type Dispatch = (action: Action) => void;
