import React from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

function EditProfile(props) {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      phoneNo: "",
      message: "",
      country: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Required")
        .max(15, "Must be 15 characters or less"),
      lastName: Yup.string()
        .required("Required")
        .max(15, "Must be 15 characters or less"),
      email: Yup.string().email("Invalid Email").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-xlg-3 col-md-5">
          <div className="card">
            <div className="card-body">
              <center className="mt-1">
                <img
                  src={props.userData.imageUrl}
                  className="rounded-circle"
                  width={130}
                  alt="User Profile"
                />
                <h4 className="card-title mt-2 ">
                  {props.userData.userFirstName}
                </h4>
                <h6 className="card-subtitle mt-2">{props.userData.role}</h6>
              </center>
            </div>
            <div>
              <hr />
            </div>
            <div className="card-body text-center">
              <small className="text-muted">Email address </small>
              <h6>{props.userData?.email}</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-xlg-9 col-md-7">
          <div className="card">
            <div className="card-body">
              <form className="mx-2" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <label className="col-md-12 mb-2">First Name</label>
                  <div className="col-md-12">
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Johnathan"
                      className="form-control form-control-line"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                      autoComplete="off"
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <span id="fullNameError" className="text-danger">
                      {formik.errors.firstName}
                    </span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label className="col-md-12 mb-2">Last Name</label>
                  <div className="col-md-12">
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Doe"
                      className="form-control form-control-line"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                      autoComplete="off"
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <span id="fullNameError" className="text-danger">
                      {formik.errors.lastName}
                    </span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="example-email" className="col-md-12 my-2">
                    Email
                  </label>
                  <div className="col-md-12">
                    <input
                      type="email"
                      placeholder="johnathan@admin.com"
                      className="form-control form-control-line"
                      name="email"
                      id="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      autoComplete="off"
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <span id="emailError" className="text-danger">
                      {formik.errors.email}
                    </span>
                  ) : null}
                </div>

                <div className="form-group">
                  <div className="col-sm-12 mt-4">
                    <div className="d-grid gap-2">
                      <button
                        type="submit"
                        className="btn btn-success text-white"
                      >
                        Update Profile
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: {
      role: state.authData.role,
      userFirstName: state.authData.userFirstName,
      imageUrl: state.authData.imageUrl,
      email: state.authData.email,
    },
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUserLoggedIn: (actionType, payLoad) => {
      dispatch({ type: actionType, payLoad: payLoad });
    },
    setUserLoggedOut: () => {
      dispatch({ type: "LOG_OUT" });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
