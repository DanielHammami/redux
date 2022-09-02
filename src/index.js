import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";

const store = configureStore();

store.subscribe(() => {
  console.log("Store changed!");
});

store.dispatch(actions.bugAdded({ description: "Bug A" }));
store.dispatch(actions.bugAdded({ description: "Bug B" }));
store.dispatch(actions.bugAdded({ description: "Bug C" }));
store.dispatch(actions.bugResolved({ id: 1 }));

console.log(store.getState());
