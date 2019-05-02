import { combineReducers } from "redux";
import itemsReduce from "./containers/items/reducer";

//merge reducers object
const rootReducers = combineReducers({
  items: itemsReduce
});

export default rootReducers;
