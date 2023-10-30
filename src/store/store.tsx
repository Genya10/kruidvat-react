import { applyMiddleware,combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers/reducers";

const rootReducer = combineReducers(reducers);

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;