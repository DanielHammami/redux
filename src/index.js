import configureStore from "./store/configureStore";
import { bugAdded, bugResolved } from "./store/bugs";
import * as actions from "./store/projects";

const store = configureStore();

store.subscribe(() => {
  console.log("Store changed!");
});

store.dispatch(actions.projectAdded({ name: "Project 1" }));
store.dispatch(bugAdded({ description: "Bug A" }));
store.dispatch(bugAdded({ description: "Bug B" }));
store.dispatch(bugAdded({ description: "Bug C" }));
store.dispatch(bugResolved({ id: 1 }));

console.log(store.getState());
