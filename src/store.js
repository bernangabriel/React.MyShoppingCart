import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import reducers from "./reducers";

//create redux-logger
const logger = createLogger();

const store = createStore(reducers, applyMiddleware(logger));

export default store;
