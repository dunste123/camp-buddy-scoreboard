import { createStore } from "redux";
import initialState from "./initialState";
import reducers from "./reducers";

const store = createStore(reducers, initialState);

store.subscribe(() => console.log(store.getState()));

export {store};
