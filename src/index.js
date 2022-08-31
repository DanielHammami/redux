import store from "./store";
import * as actions from "./actions";

store.subscribe(() => {
  console.log("Store changed!");
});

store.dispatch(actions.bugAdded("Bug A"));
store.dispatch(actions.bugAdded("Bug B"));
store.dispatch(actions.bugAdded("Bug C"));
store.dispatch(actions.bugResolved(1));

console.log(store.getState());
