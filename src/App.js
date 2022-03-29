import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const routing = useRoutes(Themeroutes(isLoggedIn, setIsLoggedIn));

  return (
    <div>
      <div className="dark">{routing}</div>
    </div>
  );
}

export default App;
