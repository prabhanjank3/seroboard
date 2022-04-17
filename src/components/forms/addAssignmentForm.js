import React, { useState } from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DropdownInput from "../utils/dropdownInput";
import "./forms.css";
import "../component.css";
import { convertArrayToPgArray } from "../../services/commonFunctions";
import { number } from "yup";
import BatchDropdownInput from "../utils/BatchDropdownInput";
const NewPostAssessmentForm = (props) => {
  const initialState = {
    assignmentname: "",
    assignmentdate: "",
    batchid: "",
    maxscore:0,
    passingpercentage:0
  };
  const sendForInsert = () => {
    props.action(formState);
  };
  const [formState, setState] = useState(initialState);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Assignment Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={(e) => {
                setState({
                  ...formState,
                  assignmentname: e.target.value,
                });
              }}
            />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Assignment Date
            </label>
            <input
              type="date"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={(e) => {
                setState({ ...formState, assignmentdate: e.target.value });
              }}
            />
          </Col>
          <Col>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Batch Id
            </label>
            <BatchDropdownInput onChange={(e) => {
                setState({ ...formState, batchid: e.target.value });
              }} />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Maximum Score
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={(e) => {
                setState({ ...formState, maxscore: e.target.value });
              }}
            />
          </Col>
        </Row>
        <Row>
        <Col>
        <label htmlFor="exampleFormControlInput1" className="form-label">
              Passing Percentage
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={(e) => {
                setState({ ...formState, passingpercentage: e.target.value });
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

export default NewPostAssessmentForm;
