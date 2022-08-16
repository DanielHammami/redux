import store from "./store";
import { bugAdded, bugResolved } from "./actions";

store.dispatch(bugAdded("Bug A"));
store.dispatch(bugResolved(1));

console.log(store);
