import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import { Provider } from "react-redux";
import { factReducer } from "./reducers/factReducer";
import thunk from "redux-thunk";
import Facts from "./components/Facts";
//step one create a store
const store = createStore(factReducer, applyMiddleware(logger, thunk));

function App() {
  return (
    <div className="App">
      <Facts />
    </div>
  );
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
