import React from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";

function Signup() {
  return (
    <div className="container">
      <div className="row">
        <div className="authfy-container col-xs-12 col-sm-10 col-md-8 col-lg-6 col-sm-offset-1 col-md-offset-2 col-lg-offset-3">
          <div className="col-sm-5 authfy-panel-left">
            <div className="brand-col">
              <div className="headline">
                <div className="brand-logo">
                  <img
                    src="https://apisero.com/wp-content/uploads/2021/01/APISERO-logo.svg"
                    width={150}
                    alt="brand-logo"
                  />
                </div>

                <p>
                  Fill in your e-mail address, Full Name and Password and join a
                  new adventure with us.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-7 authfy-panel-right">
            <div className="authfy-login">
              <div className="active authfy-panel panel-signup text-center">
                <div className="row">
                  <div className="col-xs-12 col-sm-12">
                    <div className="authfy-heading">
                      <h3 className="auth-title">Sign up for free!</h3>
                    </div>
                    <form
                      name="signupForm"
                      className="signupForm"
                      action="#"
                      method="POST"
                    >
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="username"
                          placeholder="Email address"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="fullname"
                          placeholder="Full name"
                        />
                      </div>
                      <div className="form-group">
                        <div className="pwdMask">
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                          />
                          <span className="fa fa-eye-slash pwd-toggle" />
                        </div>
                      </div>
                      <div className="form-group">
                        <p className="term-policy text-muted small">
                          I agree to the <a href="/"> privacy policy</a> and
                          <a href="/"> terms of service</a>.
                        </p>
                      </div>
                      <div className="form-group">
                        <button
                          className="btn btn-lg btn-primary btn-block"
                          type="submit"
                        >
                          Sign up with email
                        </button>
                      </div>
                    </form>
                    <div className="mt-3">
                      <Link to="/">Already have an account?</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
