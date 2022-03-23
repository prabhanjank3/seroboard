import React, { useState } from "react";
import "./Login.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientId =
  "635698053280-qkbl9lqbgmrvu8caf3351mb782jk9cb9.apps.googleusercontent.com";

function Login() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Welcome back!</h3>
                  <div>
                    <div className="social-login">
                      <a
                        href="/"
                        className="google btn btn-lg text-uppercase fw-bold d-flex justify-content-center align-items-center"
                      >
                        Sign in with Google
                      </a>
                      {showloginButton ? (
                        <GoogleLogin
                          clientId={clientId}
                          buttonText="Sign in with Google"
                          onSuccess={onLoginSuccess}
                          onFailure={onLoginFailure}
                          cookiePolicy={"single_host_origin"}
                          isSignedIn={true}
                        />
                      ) : null}
                    </div>
                    <span className="d-block text-center my-4 text-muted">
                      — or —
                    </span>
                  </div>
                  <form>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="rememberPasswordCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="rememberPasswordCheck"
                      >
                        Remember password
                      </label>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                        type="submit"
                      >
                        Sign in
                      </button>
                      <div className="text-center">
                        <a className="small" href="/">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
