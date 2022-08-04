import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { ReduxExample } from "./plainRedux/ReduxExample";
import { store } from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// comment out ReduxExample to learn useReducer hook and provider for zero confustions.
// comment out App to learn Plain Redux.

root.render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* <ReduxExample /> */}
    {/* </Provider> */}
  </StrictMode>
);
