import React from "react";
import Login from "./components/Login";
import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";

function App() {
  const routing = useRoutes(Themeroutes);
  return (
    <div>
      <div className="dark">{routing}</div>;
    </div>
  );
}

export default App;
