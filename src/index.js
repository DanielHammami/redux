import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";

const store = configureStore();

store.subscribe(() => {
  console.log("Store changed!");
});

store.dispatch(actions.bugAdded("Bug A"));
store.dispatch(actions.bugAdded("Bug B"));
store.dispatch(actions.bugAdded("Bug C"));
store.dispatch(actions.bugResolved(1));

console.log(store.getState());
