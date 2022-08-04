import { createStore } from "redux";
import { rootReducer } from "./plainRedux/reducers/index.js";

export const store = createStore(rootReducer);
