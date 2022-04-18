import React, { useState } from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DropdownInput from "../utils/dropdownInput";
import "./forms.css";
import "../component.css";
import { convertArrayToPgArray } from "../../services/commonFunctions";
import BatchDropdown from "../utils/BatchDropdownInput";
import ExcelFileInput from "../utils/excelfileinput";
// import emailjs from '@emailjs/browser';

const AddHelpForm = (props) => {
  const initialState = {
    participantfirstname: "",
    participantlastname: "",
    participantemail: "",
    participantbatchid: props.id,
    participantskills: "",
  };
  console.log(formState);
  const navigate = useNavigate();
  const stringToPgArray = (str) => {
    var starr = str.split(",");
    return convertArrayToPgArray(starr);
  };
  const sendForInsert = () => {
    var ret = stringToPgArray(formState.participantskills);
    var data = { ...formState, participantskills: ret };
    props.action(data);
    // emailjs.send('service_fo2n2if', 'template_vsn6ir9', 'formState', 'lCI_PMrNHlmFaPtzU');
  };
  const onExcelUpload = (data) => {
    console.log(data);
  };
  const [formState, setState] = useState(initialState);
  return (
    <div>
      <Container>
        <Row>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Import from excel file
          </label>
          <ExcelFileInput action={(data) => onExcelUpload(data)} />
        </Row>
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
                setState({
                  ...formState,
                  participantfirstname: e.target.value,
                });
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
                setState({ ...formState, participantemail: e.target.value });
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
                setState({ ...formState, participantlastname: e.target.value });
              }}
            />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Batch
            </label>
            <BatchDropdown
              title="Select Role"
              options={["ADMIN", "INSTRUCTOR", "COORDINATOR"]}
              value={formState.userrole}
              onChange={(e) => {
                setState({ ...formState, userrole: e.target.value });
              }}
            />
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Skills1 (enter comma seperated values without space)
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="E.g Java,Python"
              onChange={(e) => {
                setState({ ...formState, participantskills: e.target.value });
              }}
            />
          </Col>
        </Row> */}
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

export default AddHelpForm;
