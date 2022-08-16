import store from "./store";
import { bugAdded } from "./actions";

store.dispatch(bugAdded("Bug A"));

console.log(store);
