import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { codesReducer } from "./codesReducer";
import { currencyReducer } from "./currencyReducer";
import { loadingReducer } from "./loadingReducer";
import { inputFieldsReducer } from "./inputFieldsReducer";

let rootReducer = combineReducers({
  codesReducer: codesReducer,
  currencyReducer: currencyReducer,
  loadingReducer: loadingReducer,
  inputFieldsReducer: inputFieldsReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type rootReducerType = ReturnType<typeof rootReducer>;
