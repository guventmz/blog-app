import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { CookiesProvider } from 'react-cookie';
import mainReducer from "./components/store/mainReducer";
import thunk from "redux-thunk";
import "./reset.css";
import "./index.css";


const store = createStore(mainReducer, applyMiddleware(thunk));

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>,
  document.getElementById("root")
);
