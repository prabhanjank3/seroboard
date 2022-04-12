import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./assets/scss/style.scss";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import { HashRouter } from "react-router-dom";
import Loader from "./layouts/loader/Loader";
import thunk from 'redux-thunk';
const store = createStore(reducer,applyMiddleware(thunk));
ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <HashRouter>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </HashRouter>
  </Suspense>,
  document.getElementById("root")
);

reportWebVitals();
