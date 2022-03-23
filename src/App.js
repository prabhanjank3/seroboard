import React from "react";
import Login from "./components/Login/Login";
import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";

function App() {
  const isLoggedIn = false;
  const routing = useRoutes(Themeroutes(isLoggedIn));

  return (
    <div>
      <div className="dark">{routing}</div>;
    </div>
  );
}

export default App;
