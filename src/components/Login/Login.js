import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { GoogleLogin } from "react-google-login";
import Properties from "../../Properties";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";

const LOGIN_URL = "/users";

function Login(props) {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef(null);
  const errRef = useRef(null);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMgs, setErrMgs] = useState("");
  const [success, setSuccess] = useState("");

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  useEffect(() => {
    setErrMgs("");
  }, [user, pwd]);

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const clientId = Properties.REACT_APP_SERO_BOARD_CLIENT_ID;

  const [email, setEmail] = useState("");

  async function handleLoginByGoogle(googleResponse) {
    console.log(googleResponse);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ token: googleResponse?.tokenId }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
      setLoginData(data);
      localStorage.setItem("loginData", JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  }

  async function handleLoginByForm(e) {
    e.PreventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
      navigate("/dashboard");
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
  function handleLoginFailure(result) {
    alert(result);
  }

  const onLoginSuccess = (res) => {
    console.log("Login Success: Current User email => ", res.profileObj.email);
    setEmail(res.profileObj.email);
    props.isLoggedIn(true);
    // fetch(`http://localhost:4567/Users/${email}`)
    //   .then((a) => a.json())
    //   .then((result) => {
    //     console.log("This is resule" + result);
    //     if (result.length > 0) {
    //       console.log(result);
    //       props.isLoggedIn(true);
    //     } else {
    //       props.isLoggedIn(false);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
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
                      <GoogleLogin
                        clientId={clientId}
                        buttonText="Sign In"
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={"single_host_origin"}
                        isSignedIn={true}
                      />
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
