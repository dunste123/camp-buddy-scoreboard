import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import initialState from "./initialState";
import reducers from "./reducers";
import {loadBuddies} from "./actions";

const store = createStore(reducers, initialState, applyMiddleware(thunkMiddleware));

/*store.subscribe(() => {
    const state = store.getState();

    console.log(state.buddies[1]);
});*/

store.dispatch(loadBuddies());

export {store};
