import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./assets/scss/style.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import { HashRouter } from "react-router-dom";
import Loader from "./layouts/loader/Loader";

const store = createStore(reducer);
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
