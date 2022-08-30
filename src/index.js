import store from "./customStore";
import * as actions from "./actions";

store.dispatch(actions.bugAdded("Bug A"));

console.log(store);
console.log(store.getState());
