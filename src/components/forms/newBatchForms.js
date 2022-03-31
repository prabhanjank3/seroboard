import React, { useState } from "react";
import Property from "../../Properties";
import axios from "axios";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RoleInput from "../utils/dropdownInput";
import "./forms.css";
import "../component.css";
export default (props) => {
  const initialState = {
    batchname: "",
    batchstartdate: "",
    batchenddate: "",
    instructorname: "",
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
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Batch Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={(e) => {
              setState({ ...formState, batchname: e.target.value });
            }}
          />
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Start Date
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={(e) => {
              setState({ ...formState, batchstartdate: e.target.value });
            }}
          />
          <label htmlFor="exampleFormControlInput1" className="form-label">
            End Date
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={(e) => {
              setState({ ...formState, batchenddate: e.target.value });
            }}
          />
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Instructor
          </label>
          <RoleInput
            title="Select Instructor"
            options={["Raghu", "Gopi", "Mahesh"]}
            onChange={(e) => {
              setState({ ...formState, instructorname: e.target.value });
            }}
          />
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
