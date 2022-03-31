import React from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";

function ForgotPassword() {
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
                  Fill in your e-mail address below and we will send you an
                  email with further instructions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-7 authfy-panel-right">
            <div className="authfy-login">
              <div className="authfy-panel panel-forgot active">
                <div className="row">
                  <div className="col-xs-12 col-sm-12">
                    <div className="authfy-heading">
                      <h3 className="auth-title">Recover your password</h3>
                      <p>
                        Fill in your e-mail address below and we will send you
                        an email with further instructions.
                      </p>
                    </div>
                    <form
                      name="forgetForm"
                      className="forgetForm"
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
                        <button
                          className="btn btn-lg btn-primary btn-block"
                          type="submit"
                        >
                          Recover your password
                        </button>
                      </div>
                      <div className="form-group pt-3">
                        <Link to="/">Already have an account?</Link>
                      </div>
                      <div className="form-group pt-1">
                        <Link
                          className="lnk-toggler"
                          data-panel=".panel-signup"
                          to="/signup"
                        >
                          Don’t have an account?
                        </Link>
                      </div>
                    </form>
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

export default ForgotPassword;
