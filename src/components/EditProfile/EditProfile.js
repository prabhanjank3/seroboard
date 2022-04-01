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
      fullName: Yup.string()
        .required("Required")
        .max(15, "Must be 15 characters or less"),
      email: Yup.string().email("Invalid Email").required("Required"),
      password: Yup.string()
        .required("Required")
        .max(15, "Must be 15 characters or less"),
      phoneNo: Yup.string()
        .required("Required")
        .max(10, "Must be 10 characters or less")
        .min(10, "Must be equal to 10 or less"),
      message: Yup.string()
        .required("Required")
        .max(100, "Must be 100 characters or less"),
      country: Yup.string()
        .required("Required")
        .max(15, "Must be 15 characters or less"),
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
            <div className="card-body">
              <small className="text-muted">Email address </small>
              <h6>{props.userData?.email}</h6>
              <small className="text-muted p-t-30 db">Phone</small>
              <h6>{props.userData.email}</h6>
              <small className="text-muted p-t-30 db">Address</small>
              <h6>{props.userData.email}</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-xlg-9 col-md-7">
          <div className="card">
            <div className="card-body">
              <form className="mx-2" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <label className="col-md-12 mb-2">Full Name</label>
                  <div className="col-md-12">
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Johnathan Doe"
                      className="form-control form-control-line"
                      onChange={formik.handleChange}
                      value={formik.values.fullName}
                      autoComplete="off"
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.fullName && formik.errors.fullName ? (
                    <span id="fullNameError" className="text-danger">
                      {formik.errors.fullName}
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
                  <label className="col-md-12 my-2">Password</label>
                  <div className="col-md-12">
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-line"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      autoComplete="off"
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                    <span id="passwordError" className="text-danger">
                      {formik.errors.password}
                    </span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label className="col-md-12 my-2">Phone No</label>
                  <div className="col-md-12">
                    <input
                      type="text"
                      id="phoneNo"
                      placeholder="123 456 7890"
                      className="form-control form-control-line"
                      onChange={formik.handleChange}
                      value={formik.values.phoneNo}
                      autoComplete="off"
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.phoneNo && formik.errors.phoneNo ? (
                    <span id="phoneNoError" className="text-danger">
                      {formik.errors.phoneNo}
                    </span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label className="col-md-12 my-2">Message</label>
                  <div className="col-md-12">
                    <textarea
                      rows={5}
                      id="message"
                      className="form-control form-control-line"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      autoComplete="off"
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.message && formik.errors.message ? (
                    <span id="messageError" className="text-danger">
                      {formik.errors.message}
                    </span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label className="col-sm-12 my-2">Select Country</label>
                  <div className="col-sm-12">
                    <select
                      className="form-select shadow-none form-control-line"
                      id="country"
                      onChange={formik.handleChange}
                      value={formik.values.country}
                      autoComplete="off"
                      onBlur={formik.handleBlur}
                    >
                      <option>London</option>
                      <option>India</option>
                      <option>Usa</option>
                      <option>Canada</option>
                      <option>Thailand</option>
                    </select>
                  </div>
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
