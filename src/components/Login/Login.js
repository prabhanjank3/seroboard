import React, { useRef, useEffect } from "react";
import "./Login.css";
import { GoogleLogin } from "react-google-login";
import Properties from "../../Properties";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import AddUserModal from "../modals/addUserModal";
import seroBoardlogo from "../../assets/images/logos/Seroboard_Logo.png";
function Login(props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email").required("Required"),
      password: Yup.string()
        .required("Required")
        .max(15, "Must be 15 characters or less"),
    }),
    onSubmit: (values) => {
      handleLoginByForm(values);
    },
  });

  const clientId = Properties.REACT_APP_SERO_BOARD_CLIENT_ID;
  const userRef = useRef(null);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  async function handleLoginByGoogle(googleResponse) {
    try {
      const response = await axios.post(
        Properties.SERVER_URL + "/api/login",
        JSON.stringify({ token: googleResponse?.tokenId }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = response.data;
      console.log(data);
      if (data.length > 0) {
        props.setUserLoggedIn("LOG_IN", {
          ...data[0],
          imageUrl: googleResponse.profileObj?.imageUrl,
        });
      } else {
        alert("User Not Found In System");
      }
    } catch (err) {
      alert(err);
    }
  }

  async function handleLoginByForm(values) {
    try {
      const response = await axios.post(
        Properties.SERVER_URL + "/api/login",
        JSON.stringify({ email: values.email, password: values.password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = response.data;

      console.log(data[0]);
      if (data.length > 0) {
        props.setUserLoggedIn("LOG_IN", data[0]);
      } else {
        alert("User Not Found In System");
      }
    } catch (err) {
      alert(err);
    }
  }

  const handleLoginFailure = (res) => {
    alert(res);
  };

  return (
    <section id="login">
      <div className="container-fluid">
        <div className="row">
          <div className="authfy-container col-xs-12 col-sm-10 col-md-8 col-lg-6 col-sm-offset-1 col-md-offset-2 col-lg-offset-3">
            <div className="col-sm-5 authfy-panel-left">
              <div className="brand-col">
                <div className="headline">
                  <div className="brand-logo">
                    <img src={seroBoardlogo} alt="SeroBoard" width={240} />
                  </div>

                  <p>Login using social media to get quick access</p>
                </div>
              </div>
            </div>
            <div className="col-sm-7 authfy-panel-right">
              <div className="authfy-login">
                <div className="authfy-panel panel-login text-center active">
                  <div className="authfy-heading">
                    <h3 className="auth-title">Login to your account</h3>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-12">
                      <form
                        name="loginForm"
                        className="loginForm"
                        onSubmit={formik.handleSubmit}
                      >
                        <div className="form-group">
                          {formik.touched.email && formik.errors.email ? (
                            <span id="emailError" className="text-danger">
                              {formik.errors.email}
                            </span>
                          ) : null}
                          <input
                            type="email"
                            id="email"
                            className="form-control email"
                            placeholder="Email address"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            autoComplete="off"
                            onBlur={formik.handleBlur}
                            ref={userRef}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            id="password"
                            type="password"
                            className="form-control password"
                            name="password"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.password && formik.errors.password ? (
                            <span id="passwordError" className="text-danger">
                              {formik.errors.password}
                            </span>
                          ) : null}
                        </div>

                        <div className="row remember-row">
                          <div className="col-xs-6 col-sm-6">
                            <label className="checkbox text-left">
                              <AddUserModal>
                                <span className="label-text">
                                  Create Account
                                </span>
                              </AddUserModal>
                            </label>
                          </div>
                          <div className="col-xs-6 col-sm-6">
                            <p className="forgotPwd">
                              <Link to="forgot-password">Forgot password?</Link>
                            </p>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="d-grid gap-2">
                            <button
                              type="submit"
                              className="btn btn-lg btn-dark"
                            >
                              Login
                            </button>
                          </div>
                        </div>
                        <div className="row social-buttons my-4 ">
                          <div className="col-xs-4 col-sm-4 col-md-12">
                            <GoogleLogin
                              clientId={clientId}
                              buttonText="Login With Google"
                              onSuccess={handleLoginByGoogle}
                              onFailure={handleLoginFailure}
                              cookiePolicy={"single_host_origin"}
                              // isSignedIn={true}
                            ></GoogleLogin>
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
