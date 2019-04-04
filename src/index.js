import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import history from "./history";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA