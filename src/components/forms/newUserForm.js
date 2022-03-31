import React, { useState } from "react";
import Property from "../../Properties";
import axios from "axios";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RoleInput from "../utils/dropdownInput";
import "./forms.css";
import "../component.css";
import { connect } from "react-redux";

const NewUserForm = (props) => {
  const initialState = {
    userfirstname: "",
    userlastname: "",
    useremail: "",
    userrole: "",
    userpassword: "reactapp@2022",
  };
  const navigate = useNavigate();
  const sendForInsert = () => {
    return props.action(formState);
  };
  const [formState, setState] = useState(initialState);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={(e) => {
                setState({ ...formState, userfirstname: e.target.value });
              }}
            />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={(e) => {
                setState({ ...formState, useremail: e.target.value });
              }}
            />
          </Col>
          <Col>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={(e) => {
                setState({ ...formState, userlastname: e.target.value });
              }}
            />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Role
            </label>
            <RoleInput
              title="Select Role"
              options={["ADMIN", "INSTRUCTOR", "COORDINATOR"]}
              onChange={(e) => {
                setState({ ...formState, userrole: e.target.value });
              }}
            />
          </Col>
        </Row>
        <Row>
          <Button
            type="button"
            className="btn btn-primary new-user-insert-btn"
            onClick={() => {
              sendForInsert();
            }}
          >
            Submit
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default NewUserForm;
