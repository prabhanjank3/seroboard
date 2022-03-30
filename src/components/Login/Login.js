import React, { useState, useRef, useEffect, useContext } from "react";
import "./Login.css";
import { GoogleLogin } from "react-google-login";
import Properties from "../../Properties";
import { connect } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  const clientId = Properties.REACT_APP_SERO_BOARD_CLIENT_ID;
  const userRef = useRef(null);
  const errRef = useRef(null);
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMgs, setErrMgs] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMgs("");
  }, [user, pwd]);

  async function handleLoginByGoogle(googleResponse) {
    try {
      const response = await axios.post(
        Properties.SERVER_URL + "/api/login",
        JSON.stringify({ token: googleResponse?.tokenId }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response.data);
      const data = response.data;
      if (data.length > 0) {
        console.log(data[0]);
        props.setUserLoggedIn("LOG_IN", data[0]);
      } else {
        alert("User Not Found In System");
      }
    } catch (err) {
      alert(err);
    }
  }

  async function handleLoginByForm(e) {
    e.PreventDefault();
    try {
      const response = await axios.post(
        Properties.SERVER_URL + "/api/login",
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response));
      setUser("");
      setPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMgs("No response from server");
      } else if (err.response?.status === 400) {
        setErrMgs("Missing username or password");
      } else if (err.response?.status === 401) {
        setErrMgs("Unauthorized User");
      } else {
        setErrMgs("Login Failed");
      }
      errRef.current.focus();
    }
  }

  const handleLoginFailure = (res) => {
    alert(res);
  };

  return (
    <section className="container" id="login">
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

                <p>Login using social media to get quick access</p>

                <div className="row social-buttons">
                  <div className="col-xs-4 col-sm-4 col-md-12">
                    <GoogleLogin
                      clientId={clientId}
                      buttonText="Login With Google"
                      onSuccess={handleLoginByGoogle}
                      onFailure={handleLoginFailure}
                      cookiePolicy={"single_host_origin"}
                    ></GoogleLogin>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-7 authfy-panel-right">
            <div className="authfy-login">
              <div className="authfy-panel panel-login text-center active">
                <div className="authfy-heading">
                  <h3 className="auth-title">Login to your account</h3>
                  <p>
                    Don’t have an account?
                    <Link to="signup"> Sign Up Free!</Link>
                  </p>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-12">
                    <p
                      ref={errRef}
                      className={errMgs ? "errmgs" : "offscreen"}
                      aria-live="assertive"
                    >
                      {errMgs}
                    </p>
                    <form
                      name="loginForm"
                      className="loginForm"
                      onSubmit={handleLoginByForm}
                    >
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control email"
                          name="username"
                          placeholder="Email address"
                          ref={userRef}
                          autoComplete="off"
                          onChange={(e) => {
                            setUser(e.target.value);
                          }}
                          value={user}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <div className="pwdMask">
                          <input
                            type="password"
                            className="form-control password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => {
                              setPwd(e.target.value);
                            }}
                            value={pwd}
                            required
                          />
                          <span className="fa fa-eye-slash pwd-toggle" />
                        </div>
                      </div>

                      <div className="row remember-row">
                        <div className="col-xs-6 col-sm-6">
                          <label className="checkbox text-left">
                            <input type="checkbox" defaultValue="remember-me" />
                            <span className="label-text">Remember me</span>
                          </label>
                        </div>
                        <div className="col-xs-6 col-sm-6">
                          <p className="forgotPwd">
                            <Link to="forgot-password">Forgot password?</Link>
                          </p>
                        </div>
                      </div>
                      <div className="form-group">
                        <button
                          className="btn btn-lg btn-primary btn-block"
                          type="submit"
                        >
                          Login with email
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: {
      role: state.authData.role,
      userFirstName: state.authData.userFirstName,
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
