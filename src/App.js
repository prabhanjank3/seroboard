import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import { connect } from "react-redux";
import "./assets/scss/style.scss";

function App(props) {
  const routing = useRoutes(Themeroutes(props.userData.isLoggedIn));

  return (
    <div>
      <div className="dark">{routing}</div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: {
      role: state.authData.role,
      userFirstName: state.authData.userFirstName,
      isLoggedIn: state.authData.isUserLoggedIn,
    },
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUserLoggedIn: (actionType, payLoad) => {
      dispatch({ type: actionType, payLoad: payLoad });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
